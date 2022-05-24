const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");


const farm = new mongoose.Schema({
    farmName: {
        type: String,
        required: true,

    },
    farmDesc: {
        type: String,

    },
    farmAdd: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
})
const farms = new mongoose.model("farm", farm)
module.exports = farms;