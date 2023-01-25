const { Bmimodels } = require("../models/Bmi.model")

const getdata=async(req,res)=>{
    console.log(req.body);
    const{userid}=req.body
   
    if(userid)
    {
        const data=await Bmimodels.find({userid})
        res.send(data)
    }else{
        res.send({msg:"something went wrong"})
    }

}

module.exports={getdata}