const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const upcomingSchema =require('../Schema/upcomingSchema');
const Upcoming = new mongoose.model("Upcoming", upcomingSchema);

// POST A Upcoming
router.post("/", async (req, res) => {
    const newUpcoming = new Upcoming(req.body);
    await newUpcoming.save((err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          message: "Upcoming was inserted successfully!",
        });
      }
    });
  });
// POST MULTIPLE Upcoming
router.post("/all", async (req, res) => {
  await Upcoming.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Upcoming were inserted successfully!",
      });
    }
  });
});

// GET ALL THE Upcoming
router.get("/", async (req, res) => {
  await Upcoming.find()
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
         UpcomingData: data,
          message: "Success",
          
        });

      }
    
    });
   
});

// DELETE Upcoming
router.delete("/:id", async (req, res) => {
    id= new ObjectId
  await Upcoming.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Upcoming was deleted successfully!",
      });
    }
  });
});

  module.exports = router;