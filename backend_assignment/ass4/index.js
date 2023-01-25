const express = require("express");
const app = express();
app.use(express.json());
const morgan = require("morgan")
app.use(morgan('combined'))




  app.get("/",(req, res) => {
    res.send("welcome to homepage");
  });
  app.listen(8080,()=>{
    console.log("connected");
  });