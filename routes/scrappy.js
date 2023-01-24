const express = require("express");

const router = express.Router();

const controller = require("../controller/scrappy.controller.js");

router.post("/scrape", controller.convertToKeywords);

module.exports = router;
