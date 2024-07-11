const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const stuffCtrl = require("../controllers/stuff");

router.get("/", stuffCtrl.getAllBook);
router.post("/", auth, multer, stuffCtrl.createBook);
router.get("/:id", stuffCtrl.getOneBook);
router.put("/:id", auth, multer, stuffCtrl.modifyBook);
router.delete("/:id", auth, stuffCtrl.deleteBook);

router.get("/bestrating", auth, (req, res, next) => {
  Book.find({ averageRating: req.params });
  // A COMPLETER
});

router.post("/:id/rating", auth, (req, res, next) => {
  // notation du livre
});

module.exports = router;
