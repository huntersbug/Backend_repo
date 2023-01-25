const {Router}=require("express")
const SignupRoute=Router()
const { Signupconnection } = require("../connection/signup.connection")

SignupRoute.post("/signup",Signupconnection)
module.exports={SignupRoute}