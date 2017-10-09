function save() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value

    const newContactObject = {
        name,
        email,
        phone
    };
    console.log(newContactObject);

    newContactParagraph = `
	Name: ${newContactObject.name}
	Email: ${newContactObject.email}
	Phone: ${newContactObject.phone}
  `;
    console.log(newContactParagraph);

    //document.getElementById('contactResult').innerHTML = newContactParagraph;

    const listItem = document.createElement("li");
    var nodeContact = document.createTextNode(newContactParagraph);
    listItem.appendChild(nodeContact);
    document.getElementById("contactResult").appendChild(listItem);

    // Put the object into storage
    const arrContact = [];
    arrContact.push(newContactObject)

    localStorage.setItem('contact',JSON.stringify(arrContact));
    // Retrieve the object from storage
    var retrievedObject = JSON.parse(localStorage.getItem('arrContact'));
    // console.log('retrievedObject: ', JSON.parse(retrievedObject));
    console.log(retrievedObject);
};

// const objToStorage = function(newContactObject) {
//     // body...
//     // Put the object into storage
//     localStorage.setItem('book', newContactObject);
//     // Retrieve the object from storage
//     var retrievedObject = localStorage.getItem('newContactObject');
//     console.log('retrievedObject: ', JSON.parse(retrievedObject));
// }