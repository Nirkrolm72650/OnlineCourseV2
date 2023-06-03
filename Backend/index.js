const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.json("Message OK");
});

app.listen(
  process.env.PORT,
  console.log(`Le serveur est démarré sur le port ${process.env.PORT}`)
);
