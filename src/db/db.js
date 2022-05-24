const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/user")
    .then(() => {
        console.log("connection sucssefull")
    })
    .catch((e) => {
        console.log(e)
    })