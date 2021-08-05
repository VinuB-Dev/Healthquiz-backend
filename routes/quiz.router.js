const express = require('express')
const router = express.Router()
const { quiz } = require('../data/quiz-data')
const Quiz = require("../models/quiz.model");


function insertData() {
  quiz.map((quizes) => {
    let quiz_new = new Quiz(quizes)
    quiz_new.save();
  })
}

// insertData();

router.route('/')
  .get(async (req, res) => {
    try {
      const quizes = await Quiz.find({});
      console.log(quizes)
      res.json({ success: true, quizes })
    }
    catch (error) {
      res.status(500).json({ success: false, message: "route not found" })
    }
  })
  .post(async (req, res) => {
    try {
      // await insertData();
      res.json({ success: true, videos: quizes })
    }
    catch (err) {
      res.status(500).json({ success: false, message: "route not found" })
    }
  })


module.exports = router

