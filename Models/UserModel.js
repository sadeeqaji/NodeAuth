const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  PhoneNumber: {
    type: String
  },
  Password: {
    type: String,
    required: true
  },
  DateCreated: {
    type: Date,
    default: Date
  },
  Role:{
    type: String,
    default: 'user'
  }
});

module.exports = mongoose.model("Users", User);
