const express = require("express");
const barangControllers = require("../controller/barang");

const router = express.Router();

router.get("/", barangControllers.getAllBarang);
router.post("/", barangControllers.createNewBarang);

module.exports = router;
