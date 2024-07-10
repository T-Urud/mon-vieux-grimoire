const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const stuffCtrl = require("../controllers/stuff");

router.get("/", stuffCtrl.getAllBook);
router.post("/", (req, res, next) => {
  delete req.body._id;
});
router.put("/:id", auth, multer, stuffCtrl.modifyBook);

router.delete("/:id", stuffCtrl.deleteBook);
router.get("/:id", stuffCtrl.getOneBook);

router.get("/bestrating", (req, res, next) => {
  Book.find({ averageRating: req.params });
  // A COMPLETER
});

module.exports = router;
