const passport = require('passport');

module.exports = app => {
  // initiate the google auth
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // handle google callback
  app.get('/auth/google/callback', passport.authenticate('google'));
};
