const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = process.env.ENV != 'prod' ? require('../config/keys') : null;

//configure passport for Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || keys.googleClientID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile:', profile);
      console.log('done', done);
    }
  )
);
