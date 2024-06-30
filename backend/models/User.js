const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  // password doit être haché
});

module.exports = mongoose.model("User", userSchema);
