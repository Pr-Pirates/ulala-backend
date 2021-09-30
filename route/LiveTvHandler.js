const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const liveTvSchema =require('../Schema/liveTvSchema');
const LiveTv = new mongoose.model("LiveTv", liveTvSchema);

// POST A LiveTv
router.post("/", async (req, res) => {
    const newLiveTv = new LiveTv(req.body);
    await newLiveTv.save((err) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          message: "LiveTv was inserted successfully!",
        });
      }
    });
  });
// POST MULTIPLE LiveTv
router.post("/all", async (req, res) => {
  await LiveTv.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "LiveTv were inserted successfully!",
      });
    }
  });
});

// GET ALL THE LveTvs
router.get("/", async (req, res) => {
  await LiveTv.find()
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
         liveTvDaa: data,
          message: "Success",
          
        });
      }
    });
});

// DELETE LivTv
router.delete("/:id", async (req, res) => {
    id= new ObjectId
  await LiveTv.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "LiveTv was deleted successfully!",
      });
    }
  });
});

  module.exports = router;