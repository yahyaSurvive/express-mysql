const express = require("express");
const cloudinary = require("../config/cloudinary");
const upload = require("../middleware/multer");

const PorductModel = require("../models/product");

const getAllProduct = async (req, res) => {
  try {
    const [data] = await PorductModel.getProduct();

    res.json({
      message: "GET all Product Bro",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const createNewProduct = (req, res) => {
  try {
    // Gunakan middleware multer untuk menangani unggahan gambar
    const { body } = req;
    console.log("Bang : ", req);
    // upload(req, res, async (err) => {
    //   if (err) {
    //     console.error(err);
    //     return res.status(500).json({
    //       success: false,
    //       message: "Error saat mengunggah gambar",
    //     });
    //   }

    //   // Upload gambar ke Cloudinary
    //   cloudinary.uploader.upload(req.file.path, async function (cloudinaryErr, result) {
    //     if (cloudinaryErr) {
    //       console.error("Error Cloudinary: ", cloudinaryErr);
    //       return res.status(500).json({
    //         success: false,
    //         message: "Error saat mengunggah gambar ke Cloudinary",
    //       });
    //     }

    //     // Simpan informasi produk, termasuk nama gambar dan URL ke database
    //     const productData = {
    //       imageName: result.public_id,
    //       imageUrl: result.secure_url,
    //     };

    //     try {
    //       await PorductModel.createNewProduct(productData);
    //       res.status(201).json({
    //         success: true,
    //         message: "Berhasil menambahkan produk",
    //         data: productData,
    //       });
    //     } catch (dbError) {
    //       console.error("Error Database: ", dbError);
    //       res.status(500).json({
    //         success: false,
    //         message: "Error saat menyimpan informasi produk ke database",
    //       });
    //     }
    //   });
    // });
  } catch (error) {
    console.error("Server Error: ", error);
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }

  // try {
  //   cloudinary.uploader.upload(req.file.path, function (err, result) {
  //     if (err) {
  //       console.log("Error : ", err);
  //       return res.status(500).json({
  //         success: false,
  //         message: "Error bang",
  //       });
  //     }

  //     res.status(200).json({
  //       success: true,
  //       message: "Berhasil insert product",
  //       data: result,
  //     });
  //   });
  // } catch (error) {
  //   res.status(500).json({
  //     message: "Server error",
  //     serverMessage: error,
  //   });
  // }

  // const { body } = req;

  // try {
  //   await PorductModel.createNewProduct(body);
  //   res.status(201).json({
  //     message: "POST product success",
  //     data: body,
  //   });
  // } catch (error) {
  //   res.status(500).json({
  //     message: "Server error",
  //     serverMessage: error,
  //   });
  // }
};

module.exports = {
  getAllProduct,
  createNewProduct,
};
