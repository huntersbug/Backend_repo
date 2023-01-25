// let ID: number
// let Name: string
// let Rating: number
// Description: string
// Genre: string
// Cast: string[]

const validatormidd = (req, res, next) => {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;
 

  if (
    typeof ID === "number" &&
    typeof Name === "string" &&
    typeof Rating === "number" &&
    typeof Description === "string" &&
    typeof Genre === "string" &&
    typeof Cast === "string"
  ) {
    next();
  } else {
    res.status(400).send({msg:"wrong format"})
  }
};

module.exports = { validatormidd };
