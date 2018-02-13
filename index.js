const express = require('express'); // common js module instead of ES2015 modules
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express(); // we can have multiple express apps. but the vast majority is only one

const googleProps = {
  clientID: process.env.GOOGLE_CLIENT_ID || keys.googleClientID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
};

//configure passport for Google OAuth
passport.use(
  new GoogleStrategy(googleProps, accessToken => {
    console.log(accessToken);
  })
);

// initiate the google auth
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

// handle google callback
app.get('/auth/google/callback', (req, res) => {
  res.send({ hi: 'oh you want to login into Google' });
});

//read PORT env variable
const PORT = process.env.PORT || 5000;
app.listen(PORT);
