const express = require("express");
const router = express.Router();
const { authenticateJWT } = require("../middleware/userAuth");

const {
  getDoctorsForSidebar,
  getUserRole,
  getUsersForSidebar,
  getUsers,
  makeAdmin,
} = require("../controllers/user.controller");

router.get("/getDoctors", getDoctorsForSidebar);

router.get("/getUsers", getUsersForSidebar);

router.get("/getRole", authenticateJWT, getUserRole);

router.get("/getAllUsers", authenticateJWT, getUsers);

router.patch("/makeAdmin/:id", authenticateJWT, makeAdmin);

module.exports = router;
