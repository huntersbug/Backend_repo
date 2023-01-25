const express=require("express")
const { connection } = require("./config/db")
const { TodoRouter } = require("./Routes/Todo.route")
require("dotenv").config()
const PORT=process.env.PORT
const app=express()
app.use(express.json())

app.use("/",TodoRouter)


app.listen(PORT,async()=>{
    try{
        await connection
        console.log(`Connected to Db ${PORT}`);
    }catch(err){console.log(err);}
})