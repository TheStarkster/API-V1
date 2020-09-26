const router= require("express").Router()
const Auth = require("./auth/auth");
const Callback = require("./callbacks/callbacks");

//user handlers...
// router.use("/user", require("./users/profile"));

//authentication handlers...
router.use("/authenticate", Auth)

//callbacks...
router.use("/callback", Callback)

module.exports = router