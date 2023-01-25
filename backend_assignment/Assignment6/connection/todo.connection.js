const { Todomodel } = require("../Model/todo.model");

const gettodo=async (req, res) => {
    const data = await Todomodel.find();
   
    res.send(data);
  }


  const posttodo=async (req, res) => {
    const data = new Todomodel(req.body);
    data.save();
    res.send("Welcome To Home Page");
  }

  const deletetodo=async (req, res) => {
    const { id } = req.params;
    await Todomodel.findByIdAndDelete({ _id: id });
    res.send("Welcome To Home Page");
  }

  const puttodo= async (req, res) => {
    const { id } = req.params;
    await Todomodel.findByIdAndUpdate(id,req.body);
    res.send("Welcome To Home Page");
  }

  module.exports={gettodo,puttodo,deletetodo,posttodo}