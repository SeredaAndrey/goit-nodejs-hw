const http = require("http");

const requestHeandler = (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end("<h1>qweqweqwe</h1>");
};

const server = http.createServer(requestHeandler);

server.listen(8080);
