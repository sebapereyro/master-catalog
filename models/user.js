const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose; // de-structuring

const userSchema = new Schema({
  googleId: String,
  firstName: String,
  lastName: String,
  emails: Object
});

mongoose.model('users', userSchema);
