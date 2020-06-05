const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema(
  {
    username: {type: String, required: true},
    password: {type: String },
    characters: {type: Array},
  }
);

const Users = mongoose.model('Users', campaignSchema);

module.exports = Users;