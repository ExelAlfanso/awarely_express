const express = require("express");
const router = express.Router();
const {
  register,
  login,
  profile,
  me,
  logout,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const signUpMiddleware = require("../middlewares/signUpMiddleware");

router.post("/register", signUpMiddleware, register);
router.post("/login", login);
router.get("/profile", authMiddleware, profile);
router.get("/me", authMiddleware, me);
router.get("/logout", logout);

module.exports = router;
