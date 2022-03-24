// alert("hi");
let modal = $(".modalBox");

$(".book").click(function () {
  modal.show();
});

let bookingDetails = {};

function myfunction(price) {
  console.log(price);
  bookingDetails["trip1"] = price;
  console.log(bookingDetails);
}

let fullName;
document.getElementById("name").addEventListener("change", updateFullname);
function updateFullname(e) {
  fullName = e.target.value;
  console.log(fullName);
}
let emailAdress;
document.getElementById("email").addEventListener("change", updateEmail);
function updateEmail(e) {
  emailAdress = e.target.value;
  console.log(emailAdress);
}
let numAdults;
document.getElementById("adults").addEventListener("change", updateAdults);
function updateAdults(e) {
  numAdults = e.target.value;
  console.log(numAdults);
}
let numChildren;
document.getElementById("children").addEventListener("change", updateChildren);
function updateChildren(e) {
  numChildren = e.target.value;
  console.log(numChildren);
}

test = () => {
  console.log(fullName);
  if (fullName?.trim().length === 0 || !fullName) {
    alert("Enter a valid name");
  }
  bookingDetails["name"] = fullName;
  console.log(bookingDetails);

  // if (emailAdress?.trim().length === 0 || !emailAdress) {
  //   alert("Enter valid email");
  // }
  bookingDetails["email"] = emailAdress;
  console.log(bookingDetails);

  bookingDetails["adults"] = numAdults;
  console.log(numAdults);

  bookingDetails["children"] = numChildren;
  console.log(numChildren);
  var total = numAdults * 700 + numChildren * 50;
  var message = "hey there," + total;
  document.getElementById("message").innerHTML = message;
};

// test = () => {
//   console.log(emailAdress);
//   if (emailAdress?.trim().length === 0 || !emailAdress) {
//     alert("Enter valid email");
//   }
//   bookingDetails["email"] = emailAdress;
//   console.log(bookingDetails);
// };

// let telNumber;
// document.getElementById("mobile").addEventListener("change", updateValue);
// function updateValue(e) {
//   telNumber = e.target.value;
//   console.log(telNumber);
// }

// test = () => {
//   console.log(telNumber);
//   if (telNumber?.trim().length === 0 || !telNumber) {
//     alert("Enter valid mobile number");
//   } else console.log("valid input");
// };
// let numberAdults;
// document.getElementById("adults").addEventListener("change", updateValue);
// function updateValue(e) {
//   numberAdults = e.target.value;
//   console.log(numberAdults);
// }

// test = () => {
//   console.log(numberAdults);
//   if (numberAdults?.trim().length === 0 || !numberAdults) {
//     alert("Enter valid number for the people on trip");
//   } else console.log("valid input");
//   bookingDetails["noOfAdults"] = numberAdults;
// };
