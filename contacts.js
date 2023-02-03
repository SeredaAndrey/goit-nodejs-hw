const fs = require("fs").promises;
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.win32.format({
  dir: "./db",
  base: "contacts.json",
});

async function listContacts() {
  try {
    const json = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(json);
    console.table(contacts);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const json = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(json);
    const index = contacts.findIndex((contact) => contact.id === contactId);
    console.table(contacts[index]);
  } catch (error) {
    console.log(error);
  }
}

async function removeContact(contactId) {
  try {
    const json = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(json);
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index >= 0) {
      contacts.splice(index, 1);
      await fs.writeFile(contactsPath, JSON.stringify(contacts));
      console.log("delete contact - successful");
    } else {
      console.log(`contact with id #${contactId} is not in the database`);
    }
  } catch (error) {
    console.log(error);
  }
}

async function addContact(name, email, phone) {
  try {
    if (name && email && phone) {
      let flag = false;
      const json = await fs.readFile(contactsPath, "utf8");
      const contacts = JSON.parse(json);

      for (const contact of contacts) {
        if (contact.name === name) {
          console.log(`${name} is alredy in contacts`);
          flag = true;
          break;
        }
      }
      if (!flag) {
        const id = shortid.generate();
        const contact = { id, name, email, phone };
        contacts.push(contact);
        await fs.writeFile(contactsPath, JSON.stringify(contacts));
        console.log("add contact - successful");
      }
    } else {
      console.log(
        "name, еmail and number is a required parameter. contact was not added"
      );
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
