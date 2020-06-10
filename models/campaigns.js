const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema(
  {
    nickName: {type: String, required: true},
    imgUrl: {type: String},
    chars: {type: Array},
    ownedBy: {type: String, required: true},
    viewable: {type: Boolean, required: true, default: true}
  }
);

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;