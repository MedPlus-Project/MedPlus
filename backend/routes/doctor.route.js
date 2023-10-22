const express = require("express");
const { 
    updateDoctor,
    deleteDoctor,
    getAllDoctor,
    getSingleDoctor, } = require("../controllers/doctorController.js");

const router = express.Router();
const {authenticate, restrict} = require("../auth/verifytoken.js");

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);

module.exports = router;