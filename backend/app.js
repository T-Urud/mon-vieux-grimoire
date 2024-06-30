const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/Book");
const User = require("./models/User");
const bodyParser = require("body-parser");

mongoose
  .connect(
    "mongodb+srv://bobtst:lolbeer@cluster0.mipioi0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

// --------- GET ----------

app.get("/api/books/:id", (req, res, next) => {
  Book.findOne({ _id: req.params.id })
    .then((book) => res.status(200).json({ book }))
    .catch((error) => res.status(404).json({ error }));
});

app.get("/api/books/bestrating", (req, res, next) => {
  Book.find({ averageRating: req.params });
  // A COMPLETER
});

app.get("/api/books", (req, res, next) => {
  Book.find()
    .then((books) => {
      res.status(200).json({ books });
    })
    .catch((error) => res.status(404).json({ error }));
});

module.exports = app;
