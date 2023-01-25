const express=require("express")
const { connection } = require("./config/db")
const { Authentication } = require("./middelware/Auth.middelware")
const { Getbmirouter } = require("./routes/bmi.route")
const { Calcibmirouter } = require("./routes/calcubmi.route")
const { LoginRouter } = require("./routes/Login.Route")
const { SignupRoute } = require("./routes/Signup.Route")
const PORT=process.env.PORT||8500
let cors = require('cors')

require("dotenv").config()
const app=express()
app.use(cors())
app.use(express.json())
app.use("/",SignupRoute)
app.use("/",LoginRouter)
app.use(Authentication)
app.use("/",Getbmirouter)
app.use("/",Calcibmirouter)
app.listen(PORT,async()=>{
    try {
        await connection
        console.log(`connected to ${PORT}`);
    } catch (error) {
        console.log(error);
    }
})