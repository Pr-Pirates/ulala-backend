const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const movieSchema =require('../Schema/movieSchema');
const Movie = new mongoose.model("Movie", movieSchema);

// POST A Movie
router.post("/", async (req, res) => {
    const newMovie = new Movie(req.body);
    await newMovie.save((err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          message: "Movie was inserted successfully!",
        });
      }
    });
  });
// POST MULTIPLE Movie
router.post("/all", async (req, res) => {
  await Movie.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Movie were inserted successfully!",
      });
    }
  });
});

// GET ALL THE Movie
router.get("/", async (req, res) => {
  await Movie.find()
    .select({
      __v: 0,
    })

    .exec((err,data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
         MovieData: data,
          message: "Success",
          
        });

      }
    
    });
   
});

// DELETE Movie
router.delete("/:id", async (req, res) => {
    id= new ObjectId
  await Movie.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Movie was deleted successfully!",
      });
    }
  });
});

  module.exports = router;