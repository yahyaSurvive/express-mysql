const UserModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UserModel.getAllUsers();

    res.json({
      message: "GET all Users",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const getChoosenUsers = async (req, res) => {
  const { idUser } = req.params;

  try {
    const [data] = await UserModel.getChoosenUsers(idUser);
    res.json({
      message: "GET choosen Users",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const createNewUsers = async (req, res) => {
  const { body } = req;

  try {
    await UserModel.createNewUsers(body);
    res.status(201).json({
      message: "POST users success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const updateUsers = async (req, res) => {
  const { idUser } = req.params;
  const { body } = req;
  try {
    await UserModel.updateUsers(body, idUser);
    res.json({
      message: "PATCH users success",
      data: idUser,
      ...body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

const deleteUsers = async (req, res) => {
  const { idUser } = req.params;
  try {
    await UserModel.deleteUsers(idUser);
    res.json({
      message: "DELETE users success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  getChoosenUsers,
  createNewUsers,
  updateUsers,
  deleteUsers,
};
