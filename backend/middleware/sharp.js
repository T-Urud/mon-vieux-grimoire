const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const resizedImage = async (req, res, next) => {
  await sharp(req.file.buffer)
    .resize(600, 600, {
      withoutEnlargement: true,
      fit: "contain",
    })
    .withMetadata()
    .toBuffer();

  next();
};

module.exports = resizedImage;
