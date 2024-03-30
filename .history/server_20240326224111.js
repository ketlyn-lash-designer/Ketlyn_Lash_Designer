import { createServer } from "http";
import { readFile } from "fs";
import { extname as _extname } from "path";

const server = createServer((req, res) => {
  const filePath = req.url === "/" ? "/pages/Home.html" : req.url;
  const extname = _extname(filePath);
  const contentType = {
    ".html": "text/html",
    ".css": "text/css",
  }[extname];

  readFile(__dirname + filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
