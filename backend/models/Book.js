const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Number, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Book", bookSchema);
