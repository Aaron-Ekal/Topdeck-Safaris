// alert("hi");
let modal = $(".modalBox");

$(".book").click(function () {
  modal.show();
});

$(".close").click(function () {
  modal.hide();
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
let numAdults = 0;
document.getElementById("adults").addEventListener("change", updateAdults);
function updateAdults(e) {
  numAdults = e.target.value;
  console.log(numAdults);
}
let numChildren = 0;
document.getElementById("children").addEventListener("change", updateChildren);
function updateChildren(e) {
  numChildren = e.target.value;
  console.log(numChildren);
}
let checkInDate;
document.getElementById("indate").addEventListener("change", updateCheckIn);
function updateCheckIn(e) {
  checkInDate = e.target.value;
  console.log(checkInDate);
}
let checkOutDate;
document.getElementById("outDate").addEventListener("change", updateCheckOut);
function updateCheckOut(e) {
  checkOutDate = e.target.value;
  console.log(checkOutDate);
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

  bookingDetails["InDate"] = checkInDate;
  console.log(checkInDate);

  bookingDetails["outDate"] = checkOutDate;
  console.log(checkOutDate);
  console.log(typeof bookingDetails["adults"], "hhh");
  var total = parseInt(numAdults) * 7000 + parseInt(numChildren) * 50;
  console.log("numAdults :>> ", total);

  var message = `Hey there, ${fullName}. Your total amount for the trip on ${checkInDate} to ${checkOutDate} is ${total}.`;
  // document.getElementById("message").innerHTML = message;
  var receipt_container = document.createElement("div");
  receipt_container.setAttribute("id", "message");
  var text = document.createTextNode(message);
  receipt_container.append(text);
  document.getElementById("form_container").style.display = "none";
  document.getElementById("modal_content").append(receipt_container);
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
