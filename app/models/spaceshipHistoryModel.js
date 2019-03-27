const mongoose = require('mongoose');

// define the schema for our company model
const spaceshipRequestSchema = mongoose.Schema({
  spaceshipId: {type: Number, index: 1},
  sector: Number,
  pathes: mongoose.Schema.Types.Mixed,
  createdAt: {type: Date, index: 1}
});

module.exports = mongoose.model('SpaceshipRequest', spaceshipRequestSchema);
