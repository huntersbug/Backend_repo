const mongoose=require("mongoose")
const Loginschema=({
    email:{type:String,required:true},
    password:{type:String,required:true}
})
const LoginModel=mongoose.model("login",Loginschema)