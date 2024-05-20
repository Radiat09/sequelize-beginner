const express = require("express");
const bodyParser = require("body-parser");
const student = require("./models/student.model.js");
const app = express();
const port = process.env.PORT || 6200;

//Middleware
app.use(bodyParser.json());
//Middleware

app.get("/", (req, res) => {
  res.send("Hello, Sequal is running!");
});

student.sync({ force: true });

app.listen(port, () => {
  console.log(`Sequalize is running on: http://localhost:${port}`);
});
