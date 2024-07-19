const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const stuffCtrl = require("../controllers/stuff");
const sharp = require("../middleware/sharp");

router.get("/", stuffCtrl.getAllBook);
router.post("/", auth, multer, sharp, stuffCtrl.createBook);
router.put("/:id", auth, multer, sharp, stuffCtrl.modifyBook);
router.delete("/:id", auth, stuffCtrl.deleteBook);
router.get("/bestrating", stuffCtrl.getBestBooks);
router.get("/:id", stuffCtrl.getOneBook);
router.post("/:id/rating", auth, stuffCtrl.rateBook);

module.exports = router;
