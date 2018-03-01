const mongoose = require('mongoose');
const User = mongoose.model('users');

exports.findById = async id => {
  console.log('Executing: findById(id)');
  console.log('User Id: ', id);
  const user = await User.findById(id);
  return user;
};

exports.findOrCreate = async profile => {
  console.log('Executing: findOrCreate(profile)');
  console.log('Profile id: ', profile.id);
  var user = await User.findOne({ googleId: profile.id });

  if (user) {
    console.log('Existing user, returning it: ' + user);
    return user;
  }

  console.log('Welcome new user!. Creating it and returning it...');
  user = buildNewUser(profile).save(); // we do not have the user we will create it now
  return user;
};

// private functions
function buildNewUser(profile) {
  return new User({
    googleId: profile.id,
    emails: profile.emails
  });
}
