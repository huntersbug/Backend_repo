const { Loginconnection } = require("../connection/Login.connection");
const {Router}=require("express")

const LoginRouter=Router()
LoginRouter.post("/login", Loginconnection)

module.exports={LoginRouter}