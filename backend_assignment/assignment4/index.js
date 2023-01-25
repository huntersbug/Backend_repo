const express=require("express");
const { validatormidd } = require("./Middleware/Validator");
const { MoviesRouter } = require("./Routes/movies.routes");

const app=express()
app.use(express.json())
app.use(validatormidd)

app.use("/",MoviesRouter)


app.listen(8080,()=>{
    console.log("connected to 8080");
})