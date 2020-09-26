const router = require("express").Router();
const passport = require("passport");

router.get(
  "/facebook",
  passport.authenticate("facebook", {
    successRedirect: "/success",
    failureRedirect: "/fail",
  })
);

router.get("/fail", (req, res) => res.send("Failed"));
router.get("/success", (req, res) => res.send("Successfully Login"));

module.exports = router;
