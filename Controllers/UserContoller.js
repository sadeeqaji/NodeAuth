const { registerUser, loginDetails } = require("../Services/UserServices");

module.exports = function userController() {
  this.registerUser = (req, res) => {
    registerUser(req.body)
      .then(result => {
        res.send({
          success: true,
          message: "Registrated successfully",
          data: result
        });
      })
      .catch(error => {
        res.send({
          success: false,
          message: "Couldn't register user",
          data: error
        });
      });
  };

  this.login = (req, res) => {
    loginDetails(req.body)
      .then(token => {
        res.send({
          success: true,
          message: "Login success",
          token: token
        });
      })
      .catch(error => {
        res.send({
          success: false,
          message: "Incorrect login credentials",
          data: error
        });
      });
  };
};
