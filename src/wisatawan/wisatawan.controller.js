const express = require("express");
const { createNewWisatawan, loginWisatawan } = require("./wisatawan.service");

const router = express.Router();

router.post("/register", async (req, res) => {
  const data = req.body;
  try {
    const wisatawan = await createNewWisatawan(data);
    return res.status(201).json({
      status: "success",
      message: "Wisatawan created",
      data: wisatawan,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  const data = req.body;
  try {
    const wisatawan = await loginWisatawan(data);
    return res.status(200).json({
      status: "success",
      message: "Login success",
      data: wisatawan,
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