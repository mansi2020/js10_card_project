
//todo event for promt
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let country = prompt("Enter your country:");
let phoneNo = prompt("Enter your phone number:");
let state = prompt("Enter your state:");
let city = prompt("Enter your city:");
let village = prompt("Enter your village:");


document.getElementById("firstName").innerText = firstName;
document.getElementById("lastName").innerText = lastName;
document.getElementById("country").innerText = country;
document.getElementById("phoneNo").innerText = phoneNo;
document.getElementById("state").innerText = state;
document.getElementById("city").innerText = city;
document.getElementById("village").innerText = village;

localStorage.setItem("First Name",firstName);
localStorage.setItem("Last Name",lastName);
localStorage.setItem("Country",country);
localStorage.setItem("Phone Number",phoneNo);
localStorage.setItem("State",state);
localStorage.setItem("City",city);
localStorage.setItem("Village",village );




