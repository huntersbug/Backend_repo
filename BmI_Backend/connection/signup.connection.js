const mongoose=require("mongoose")
const bcrypt=require("bcrypt");
const { SignupModel } = require("../models/Singup.model");


const Signupconnection = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await SignupModel.findOne({ email });
  if (user) {
    res.send({ msg: "User already exists, try logging in" });
  } else {
    bcrypt.hash(password, 4, async function (err, hash) {
      if (err) {
        res.send({msg:"Something went wrong, please try again later"});
      }
      const new_user = new SignupModel({
        name,
        email,
        password: hash,
      });
      try {
        await new_user.save();
        res.send({ msg: "Sign up successfull" });
      } catch (err) {
        res.send({ msg: "Something went wrong, please try again" });
      }
    });
  }
};

module.exports={Signupconnection}
