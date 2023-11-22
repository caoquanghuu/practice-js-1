import axios from "axios";
window.Signup = function Signup() {
  var name = document.getElementById("userName");
  var userName = name.value;
  var email = document.getElementById("userEmail");
  var userEmail = email.value;
  var PhoneNumb = document.getElementById("userPhoneN");
  var userPhoneN = PhoneNumb.value;
  var password = document.getElementById("userPSW");
  var userPSW = password.value;
  if (userName == "" || userEmail == "" || userPhoneN == "" || userPSW == "") {
    alert("please insert all information!!!");
  } else {
    axios.get("http://localhost:3000/user").then(function (data) {
      console.log(data);
      var length = data.data.length;
      var checkUser;
      for (var i = 0; i < (length - 1); i++) {
        if (userName == data.data[i].name || userEmail == data.data[i].email) {
          checkUser = false;
          alert("user already exist!!!");
          break;
        }
      };
      if ((checkUser != false)) {
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
};
