const express = require("express");
const router = express.Router();
const {laporan} = require("../controllers/formController.js");


router.post("/laporan",laporan);

module.exports = router;
