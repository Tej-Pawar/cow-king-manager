const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");

// const userRouter = require("./route/router")


// app.use(userRouter)
require("./db/db")
const Users = require("./model/userschema")
const farms = require("./model/farmSchema")
const animals = require("./model/animalSchema")
const events = require("./model/eventSchena")

const staticpath = path.join(__dirname, "../public")
app.use(express.static(staticpath))
const hbs = require("hbs");
const async = require("hbs/lib/async");
const partialpath = path.join(__dirname, "../templete/partial");
hbs.registerPartials(partialpath);
const templetepath = path.join(__dirname, "../templete/views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.set("view engine", "hbs");
app.set("views", templetepath);
app.get("/", (req, resp) => {
    resp.render("signin")
})
app.post("/signin", async(req, resp) => {
    const password = req.body.spass;
    const con_password = req.body.cpass;
    const email = req.body.email;

    if (password === con_password) {
        const user = new Users({
                username: req.body.username,
                password: password,
                con_password: con_password,
                email: email,
            })
            // const token = await user.genrateAuthToken();

        const registerUser = await user.save();
        resp.status(201).render("index", {
            firstName: registerUser.username
        });
    } else {
        resp.render("signin", {
            messege: "password not Match"
        })
    }
    app.post("/addfarm", async(req, resp) => {
        const farmName = req.body.farmName;
        try {
            const farm = new farms({
                farmName: req.body.farmName,
                farmDesc: req.body.farmDesc,
                farmAdd: req.body.farmAdd,
                contact: req.body.contact,
                email: email
            })
            const postFarm = await farm.save();
            const findFarms = await farms.find({ email: email });
            resp.render("welcome-farm", {
                farmName: "tejas"
            })
            const addfarm = require("../public/main")
            console.log(addfarm)
        } catch (e) {
            console.log(e)
        }
    })
    app.post("/addanimal", async(req, resp) => {
        const aniName = req.body.animalName;
        try {
            const animal = new animals({
                email: email,
                animalName: aniName,
                tagNumber: req.body.tagNumber,
                gender: req.body.gender,
                breed: req.body.breed,
                lacting: req.body.lacting,
                source: req.body.source,
                desc: req.body.desc,
                birthdate: req.body.birthdate,
                joindate: req.body.joindate,
                father: req.body.father,
                mother: req.body.mother,
                weight: req.body.weight,
                height: req.body.height,
                length: req.body.length,
                notes: req.body.notes,
                animalType: req.body.animalType,
            })
            const animalC = await animal.save()
            resp.render("show-animal");
        } catch (e) {
            console.log(e);
        }
        app.post("/addevent", async(req, resp) => {
            try {
                const event = new events({
                    email: email,
                    event: req.body.event,
                    date: req.body.date,
                    eventDate: req.body.eventDate,
                    desc: req.body.desc,
                    doctorName: req.body.doctorName,
                    location: req.body.location,
                    notes: req.body.notes,
                })
                const eventC = await event.save();
                resp.render("show-event")
            } catch (e) {
                console.log(e);

            }
        })


    })
})

app.post("/login", async(req, resp) => {
    const email = req.body.email;
    module.exports = email;
    const password = req.body.password;
    try {
        const logindata = await Users.findOne({ email: email });
        const isMatch = await bcryptjs.compare(password, logindata.password)
        if (isMatch) {
            resp.render("index", {
                firstName: logindata.username
            })
        } else {
            resp.render("signin", {
                messege: "Invalid login, Enter valid login"
            })
        }
        // resp.status(200).send("ok")


    } catch (e) {
        resp.status(400).render("signin", {
            messege: "Invalid login, Enter valid login"
        });
    }
    app.post("/addfarm", async(req, resp) => {
        const farmName = req.body.farmName;
        try {
            const farm = new farms({
                farmName: req.body.farmName,
                farmDesc: req.body.farmDesc,
                farmAdd: req.body.farmAdd,
                contact: req.body.contact,
                email: email
            })
            const postFarm = await farm.save();

            resp.render("welcome-farm", {
                farmName: postFarm.farmName
            });
        } catch (e) {
            console.log(e)
        }
    })
    app.post("/addanimal", async(req, resp) => {
        const animalName = req.body.animalName;
        console.log(animalName)
        try {
            const animal = new animals({
                email: email,
                animalName: req.body.animalName,
                tagNumber: req.body.tagNumber,
                gender: req.body.gender,
                breed: req.body.breed,
                lacting: req.body.lacting,
                source: req.body.source,
                desc: req.body.desc,
                birthdate: req.body.birthdate,
                joindate: req.body.joindate,
                father: req.body.father,
                mother: req.body.mother,
                weight: req.body.weight,
                height: req.body.height,
                length: req.body.length,
                notes: req.body.notes,
                animalType: req.body.animalType,
            })
            const animalC = await animal.save()
            resp.render("show-animal");
        } catch (e) {
            console.log(e);
        }
    })
    app.post("/addevent", async(req, resp) => {
        try {
            const event = new events({
                email: email,
                event: req.body.event,
                date: req.body.date,
                eventDate: req.body.eventDate,
                desc: req.body.desc,
                doctorName: req.body.doctorName,
                location: req.body.location,
                notes: req.body.notes,
            })
            const eventC = await event.save();
            resp.render("show-event")
        } catch (e) {
            console.log(e);

        }
    })

})






app.get("/users/:email", async(req, resp) => {
    try {
        const email = req.params.email;
        const result = await Users.find({ email: email })
        resp.status(201).send(result)

    } catch (e) { resp.status(401).send(e) }

})
app.get("/farms/:email", async(req, resp) => {
    try {
        const email = req.params.email;
        const result = await farms.find({ email: email })
        resp.status(201).send(result)

    } catch (e) { resp.status(401).send(e) }

})
app.get("/events/:email", async(req, resp) => {
    try {
        const email = req.params.email;
        const result = await events.find({ email: email })
        resp.status(201).send(result)

    } catch (e) { resp.status(401).send(e) }

})
app.get("/animals/:email", async(req, resp) => {
    try {
        const email = req.params.email;
        const result = await animals.find({ email: email })
        resp.status(201).send(result)

    } catch (e) { resp.status(401).send(e) }

})


app.get("/index", async(req, resp) => {
    const userdata = await Users.find();
})
app.get("/", (req, resp) => {
    resp.render("index");
})
app.get("/addanimal", (req, resp) => {
    resp.render("addanimal");
})
app.get("/show-event", (req, resp) => {
    resp.render("show-event");
})
app.get("/addevent", (req, resp) => {
    resp.render("addevent");
})
app.get("/show-animal", (req, resp) => {
    resp.render("show-animal");
})
app.get("/welcome-farm", (req, resp) => {
    resp.render("welcome-farm");
})
app.get("/addfarm", (req, resp) => {
    resp.render("addfarm");
})

app.get('*', (req, resp) => {
    resp.render("404");
})
app.listen(8000);