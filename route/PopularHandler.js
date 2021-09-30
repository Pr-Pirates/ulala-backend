const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const popularSchema =require('../Schema/popularSchema');
const Popular = new mongoose.model("Popular", popularSchema);

// POST A Popular
router.post("/", async (req, res) => {
    const newPopular = new Popular(req.body);
    await newPopular.save((err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          message: "Popular was inserted successfully!",
        });
      }
    });
  });
// POST MULTIPLE Popular
router.post("/all", async (req, res) => {
  await Popular.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Popular were inserted successfully!",
      });
    }
  });
});

// GET ALL THE Popular
router.get("/", async (req, res) => {
  await Popular.find()
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
         PopularData: data,
          message: "Success",
          
        });

      }
    
    });
   
});

// DELETE Popular
router.delete("/:id", async (req, res) => {
    id= new ObjectId
  await Popular.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Popular was deleted successfully!",
      });
    }
  });
});

  module.exports = router;