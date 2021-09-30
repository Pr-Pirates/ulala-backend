const mongoose = require("mongoose");

const popularSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
 
});

module.exports = popularSchema;