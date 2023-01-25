const {Router}=require("express")
const { Authentication } = require("../middleware/Auth.middelware")
// only authentication is required 
const ProductRouter=Router()
ProductRouter.get("/product",Authentication,(req,res)=>{
    const{email}=req.body
   if(email){
    res.send("products...")
    return
   }
    res.send("login again...")
})
module.exports={ProductRouter}