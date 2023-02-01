const http = require("http");

const PORT = 8081;

const requestHeandler = (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end("<h1>qweqweqwe</h1>");
};

const server = http.createServer(requestHeandler);

server.listen(PORT, (err) => {
  if (err) {
    console.error("Error at server launch:", err);
  }
  console.log(`server started at port ${PORT}`);
});
