const fs = require("fs");
const http = require("http");
const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    fs.readdir("files", (err, files) => {
      if (err) {
        console.log(err);
        return;
      }
      res.setHeader("content-type", "text/html");
      for (i = 0; i < files.length; i++) {
        res.write(`<li>${files[i]}</li>`);

        console.log(files[i]);
      }
      res.end("");
    });
  } else if (req.url == "/public") {
    fs.readdir("files/public", (err, files) => {
      if (err) {
        console.log(err);
        return;
      }
      res.setHeader("content-type", "text/html");
      for (i = 0; i < files.length; i++) {
        res.write(`<li>${files[i]}</li>`);
        console.log(files[i]);
      }
      res.end("");
    });
  } else {
    res.setHeader("content-type", "text/html");
    res.end("<h2>Not any files</h2> ");
  }
});

server.listen(8080);
