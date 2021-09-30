const express = require("express");
const mongoose = require("mongoose");
//require('dotenv').config();
const cors = require('cors');
const liveTvHandler = require('./route/LiveTvHandler')
const dramaHandler = require('./route/DramaHandler')
const movieHandler = require('./route/MovieHandler')
const popularHandler = require('./route/PopularHandler')
const upcomingHandler = require('./route/upcomingHandler')


// express app initialization
const app = express();
app.use(express.json());

app.use(cors());

const APP_PORT = 5000

// database connection with mongoose

const uri = "mongodb+srv://pirates:asdf1233@cluster0.sckbv.mongodb.net/ulala?retryWrites=true&w=majority";

//const uri = "mongodb+srv://organicCsv:as12333@cluster0.kxbrw.mongodb.net/organicdb?retryWrites=true&w=majority"
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

// application routes
app.use('/LiveTv',liveTvHandler)
app.use('/drama',dramaHandler)
app.use('/movie',movieHandler)
app.use('/popular',popularHandler)
app.use('/upcoming',upcomingHandler)

// default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(APP_PORT, () => {
  console.log(`Example app listening at http://localhost:${APP_PORT}`)
})