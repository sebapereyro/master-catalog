const express = require('express'); // common js module instead of ES2015 modules
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express(); // we can have multiple express apps. but the vast majority is only one

passport.use(new GoogleStrategy());

app.get('/auth/google', (req, res) => {
  res.send({ hi: 'oh you want to login into Google' });
});

app.get('/auth/google/callback', (req, res) => {
  res.send({ hi: 'oh you want to login into Google' });
});

//read PORT env variable
const PORT = process.env.PORT || 5000;
app.listen(PORT);
