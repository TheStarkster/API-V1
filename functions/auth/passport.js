const facebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
require("dotenv").config()
passport.use(
  new facebookStrategy(
    {
      clientID: process.env.FB_CLIENT_ID,
      clientSecret: process.env.FB_CLIENT_SECRET,
      callbackURL: `${process.env.HOST}/v1/callback/facebook`,
      profileFields: [
        "id",
        "displayName",
        "name",
        "gender",
        "picture.type(large)",
        "email",
      ],
    },
    function (token, refreshToken, profile, done) {
      if  (profile)  {
        done(null, true);
      }
    }
  )
);