// alert("hi");
let modal = $(".modalBox");

$(".book").click(function () {
  modal.show();
});

let fullName;
document.getElementById("name").addEventListener("change", updateValue);

function updateValue(e) {
  fullName = e.target.value;
  console.log(fullName);
}

test = () => {
  // console.log(fullName);
  if (fullName?.trim().length === 0 || !fullName) {
    // console.log("Enter valid name");
  }
};

let emailAdress;
document.getElementById("email").addEventListener("change", updateValue);
function updateValue(e) {
  emailAdress = e.target.value;
  console.log(emailAdress);
}

test = () => {
  console.log(emailAdress);
  if (emailAdress?.trim().length === 0 || !emailAdress) {
    console.log("Enter valid email");
  }
};
