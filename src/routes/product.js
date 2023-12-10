const express = require("express");
const productController = require("../controller/product");

const router = express.Router();
const cloudinary = require("../config/cloudinary");
const upload = require("../middleware/multer");

router.get("/", productController.getAllProduct);
router.post("/", upload.single("foto_product"), productController.createNewProduct);

module.exports = router;
