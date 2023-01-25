const {Router}=require("express")
const { SignupModel } = require("../models/signup.models")
const bcrypt=require("bcrypt")
const SignupRouter=Router()
SignupRouter.post("/signup",async(req,res)=>{
   
const{email,password}=req.body
const data=await SignupModel.findOne({email})

if(!data)
{
    bcrypt.hash(password, 4, function(err, hash) {
    if(err)
    {
        res.send("some thing went wrong")
    }else{
        SignupModel.insertMany([{email,password:hash}])
        res.send("Signup sucessfully")
    }
    });
}else{
    res.send("already exist")
}
   
})
module.exports={SignupRouter}