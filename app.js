require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// routes
const test = require("./routes/test.js");

const scrappy = require("./routes/scrappy.js");

app.use("/test", test);

app.use("/scrappy", scrappy);

const port = process.env.APP_PORT || 4321;

app.listen(port, () => {
  console.log(`App running at ${port}`);
});
