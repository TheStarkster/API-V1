const router = require("express").Router();
const passport = require("passport");

router.get("/facebook", passport.authenticate("facebook", { scope: "email" }));

module.exports = router;
