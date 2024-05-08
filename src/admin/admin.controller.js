const express = require("express");
const { login, createNewAdmin } = require("./admin.service");

const router = express.Router();

// login admin
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await login({ email, password });
    res.json({ status: "success", message: "Login success", data: admin });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

// create new admin
router.post("/register", async (req, res) => {
  const data = req.body;
  try {
    const admin = await createNewAdmin(data);
    res.json({ status: "success", message: "Admin created", data: admin });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

module.exports = router;