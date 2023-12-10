const express = require("express");
const productController = require("../controller/product");

const router = express.Router();
const cloudinary = require("../config/cloudinary");
const upload = require("../middleware/multer");

router.get("/", productController.getAllProduct);
// router.post("/", productController.createNewProduct);
router.post("/", upload.single("foto"), function (req, res) {
  cloudinary.uploader.upload(req.file.path, function (err, result) {
    if (err) {
      console.log("Error Bang : ", err);
      return res.status(500).json({
        success: false,
        message: "Gagal upload!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Berhasil upload!",
      data: result,
    });
  });
});

module.exports = router;
