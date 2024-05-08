const express = require("express");
const {
  login,
  createNewAdmin,
  changePassword,
  deleteAccount,
} = require("./admin.service");

const router = express.Router();

// login admin
router.post("/login", async (req, res) => {
  const data = req.body;
  try {
    const admin = await login(data);
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

// change password
router.patch("/change-password/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const admin = await changePassword(id, data);
    res.json({ status: "success", message: "Password changed", data: admin });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

// delete account
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const admin = await deleteAccount(id);
    res.json({ status: "success", message: "Admin deleted", data: admin });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: error.message });
  }
});

module.exports = router;