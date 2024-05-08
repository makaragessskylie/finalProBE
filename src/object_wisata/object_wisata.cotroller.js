const express = require("express");
const multer = require("multer");
const { storage } = require("../config");
const { createNewDestination } = require("./object_wisata.service");
const upload = multer({ storage: storage });

const router = express.Router();

// create new destination
router.post("/", upload.array("images", 5), async (req, res) => {
  const images = req.files?.map((file) => file.path);
  const data = req.body;
  try {
    const destination = await createNewDestination({ ...data, images });
    return res.status(201).json({
      status: "success",
      message: "Destination created successfully",
      data: destination,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

module.exports = router;