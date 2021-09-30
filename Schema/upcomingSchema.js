const mongoose = require("mongoose");

const upcomingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
 
});

module.exports = upcomingSchema;