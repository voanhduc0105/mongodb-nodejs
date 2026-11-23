const mongoose = require('mongoose');
const config = require('../../config');

async function connect() {
  if (!config.mongo.uri) throw new Error('MONGO_URI is not defined');
  await mongoose.connect(config.mongo.uri, { dbName: config.mongo.dbName });
  console.log(`[${config.env}] MongoDB connected to ${config.mongo.dbName}`);
}

module.exports = { connect };