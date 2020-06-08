const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema(
  {
    nickName: {type: String, required: true},
    imgUrl: {type: String, default: "https://static.thenounproject.com/png/340719-200.png"},
    characters: {type: Array},
    ownedBy: {type: String, required: true},
    viewable: {type: Boolean, required: true, default: true}
  }
);

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;