const {Router}=require("express")
const { SignupModel } = require("../models/signup.models")
var jwt = require('jsonwebtoken');
const LoginRouter=Router()
const bcrypt=require("bcrypt")
LoginRouter.post("/login",async(req,res)=>{
    const{email,password}=req.body
    const data=await SignupModel.findOne({email})
if(data)
{
    bcrypt.compare(password, data.password, function(err, result) {
     if(result)
     {
      var token = jwt.sign({ email: data.email }, 'secret');
        console.log(token);
     }else{
        res.send("Login failed")
     }
    });
res.send("login sucessfully")
}else{
    res.send("login failed")
}
   
})
module.exports={LoginRouter}