const {Router}=require("express")
const Calcibmirouter = Router();
const { CalcBMI } = require("../connection/calculate.bmi");

Calcibmirouter.post("/calcbmi", CalcBMI);

module.exports = { Calcibmirouter };
