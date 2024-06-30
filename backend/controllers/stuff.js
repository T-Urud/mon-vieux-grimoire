const Book = require("../models/Book");
const User = require("../models/User");

exports.getOneBook = (req, res, next) => {
  Book.findOne({ _id: req.params.id })
    .then((book) => res.status(200).json({ book }))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllBook = (req, res, next) => {
  Book.find()
    .then((books) => {
      res.status(200).json({ books });
    })
    .catch((error) => res.status(404).json({ error }));
};
