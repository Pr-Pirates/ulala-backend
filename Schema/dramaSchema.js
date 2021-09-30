   
const mongoose = require("mongoose");

const dramaSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
 
  video: {
    type: String,
    required: true,
  },
 
});

module.exports = dramaSchema;