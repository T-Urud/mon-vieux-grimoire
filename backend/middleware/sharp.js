const sharp = require("sharp");

const resizedImage = async (req, res, next) => {
  const name = file.originalname.split(" ").join("_");
  const extension = MIME_TYPES[file.mimetype];
  const filename = `${name}-${Date.now()}.${extension}`;
  const filePath = path;

  await sharp(req.file.buffer)
    .resize(600, 600, {
      withoutEnlargement: true,
      fit: "contain",
    })
    .withMetadata()
    .toBuffer();

  req.file.filename = filename;

  next();
};

module.exports = { resizedImage };
