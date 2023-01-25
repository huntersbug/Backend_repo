const mongoose=require("mongoose")
const Signupschema=mongoose.Schema({
name:{type:String,required:true},
email:{type:String,required:true},
password:{type:String,required:true},
})
const SignupModel=mongoose.model("Authuser",Signupschema)

module.exports={SignupModel}