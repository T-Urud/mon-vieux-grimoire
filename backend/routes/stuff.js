const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const stuffCtrl = require("../controllers/stuff");

router.post("/", (req, res, next) => {
  delete req.body._id;
});

router.delete("/:id", stuffCtrl.deleteBook);
router.get("/:id", stuffCtrl.getOneBook);

router.get("/bestrating", (req, res, next) => {
  Book.find({ averageRating: req.params });
  // A COMPLETER
});

router.get("/", stuffCtrl.getAllBook);

module.exports = router;
