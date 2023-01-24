const express = require("express");

const router = express.Router();

const cheerio = require("cheerio");

const axios = require("axios");

router.post("/scrape", async (req, res) => {
  try {
    const response = await fetch("https://nuxtjs.org");
    const html = await response.text();
    const $ = cheerio.load(html);
    const data = $("body").text();
    res.json(data);
  } catch (error) {
    res.status(error.status).json(error.response);
  }
});

module.exports = router;
