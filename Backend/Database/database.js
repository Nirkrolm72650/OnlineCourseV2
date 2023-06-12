const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log("Connecté à la base de donnée"));
  } catch (error) {
    console.error("Erreur lors de la connexion à la base de donnée. ", error);
  }
};

module.exports = connectDB;
