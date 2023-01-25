const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url == "/post") {
    const post = fs.readFileSync("./post.json", { encoding: "utf-8" });
    res.setHeader("content-type", "application/json");
    return res.end(JSON.stringify(post));
  } else if (req.url === "/post2") {
    const readstream = fs.createReadStream("./db.json", {
      encoding: "utf-8",
    });

    res.setHeader("content-type", "application/json");
    readstream.pipe(res);
  }
});

server.listen(8080);
