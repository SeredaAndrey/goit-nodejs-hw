const fs = require("fs").promises;
const path = require("path");
const readline = require("readline");

const contactsPath = path.basename("./db/contacts.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function listContacts() {
  // console.log("list contacts");

  const manifest = await fs.readFile("./db/contacts.json", "utf8");
  console.table(manifest);
}

function getContactById(contactId) {
  console.log(`get contact by ID ${contactId}`);
}

function removeContact(contactId) {
  rl.question("input ID", (value) => {
    contactId = value;
    console.log(`delete contact ${contactId}`);
    return;
  });
  // console.log(`delete contact ${contactId}`);
}

function addContact(name, email, phone) {
  console.log(`add contact ${name}, ${email}, ${phone}`);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
// const express = require("express");

// const app = express();

// const PORT = 8081;

// app.use(express.json());
// app.get("/", async (req, res) => {
//   // const manifest = await fs.readFile("./db/contacts.json", "utf8");

//   res.send("get request");
//   // res.json(manifest);
// });
// app.post("/", (req, res) => {
//   res.send("post request");
// });
// app.delete("/", (req, res) => {
//   res.send("delete request");
// });
// app.patch("/", (req, res) => {
//   res.send("patch request");
// });
// app.use((req, res) => {
//   res.send("middleware request");
// });

// app.listen(PORT, (err) => {
//   if (err) {
//     console.error("Error at server launch:", err);
//   }
//   console.log(`server started at port ${PORT}`);
// });
