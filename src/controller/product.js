const cloudinary = require("../config/cloudinary");

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
    cloudinary.uploader.upload(req.file.path, async function (err, result) {
      if (err) {
        console.log("Error Bang : ", err);
        return res.status(500).json({
          success: false,
          message: "Gagal upload!",
        });
      }

      // Simpan tautan gambar ke dalam database
      const productData = {
        nama_product: req.body.nama_product,
        foto_product: result.secure_url,
        id_foto_product: result.public_id,
      };

      // Panggil fungsi dari model untuk menyimpan ke database
      try {
        await PorductModel.createNewProduct(productData);

        res.status(200).json({
          success: true,
          message: "Berhasil upload!",
          data: result,
        });
      } catch (dbError) {
        console.error("Error Database: ", dbError);
        res.status(500).json({
          success: false,
          message: "Error saat menyimpan ke database",
        });
      }
    });

    // Cara Old
    // cloudinary.uploader.upload(req.file.path, function (err, result) {

    //   if (err) {
    //     console.log("Error Bang : ", err);
    //     return res.status(500).json({
    //       success: false,
    //       message: "Gagal upload!",
    //     });
    //   }

    //   res.status(200).json({
    //     success: true,
    //     message: "Berhasil upload!",
    //     data: result,
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
