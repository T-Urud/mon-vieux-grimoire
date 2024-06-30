const express = require("express");
const router = express.Router();
const stuffCtrl = require("../controllers/stuff");

router.get("/:id", stuffCtrl.getOneBook);

router.get("/api/books/bestrating", (req, res, next) => {
  Book.find({ averageRating: req.params });
  // A COMPLETER
});

router.get("/", stuffCtrl.getAllBook);

module.exports = router;
