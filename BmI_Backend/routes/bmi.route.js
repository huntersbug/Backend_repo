
const {Router}=require("express")
const Getbmirouter=Router()
const { getdata } = require("../connection/getbmi.connection");

Getbmirouter.get("/getbmi", getdata)
module.exports={Getbmirouter}