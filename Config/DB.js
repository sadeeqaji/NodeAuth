const mongoose = require("mongoose");

const DBConnection = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/userAuth", {useNewUrlParser: true, useCreateIndex: true}, (err)=>{
        if(err){
            console.log("DB is not connected", err);
        }
        else{
            console.log("DB is connected")
        }
    })
}


module.exports = DBConnection;