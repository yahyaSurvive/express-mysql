const BarangModel = require("../models/barang");

const getAllBarang = async (req, res) => {
  try {
    const [data] = await BarangModel.getAllUsers();

    res.json({
      message: "GET all Barang",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const createNewBarang = (req, res) => {
  res.json({
    message: "POST barang success",
  });
};

module.exports = {
  getAllBarang,
  createNewBarang,
};
