const express = require("express");

const router = express.Router();

router.get("/get", (req, res) => {
  res.status(200).json({ message: "Hey there buddy!" });
});

router.post("/post", (req, res) => {
  res.status(200).json({ data: req.body, message: "Works fine!" });
});

module.exports = router;
