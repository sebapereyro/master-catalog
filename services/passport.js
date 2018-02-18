const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const userService = require('./user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  userService.findById(id).then(user => {
    console.log(user);
    done(null, user);
  });
});

//configure passport for Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || keys.googleClientID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      userService.findOrCreate(profile).then(user => {
        console.log(user);
        done(null, user);
      });
    }
  )
);
