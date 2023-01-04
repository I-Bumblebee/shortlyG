const { model, Schema } = require("mongoose");

const urlSchema = new Schema({
  longUrl: String,
  id: {type: String},
  shortUrl: { type: String, unique: true },
});

const Url = model("Url", urlSchema);

module.exports = Url;
