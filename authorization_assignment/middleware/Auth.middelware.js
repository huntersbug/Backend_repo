
const jwt = require("jsonwebtoken");
const { SignupModel } = require("../models/signup.models");
const Authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.send("please login again");
  }
  const token = req.headers?.authorization?.split(" ")[1];
 
  jwt.verify(token, "secret", function (err, decoded) {
    if (err) {
      res.send("Please Login");
    } else {
      req.body.email = decoded.email;
      next();
    }
  });
};


const authorisation = (permittedrole) => {
  return async (req, res, next) => 
  {
  const email = req.body.email
  const user = await SignupModel.findOne({email : email})
  const role = user.role;

      if(permittedrole.includes(role)){
          next()
      }
      else{
          res.send("Not authorised")
      }
  }
}

module.exports={Authentication,authorisation}
