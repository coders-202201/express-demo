const express = require("express");
const Gatete = require("../../db/models/Gatete");

const router = express.Router();

router.get("/list", async (req, res) => {
  const gatetes = await Gatete.find();
  res.json({ gatetes });
});

router.post("/anyadir", async (req, res) => {
  const newGatete = req.body;
  const createdGatete = await Gatete.create(newGatete);
  res.status(201);
  res.json(createdGatete);
});

module.exports = router;
