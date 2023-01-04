const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, default: null },
  email: {
    type: String,
    unique: true,
    match: [/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/],
  }, //unique true automaticly makes sure that no two users have same email
  password: String,
  });

const User = model("user", userSchema);

module.exports = User;
