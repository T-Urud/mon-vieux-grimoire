const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const { upload, resizedImage } = require("../middleware/multer-config");
const stuffCtrl = require("../controllers/stuff");

router.get("/", stuffCtrl.getAllBook);
router.post("/", auth, upload, resizedImage, stuffCtrl.createBook);
router.put("/:id", auth, upload, resizedImage, stuffCtrl.modifyBook);
router.delete("/:id", auth, stuffCtrl.deleteBook);
router.get("/bestrating", stuffCtrl.getBestBooks);
router.get("/:id", stuffCtrl.getOneBook);
router.post("/:id/rating", auth, stuffCtrl.rateBook);

module.exports = router;
