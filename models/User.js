const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  googleId: {
    type: String,
    required: true
  },

  email: {
    type: String
  },

  avatar: {
    type: String
  },

  threadsCreated: {
    type: Number,
    default: 0,
  },

  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment',
  }],

}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);