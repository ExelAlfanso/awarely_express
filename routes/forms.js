const express = require("express");
const router = express.Router();
const {laporan,ultksp,rekanmelangkah} = require("../controllers/formController.js");


router.post("/laporan",laporan);
router.post("/layanan/ultksp",ultksp);
router.post("/layanan/rekanmelangkah",rekanmelangkah);

module.exports = router;
