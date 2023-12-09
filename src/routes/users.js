const express = require("express");
const userControllers = require("../controller/users.js");

const router = express.Router();

//GET
router.get("/", userControllers.getAllUsers);

//GET secara spesifik
router.get("/:idUser", userControllers.getChoosenUsers);

//POST
router.post("/", userControllers.createNewUsers);

//PATCH
router.patch("/:idUser", userControllers.updateUsers);

//DELETE
router.delete("/:idUser", userControllers.deleteUsers);

module.exports = router;
