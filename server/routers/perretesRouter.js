const express = require("express");

const router = express.Router();

router.get("/list", (req, res) => {
  res.json({ perretes: true });
});

module.exports = router;
