const mongoose = require("mongoose");
require("dotenv").config()
const MONGOURL=process.env.url

const connection = mongoose.connect(MONGOURL);

module.exports = { connection };