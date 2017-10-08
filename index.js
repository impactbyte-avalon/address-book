const contacts = [];

function addContact(id, name, phone, email) {
  contacts.push({
    id: id,
    name: name,
    phone: phone,
    email: email
  });
}

function removeContact(index) {
  contacts.splice(index, 1);
}

function listContacts() {
  console.log(contacts);
}

console.log("------------------ add contact ");

addContact(1, "Arian", "12345", "arian@website.com");

console.log("------------------ log contacts");

listContacts();

console.log("------------------ add contact ");

addContact(2, "Delmi", "75649", "delmi@website.com");

console.log("------------------ log contacts");

listContacts();
console.log("------------------ remove contact");

removeContact(1);

listContacts();
