const express = require("express");
const multer = require("multer");
const { storage } = require("../config");
const {
  createNewDestination,
  getAllDestination,
  getDestinationById,
  updateDestinationData,
  removeDestination,
} = require("./object_wisata.service");
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
// get all destination
router.get("/", async (req, res) => {
  try {
    const destinations = await getAllDestination();
    return res.status(200).json({
      status: "success",
      message: "Destinations retrieved successfully",
      data: destinations,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});
// get destination by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const destination = await getDestinationById(id);
    return res.status(200).json({
      status: "success",
      message: "Destinations retrieved successfully",
      data: destination,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});
router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const destination = await updateDestinationData(id, data);
    return res.status(200).json({
      status: "success",
      message: "Destination updated successfully",
      data: destination,
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({
        status: "error",
        message: "Destination not found",
      });
    }
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const destination = await removeDestination(id);
    return res.status(200).json({
      status: "success",
      message: "Destination deleted successfully",
      data: destination,
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({
        status: "error",
        message: "Destination not found",
      });
    }
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

module.exports = router;