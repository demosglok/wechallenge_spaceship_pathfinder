const mongoose = require('mongoose');

// define the schema for our company model
const imageSchema = mongoose.Schema({
  user_id: {type: mongoose.Schema.ObjectId, ref: 'User', index: true},
  name: String,
  description: String, 
  email: String,
  signature: String,
  hash: {type: String, index: 1},
  nem: mongoose.Schema.Types.Mixed,
  eth: mongoose.Schema.Types.Mixed,
  btc: mongoose.Schema.Types.Mixed,
  created_at: Date,
  tracking: Boolean,
  certificate: String
});


// create the model for users and expose it to our app
module.exports = mongoose.model('Image', imageSchema);
