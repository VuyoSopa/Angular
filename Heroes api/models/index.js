const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.hero = require("./hero.model.js")(mongoose);

module.exports = db;