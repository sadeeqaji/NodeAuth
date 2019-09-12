const {jwtVerifcation} = require("./Utils")

const autheticate = (req, res, next) => {

    const decoded = jwtVerifcation((req.headers["key"], "Mustapha"))

    if(!decoded){
        // res.send("Please login")
        next()
    }
    else{
        if(decoded.exp < Date.now() / 1000){
            // res.send("Token expired")
            console.log("exp")
            next()
        }
        else{
            // res.send("Logged in")
            next()
        }
    }
}

const privilege = (req, res, next) => {
    const decoded = jwtVerifcation((req.headers["key"], "Mustapha"))
    if(decoded.Role == "user"){
        console.log("Not Authorized")
        next()
    }
    else{
        console.log(decoded)
        console.log("Authorized")
        // res.send("Authorized")
        next()
    }
}

module.exports = {autheticate, privilege};