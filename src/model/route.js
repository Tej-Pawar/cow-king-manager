const express = require("express");
const async = require("hbs/lib/async");
const User = require("./userschema");

const router = new express.Router();
router.get("/index", async(req, resp) => {
    const userdata = await user.find()
    console.log(userdata)
})
module.exports = router;