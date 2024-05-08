const multer = require("multer");
const mime = require("mime-types");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const extension = mime.extension(file.mimetype);
    cb(null, file.fieldname + "-" + Date.now() + "." + extension);
  },
});

module.exports = {
  storage,
};