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
        var account = response.data[i].userID;
        var password = response.data[i].userPSW;
        if ((uID == account) & (uPW == password)) {
          alert("logging success");
          break;
        } else {
          if ((i = response.data.length - 1)) {
            alert("wrong user name / password");
          }
        }
      }
    }
  }
});
}

// function appendData(data){
//   console.log(data.data[0].userID);
//   var a = data.data[0].userID;
// }
// function login(){
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
//       if ((uID == account) & (uPW == password)) {
//         alert("logging success");
//       } else {
//         alert("wrong user name / password");
//       }
//     }
//   }
//   }
