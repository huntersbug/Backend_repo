

const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

  app.get("/", (req, res) => {
  const files = fs.readFileSync("./db.json", { encoding: "utf-8" });
  console.log(JSON.parse(files));
  res.send("the msg drom me");
});

  app.post("/", (req, res) => {
  const dbdata = fs.readFileSync("./db.json", { encoding: "utf-8" });
  let pardata = JSON.parse(dbdata);
  pardata.data.push(req.body);
  const product = JSON.stringify(pardata);
  fs.writeFileSync("./db.json", product, { encoding: "utf-8" });
  res.send("data is post");
});
  app.delete("/:id", (req, res) => {
  const { id } = req.params;
  let dbdata = fs.readFileSync("./db.json", { encoding: "utf-8" });
  let parseddata = JSON.parse(dbdata);
  let dotdata = parseddata.data;
  const filterdata = dotdata.filter((e) => {
    return e.id !== Number(id);
  });
  parseddata.data = filterdata;
  const newdata = JSON.stringify(parseddata);
  fs.writeFileSync("./db.json", newdata, { encoding: "utf-8" });
  res.send("id is generated");
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const reqdata = req.body;
  let dbdata = fs.readFileSync("./db.json", { encoding: "utf-8" });
  dbdata = JSON.parse(dbdata);
  const data = dbdata.data;
  const filterdata = data.filter((e) => e.id !== Number(id));
  filterdata.push(reqdata)
  dbdata.data=filterdata
  const datanew = JSON.stringify(dbdata);
  fs.writeFileSync("./db.json", datanew, { encoding: "utf-8" });
  res.send("id is generated");
});


app.listen(8080, () => {
  console.log("connected on Port No 8080 or not");
});
