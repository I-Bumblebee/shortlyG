const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once("open", () =>
  console.log("Connected to a MongoDB instance")
);

mongoose.connection.on("error", (error) => console.error(error));

module.exports = mongoose;
