// const fs = require("fs").promises;

const express = require("express");

const app = express();

const PORT = 8081;

app.use(express.json());
app.get("/", async (req, res) => {
  // const manifest = await fs.readFile("./db/contacts.json", "utf8");

  res.send("get request");
  // res.json(manifest);
});
app.post("/", (req, res) => {
  res.send("post request");
});
app.delete("/", (req, res) => {
  res.send("delete request");
});
app.patch("/", (req, res) => {
  res.send("patch request");
});
app.use((req, res) => {
  res.send("middleware request");
});

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error at server launch:", err);
  }
  console.log(`server started at port ${PORT}`);
});
