const express = require("express");
const router = express.Router();

const UserController = require("../Controllers/UserContoller");

module.exports = function() {
  const userCtl = new UserController();
  router.post("/", userCtl.registerUser);
  router.post("/login", userCtl.login);
  return router;
};
