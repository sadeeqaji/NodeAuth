const jwt = require("jsonwebtoken");

export const jwtVerifcation = (token, key) => {
    return jwt.verify(token, key)    
}