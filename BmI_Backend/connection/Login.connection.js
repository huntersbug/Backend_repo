const { SignupModel } = require("../models/Singup.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Loginconnection = async (req, res) => {
  const { email, password } = req.body;
  const user = await SignupModel.findOne({ email });

  if (user) {
    const hashed_password = user.password;
    const userid = user._id;
    bcrypt.compare(password, hashed_password, function (err, result) {
      if(result) {
        const token = jwt.sign({ userid }, "secret");
        res.send({ message: "Login successfull", token });
      } else {
        res.status(401).send({ msg: "Something went wrong, try again later" });
      }
    });
  } else {
    res.status(401).send({ msg: "Login failed" });
  }
};
module.exports = { Loginconnection };
