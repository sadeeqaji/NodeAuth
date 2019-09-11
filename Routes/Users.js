const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")

const UserController = require("../Controllers/UserContoller");
const {autheticate, privilege} = require("../Middlewares/Auth")

module.exports = function() {
  const userCtl = new UserController();
  
  router.post("/",  userCtl.registerUser);
  router.post("/login", privilege, userCtl.login);
  return router;
};
