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
	name: ${newContactObject.name}
	email: ${newContactObject.email}
	phone: ${newContactObject.phone}
  `;
    console.log(newContactParagraph);

    document.getElementById('contactResult').innerHTML = newContactParagraph;

}