const express = require("express");

const { registerUser, loginUser } = require("../controllers/userController");

const router = express.Router();

// ===============================
// SIGNUP
// ===============================

router.post("/register", registerUser);

// ===============================
// LOGIN
// ===============================

router.post("/login", loginUser);

module.exports = router;
