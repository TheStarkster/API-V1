const passport = require('passport');
const Profile = require('../../../models/Profile');
const FacebookStrategy = require("passport-facebook").Strategy
require('dotenv').config()

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

passport.use(new FacebookStrategy({
    clientID: process.env.CLIENT_ID_FB,
    clientSecret: process.env.CLIENT_SECRET_FB,
    callbackURL: "http://localhost:3000/v1/user/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    Profile.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));