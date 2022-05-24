const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    date: {
        type: Date,
    },
    event: {
        type: String,
    },
    eventDate: {
        type: String,
    },
    desc: {
        type: String,
    },
    doctorName: {
        type: String,
    },
    location: {
        type: String,
    },
    notes: {
        type: String,
    }
})
const event = new mongoose.model("event", eventSchema);
module.exports = event;