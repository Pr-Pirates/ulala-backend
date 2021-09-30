const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const dramaSchema =require('../Schema/dramaSchema');
const Drama = new mongoose.model("Drama", dramaSchema);

// POST A Drama
router.post("/", async (req, res) => {
    const newDrama = new Drama(req.body);
    await newDrama.save((err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          message: "Drama was inserted successfully!",
        });
      }
    });
  });
// POST MULTIPLE Drama
router.post("/all", async (req, res) => {
  await Drama.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Drama were inserted successfully!",
      });
    }
  });
});

// GET ALL THE Drama
router.get("/", async (req, res) => {
  await Drama.find()
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
         DramaData: data,
          message: "Success",
          
        });

      }
    
    });
   
});

// DELETE Drama
router.delete("/:id", async (req, res) => {
    id= new ObjectId
  await Drama.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Drama was deleted successfully!",
      });
    }
  });
});

  module.exports = router;