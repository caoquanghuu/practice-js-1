const axios = require("axios").default;
axios
  .get("http://localhost:3000/user")
  .then(function (response) {
    // handle success
    const accout = response.data[0].userID;
    const password = response.data[0].userPSW;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// function login() {
//   var ac = document.getElementById("userID");
//   var pw = document.getElementById("userPSW");
//   var uID = ac.value;
//   var uPW = pw.value;
//   if (uID == "") {
//     alert(
//       "You wasn't insert Your ID. Please inset your ID. If you don't have an account, press Signup"
//     );
//   } else {
//     if (uPW == "") {
//       alert("Please type your password!!!");
//     } else {
//       if ((uID == accout) & (uPW == password)) {
//         alert("logging success");
//       } else {
//         alert("wrong user name / password");
//       }
//     }
//   }
// }
