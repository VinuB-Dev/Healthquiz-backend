const mongoose = require("mongoose");

const {Schema} = mongoose;

const OptionSchema = new Schema({
  optionId: Number,
  option: String,
}, {timestamps: true});

const QuestionSchema = new Schema({
  questionId: Number,
  question: String,
  options: [OptionSchema],
}, {timestamps: true});

const QuizSchema = new Schema({
  image: String,
  name: String,
  questions: [QuestionSchema],
  answers: [Number]
}, {timestamps: true});

const Quiz = mongoose.model("QuizSchema", QuizSchema);

module.exports = Quiz;