const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = userData => {
  let password;
  return UserModel.findOne({Name: userData.name}).then(user => {
    if(user){
      return "User exist";
    }
    const newUser = new UserModel({
      Name: userData.name,
      Email: userData.email,
      PhoneNumber: userData.phoneNumber,
      Password: userData.password
    });
  
     bcrypt
      .hash(userData.password, 10)
      .then(salt => {
        newUser.Password = salt;
        return newUser.save();
      })
      .catch(error => {
        console.log(error);
      });
  })
  
};

const loginDetails = userData => {
  return UserModel.findOne({ Name: userData.name }).then(user => {
    if (user.Name === userData.name) {
      return bcrypt
        .compare(userData.password, user.Password)
        .then(isMatch => {
          console.log(isMatch)
          if (isMatch) {
            const payload = {
              _id: user._id,
              Name: user.Name,
              Role: user.Role
            };
            const token = jwt.sign(payload, "Mustapha", {
              expiresIn: "300"
            });
            return token;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  });
};

module.exports = { registerUser, loginDetails };
