const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");

const userScema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    con_password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    // tokens: [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]

})


userScema.pre("save", async function(next) {
    this.password = await bcryptjs.hash(this.password, 10)
    this.con_password = await bcryptjs.hash(this.password, 10)
    next();

})

// userScema.methods.genrateAuthToken = async function() {
//     try {
//         const token = jwt.sign({ _id: this._id.toString() }, "tejassanjaypawaratkakaditalkopargaon");
//         this.tokens = this.tokens.concat({ token: token });
//         await this.save();
//     } catch (e) {
//         console.log(e);

//     }
// }
const Users = new mongoose.model("user", userScema)
module.exports = Users;