//query element
var lg = document.querySelector("#login-button");
var show = document.querySelector("#eye");

function login() {
  //get data from dp.jon/user
  const axios = require("axios").default;
  axios.get("http://localhost:3000/user").then(function (response) {
    console.log(response);
    //set variable
    var ac = document.getElementById("userID");
    var pw = document.getElementById("userPSW");
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
  });
}

function showPSW() {
  var eyes = document.getElementById("userPSW");
  eyes.type = "text";
}

function hidePSW() {
  var eyes = document.getElementById("userPSW");
  eyes.type = "password";
}
//button event
lg.addEventListener("click", login);
show.addEventListener("click", showPSW);
show.addEventListener("mouseleave", hidePSW);

if (module.hot) {
  module.hot.accept();
}
