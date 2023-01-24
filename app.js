require("dotenv").config();

const express = require("express");

const app = express();

// routes
const test = require("./routes/test.js");

const scrappy = require("./routes/scrappy.js");

app.use("/test", test);

app.use("/scrappy", scrappy);

const port = process.env.PORT || 4321;

app.listen(port, () => {
  console.log(`App running at ${port}`);
});
