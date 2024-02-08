const express = require("express");
const router = express.Router();

const { addMedicalData } = require("../controllers/medicalData.controller.js");

router.post("/", addMedicalData);

module.exports = router;
