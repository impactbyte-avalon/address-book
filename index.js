var thoriq = {
    firstName: "Thoriq",
    lastName: "Faizal",
    phoneNumber: "(021) 777-7777",
    email: "thq@thoriqnfaizal.com"
};

var nur = {
    firstName: "Nur",
    lastName: "Nur",
    phoneNumber: "(021) 888-8888",
    email: "thq@thoriqnfaizal.com"
};

var contacts = [thoriq, nur];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}
function list(){
    var contactsLength = contacts.length;
    for(i = 0;i<contactsLength;i++){
        printPerson(contacts[i])
    }
}

function add(firstName,lastName,phoneNumber,email){
contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email
  };
}
add("Faizal","faiz",0812345678,"faizal@faiz.com");
