const mongoose = require("mongoose");
require("dotenv").config();
const MongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/goodera";
const connect = () => mongoose.connect(MongoURI);

module.exports = connect;
