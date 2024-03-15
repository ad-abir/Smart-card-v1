// saveContact.js

function saveContact() {
    // Get the contact number
    var contactNumber = document.querySelector('.phone-number').innerText;

    // You can implement your saving logic here, for example:
    // You might want to use localStorage, browser cookies, or send the contact number to a server-side script for saving.

    // For demonstration, let's alert the contact number
    alert("Contact number saved: " + contactNumber);
}
