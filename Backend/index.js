const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const connectDB = require("./Database/database");

const router = require("./Routes/router");

const app = express();

// Connexion à la base de donnée
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

//Route
app.use("/", router);

//Serveur
app.listen(
  process.env.PORT,
  console.log(`Le serveur est démarré sur le port ${process.env.PORT}`)
);
