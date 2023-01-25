const mongoose=require("mongoose")
const todoschema=mongoose.Schema({
    name:String,
    id:Number,
    title:String
})
const Todomodel=mongoose.model("todo",todoschema)


module.exports={Todomodel}