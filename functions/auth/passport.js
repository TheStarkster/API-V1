const facebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

passport.use(
  new facebookStrategy(
    {
      clientID: "688100722062209",
      clientSecret: "6a37bb7980206c3d0eb0820d18813669",
      callbackURL: "http://localhost:9000/v1/callback/facebook",
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
      console.log(profile);
      return done(null, profile);
    }
  )
);
