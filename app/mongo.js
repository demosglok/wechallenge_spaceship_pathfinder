const mongoose = require('mongoose');

const config = require('../config');
const mongourl = config.mongourl;

mongoose.connect(mongourl, {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', (err) => console.error('MongoDB connection error:', err));
module.exports = db;