const express = require("express");

const router = express.Router();

const userController = require("../Controller/userController.js");

router.post("/", userController.sendMessage);

module.exports = router;
