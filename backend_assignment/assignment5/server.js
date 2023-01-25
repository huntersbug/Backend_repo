const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");
const validatormidd = (req, res, next) => {
  const { id, author, title, content } = req.body;
if (req.method === "POST") {
    if (id && author && title && content) {
      if (
        typeof id === "number" &&
        typeof author === "string" &&
        typeof title === "string" &&
        typeof content === "string"
      ) {
        next();
      } else {
        res.send("Validation failed");
      }
    } else {
      res.send("Validation Failed");
    }
  } else {
    next();
  }
};
const logger = (req, res, next) => {
   const text=`${req.method},${req.url},${req.headers["user-agent"]} \n`
   const write=fs.appendFileSync("./logs.txt",text,"utf-8")
   next()
  };
const guard = (req, res, next) => {
  let { password } = req.query;
  if (Number(password) === 12345) {
    next();
  } else {
    res.send("bad request");
  }
};
app.use(validatormidd);
app.use(logger)
// crud operation
app.get("/posts", (req, res) => {
  const data = fs.readFileSync("./posts.json", { encoding: "utf-8" });
  res.send(data);
});
app.post("/posts/create", (req, res) => {
  const data = fs.readFileSync("./posts.json", { encoding: "utf-8" });
let parseddata = JSON.parse(data);
parseddata.posts.push(req.body);
let newdata = JSON.stringify(parseddata);
fs.writeFileSync("./posts.json", newdata, { encoding: "utf-8" });
res.send("created");
});
app.use(guard);
app.put("/posts/:postId", (req, res) => {
  const { postId } = req.params;
  const data = fs.readFileSync("./posts.json", { encoding: "utf-8" });
  let parseddata = JSON.parse(data);
  const checker = () => {
    let filterid = parseddata.posts.filter((e) => e.id === Number(postId));
    console.log(filterid);


    if (filterid.length > 0) {
      return true;
    } else {
      return false;
    }
  };
  if (checker()) {
    let filterdata = parseddata.posts.filter((e) => e.id !== Number(postId));
    console.log(filterdata);
    filterdata.push(req.body);
    parseddata.posts = filterdata;
    const latestdata = JSON.stringify(parseddata);
    fs.writeFileSync("./posts.json", latestdata, { encoding: "utf-8" });
    res.send("corrected");
  } else {
    res.send("id not available");
  }
});
app.delete("/posts/:postId", (req, res) => {
  const { postId } = req.params;
  const data = fs.readFileSync("./posts.json", { encoding: "utf-8" });
  let parseddata = JSON.parse(data);
  let filterdata = parseddata.posts.filter((e) => e.id !== Number(postId));
  parseddata.posts = filterdata;
  const latestdata = JSON.stringify(parseddata);
fs.writeFileSync("./posts.json", latestdata, { encoding: "utf-8" });
res.send("deleted");
});












app.listen(8080, () => {
  console.log("connected to Port 8080");
});
