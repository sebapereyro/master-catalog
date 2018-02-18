const mongoose = require('mongoose');
const User = mongoose.model('users');

exports.findById = id => {
  console.log('Executing: findById()');
  console.log('User Id: ', id);
  return new Promise((resolve, reject) => {
    User.findById(id)
      .then(user => resolve(user))
      .catch(err => reject(new Error('failed to query DB')));
  });
};

exports.findOrCreate = profile => {
  console.log('Executing: findOrCreate()');
  console.log('Profile id: ', profile.id);
  return new Promise((resolve, reject) => {
    User.findOne({ googleId: profile.id })
      .then(existingUser => {
        if (existingUser) {
          console.log('Existing user, returning it');
          resolve(existingUser);
        } else {
          console.log('Welcome new user!. Creating it and returning it...');
          // we do not have the user we will create it now
          const newUser = new User({
            googleId: profile.id,
            emails: profile.emails
          });
          newUser.save().then(user => resolve(user));
        }
      })
      .catch(err => reject(new Error('failed to query DB')));
  });
};
