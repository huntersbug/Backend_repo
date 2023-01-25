

const { Bmimodels } = require("../models/Bmi.model");

const CalcBMI = async (req, res) => {
  let { Height, Weight, userid } = req.body;

  Height = Number(Height);
  Weight = Number(Weight);
  let Height_in_meter = Height * 0.3048;
  let BMI = Weight / (Height_in_meter * Height_in_meter);
  BMI = BMI.toFixed(2);
  let Status = "";
  if (BMI > 16 && BMI < 18.5) {
    Status="underWeight";
  } else if (BMI > 18.5 && BMI < 25) {
    Status="Normal";
  } else if (BMI > 25) {
    Status="OverWeight";
  } else {
    Status= "Not Normal";
  }
  try {
    await Bmimodels.insertMany([{ Height, userid, Weight, BMI ,Status}]);
    res.send({ MSG: "bmi created", BMI });
  } catch (error) {
    res.send("Something Went Wrong");
  }
  
};

module.exports = { CalcBMI };
