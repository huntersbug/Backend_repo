const { Router } = require("express");

const MoviesRouter = Router();

MoviesRouter.post("/", (req, res) => {
  res.send(req.body);
  console.log("Data is in rigth Format");
});

module.exports = { MoviesRouter };
