const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

// stockage temporaire
const storage = multer.memoryStorage();

const fileFilter = (req, file, callback) => {
  if (MIME_TYPES[file.mimetype]) {
    callback(null, true);
  } else {
    callback(new Error("Merci d'ajouter une image"), false);
  }
};

// traiter 1seul fichier à la fois
const upload = multer({ storage, fileFilter }).single("image");

const resizedImage = async (req, res, next) => {
  const name = file.originalname.split(" ").join("_");
  const extension = MIME_TYPES[req.file.mimetype];
  const filename = `${name}-${Date.now()}.${extension}`;
  const outputPath = path.join(__dirname, "images", filename);

  if (!fs.existsSync(path.join(__dirname, "images"))) {
    fs.mkdirSync(path.join(__dirname, "images"), { recursive: true });
  }

  await sharp(req.file.buffer)
    .resize(600, 600, {
      withoutEnlargement: true,
      fit: "contain",
    })
    .withMetadata()
    .toFile(outputPath);

  req.file.filename = filename;
  req.file.path = outputPath;

  next();
};

module.exports = { upload, resizedImage };
