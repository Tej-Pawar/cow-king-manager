const mongoose = require("mongoose");
const animals = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    animalType: {
        type: String,

    },
    animalName: {
        type: String,
        required: true,
    },
    tagNumber: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
    },
    lacting: {
        type: String,
    },
    source: {
        type: String,
    },
    desc: {
        type: String,
    },
    birthdate: {
        type: Date,
    },
    joindate: {
        type: Date,
    },
    father: {
        type: String,
    },
    mother: {
        type: String,
    },
    weight: {
        type: String
    },
    height: {
        type: String
    },
    length: {
        type: String
    },
    notes: {
        type: String
    },
})
const animal = new mongoose.model("animal", animals);
module.exports = animal;