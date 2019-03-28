var PhoneBook = [];

function SaveContact() {

    var name = document.querySelector(".name").value;

    var surname = document.querySelector(".surname").value;

    var number = parseInt(document.querySelector(".number").value);

    var company = document.querySelector(".company").value;

    var email = document.querySelector(".email").value;

    Validate(name, surname, number, company, email);
}


function Validate(name, surname, number, company, email) {

    console.log("Name:  ", name);
    console.log("Surname:  ", surname);
    console.log("Phone number:  ", number);
    console.log("Company:  ", company);
    console.log("E-mail:  ", email);

    if (name.length < 3 || name.length > 16) {
        var error = document.querySelector(".error");
        error.innerHTML = "Incorrect input Name";
        console.log("Incorrect input Name");
    }

    else if (surname.length < 3 || surname.length > 16) {
        var error = document.querySelector(".error");
        error.innerHTML = "Incorrect input Surname";
        console.log("Incorrect input Surname");
    }

    else if (number.length < 10 || number.length > 12) {
        var error = document.querySelector(".error");
        error.innerHTML = "Wrong number format";
    }

    else if (company.length < 2 || company.length > 20) {
        var error = document.querySelector(".error");
        error.innerHTML = "Invalid company name";
    }

    else if (email.length < 3 || email.length > 20) {
        var error = document.querySelector(".error");
        error.innerHTML = "Invalid email";
    }

    else {
        var name = name;
        console.log("SUCCSSES!");
        var newContact = new SaveData(name, surname, number, company, email);
        PhoneBook.push(newContact);
       
    }

}

function SaveData(name, surname, number, company, email) {
    this.name = name;
    this.surname = surname;
    this.number = number;
    this.company = company;
    this.email = email;
  }
  
  
  function ShowPersonInfo (){
    PhoneBook.forEach(function(item, key){
      console.log(item, " ", key);
    })
    console.log("PhoneBook length", PhoneBook.length);
    console.log("==============================>>>>>");
    console.log("New Contact Added");
  }