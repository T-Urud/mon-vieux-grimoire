const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const { upload, resizedImage } = require("../middleware/multer-config");
const bookCtrl = require("../controllers/book");

router.get("/", bookCtrl.getAllBook);
router.post("/", auth, upload, resizedImage, bookCtrl.createBook);
router.put("/:id", auth, upload, resizedImage, bookCtrl.modifyBook);
router.delete("/:id", auth, bookCtrl.deleteBook);
router.get("/bestrating", bookCtrl.getBestBooks);
router.get("/:id", bookCtrl.getOneBook);
router.post("/:id/rating", auth, bookCtrl.rateBook);

module.exports = router;
