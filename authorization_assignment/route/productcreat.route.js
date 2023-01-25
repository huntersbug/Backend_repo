const { authorisation, Authentication } = require("../middleware/Auth.middelware")
const {Router}=require("express")
const Productcreate=Router()

// Authentication and authorization both requires
Productcreate.post("/product/create",Authentication,authorisation(["seller"]),(req,res)=>{

    res.send("products created again...")
})
module.exports={Productcreate}