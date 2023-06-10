const express = require("express");
const router = express.Router();

router.get("/connexion", (req, res) => {
  res.json("Connexion");
});

router.get("/inscription", (req, res) => {
  res.json("Inscription");
});

module.exports = router;
