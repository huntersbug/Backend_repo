const mongoose = require("mongoose");
const Bmischema = mongoose.Schema(
  {
    BMI: { type: String, required: true },
    Height: { type: String, required: true },
    Weight: { type: String, required: true },
    Status: { type: String, required: true },
  },
  { timestamps: true }
);
const Bmimodels = mongoose.model("bmidata", Bmischema);

module.exports = { Bmimodels };
