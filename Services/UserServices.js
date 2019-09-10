const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = userData => {
  let password;
  const newUser = new UserModel({
    Name: userData.name,
    Email: userData.email,
    PhoneNumber: userData.phoneNumber,
    Password: userData.password
  });

  return bcrypt
    .hash(userData.password, 10)
    .then(salt => {
      newUser.Password = salt;
      return newUser.save();
    })
    .catch(error => {
      console.log(error);
    });
};


const loginDetails = userData => {
    UserModel.findOne({Name: userData.name}).then((data) => {
        if(data.Name === userData.name){
            return bcrypt.compare(userData.password, data.Password).then(isMatch => {
                if(isMatch){
                    const payload = {
                        _id: data._id,
                        Name: data.Name,
                        expires: "300d"
                    }
                    const token = jwt.sign(payload, "Mustapha", {
                        expiresIn: "300 d"
                    })
                    console.log(token)
                   
                }
            })
            .catch(err => {
                console.log(err)
            })
              
        }
    })
}

module.exports = {registerUser, loginDetails};
