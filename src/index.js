//query element
var lIn = document.querySelector("#login-button");
var show = document.querySelector("#eye");
var ac = document.getElementById("userID");
var pw = document.getElementById("userPSW");
var loading = document.querySelector(".fa");

function login() {
  //get data from dp.jon/user
  const axios = require("axios").default;
  axios.get("http://localhost:3000/user").then(function (response) {
    var ac = document.querySelector("#userID");
    var pw = document.querySelector("#userPSW");
    ac.disabled = true;
    pw.disabled = true;
    setTimeout(() => {
      console.log(response);
      //set variable
      var uID = ac.value;
      var uPW = pw.value;
      //start logic compare with data and user id,psw
      if (uID == "") {
        alert(
          "You wasn't insert Your ID. Please inset your ID. If you don't have an account, press Signup"
        );
      } else {
        if (uPW == "") {
          alert("Please type your password!!!");
        } else {
          for (var i = 0; i < response.data.length; i++) {
            var account = response.data[i].name;
            var email = response.data[i].email;
            var password = response.data[i].userPSW;
            if (uID == account || (uID == email) & (uPW == password)) {
              window.location.replace("./calculator.html");
              break;
            }
            if (i == response.data.length - 1) {
              alert("wrong user name / password");
            }
          }
        }
      }
      ac.disabled = false;
      pw.disabled = false;
    }, "3000");
  });
}

function showPSW() {
  var eyes = document.getElementById("userPSW");
  eyes.type = "text";
}

function ld() {
  loading.classList.add("fa-circle-o-notch");
  loading.classList.add("fa-spin");
  lIn.disabled = true;
  setTimeout(() => {
    loading.classList.remove("fa-circle-o-notch");
    loading.classList.remove("fa-spin");
    lIn.disabled = false;
  },3000);
}

function hidePSW() {
  var eyes = document.getElementById("userPSW");
  eyes.type = "password";
}
//button event
lIn.addEventListener("click", login);
show.addEventListener("click", showPSW);
show.addEventListener("mouseleave", hidePSW);
lIn.addEventListener("click", ld);

if (module.hot) {
  module.hot.accept();
}
