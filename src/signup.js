import axios from "axios";

var sgp = document.querySelector("#signup-button");
var uN = document.querySelector("#userName");
var uE = document.querySelector("#userEmail");
var showSNP = document.querySelector("#eye-signup");
var PhoneNumb = document.getElementById("userPhoneN");
var password = document.getElementById("userPSW");
var loading = document.querySelector(".fa");

function Signup() {
  var userName = uN.value;
  var userEmail = uE.value;
  var userPhoneN = PhoneNumb.value;
  var userPSW = password.value;
  uN.disabled = true;
  uE.disabled = true;
  PhoneNumb.disabled = true;
  password.disabled = true;
  setTimeout(() => {
    if (
      userName == "" ||
      userEmail == "" ||
      userPhoneN == "" ||
      userPSW == ""
    ) {
      alert("please insert all information!!!");
    } else {
      axios.get("http://localhost:3000/user").then(function (data) {
        console.log(data);
        var length = data.data.length;
        var checkUser;
        for (var i = 0; i < length - 1; i++) {
          if (
            userName == data.data[i].name ||
            userEmail == data.data[i].email
          ) {
            checkUser = false;
            var error = document.getElementById("exist-error");
            error.innerHTML = "user / email already exist";
            break;
          }
        }
        if (checkUser != false) {
          axios
            .post("http://localhost:3000/user", {
              name: userName,
              email: userEmail,
              userPSW: userPSW,
              PhoneNumb: userPhoneN,
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    }
    uN.disabled = false;
    uE.disabled = false;
    PhoneNumb.disabled = false;
    password.disabled = false;
  }, "3000");
}

function clearError() {
  document.getElementById("exist-error").innerHTML = "";
}

function showPSW() {
  var eyes = document.getElementById("userPSW");
  eyes.type = "text";
}

function hidePSW() {
  var eyes = document.getElementById("userPSW");
  eyes.type = "password";
}

function ld() {
  loading.classList.add("fa-circle-o-notch");
  loading.classList.add("fa-spin");
  setTimeout(() => {
    loading.classList.remove("fa-circle-o-notch");
    loading.classList.remove("fa-spin");
  }, 3000);
}

sgp.addEventListener("click", Signup);
uN.addEventListener("input", clearError);
uE.addEventListener("input", clearError);
showSNP.addEventListener("click", showPSW);
showSNP.addEventListener("mouseleave", hidePSW);
sgp.addEventListener("click", ld);
if (module.hot) {
  module.hot.accept();
}
