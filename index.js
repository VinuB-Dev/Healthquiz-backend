const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')

app.use(cors());
app.use(express.json());
const { connection } = require("./db_connect");

connection();
const quiz_router = require("./routes/quiz.router")

app.get('/', (req, res) => {
  res.send("Welcome to HealthStore Api")
});

app.use('/quiz', quiz_router)


app.use((req, res) => {
  res.status(404).json({ sucess: false, message: "route not found on server please check" })
})


app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "the route you're looking for couldn't be found" })
})

app.listen(3000, () => {
  console.log('server started');
});



