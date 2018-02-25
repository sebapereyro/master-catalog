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
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/packs');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send({ message: 'See yaa' });
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
