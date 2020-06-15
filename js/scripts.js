//Business Logic for AddressBook
function addressBook() {
  this.contacts = [];
  this.currentId = 0;
}

addressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

addressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

addressBook.prototype.findContact = function(id){
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

addressBook.prototype.deleteContact = function(id){
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}
//Business Logic for Contacts
function contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

//User Interface Logic
$(document).ready(function() {
  $("form#new-contact").sumbit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastname = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    let newContact = new Contact(inputtedFirstName, inputtedLastname, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);
  })
})
