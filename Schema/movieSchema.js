   
const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
 
});

module.exports = movieSchema;