   
const mongoose = require("mongoose");

const liveTvSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
 
  type: {
    type: String,
    required: true,
  },
 
  video: {
    type: String,
    required: true,
  },
 
});

module.exports = liveTvSchema;