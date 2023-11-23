window.one = function one() {
  var input = document.getElementById("result");
  var a = "1";
  input.value = input.value + a;
};
window.two = function two() {
  var input = document.getElementById("result");
  var a = "2";
  input.value = input.value + a;
};
window.three = function three() {
  var input = document.getElementById("result");
  var a = "3";
  input.value = input.value + a;
};
window.four = function four() {
  var input = document.getElementById("result");
  var a = "4";
  input.value = input.value + a;
};
window.five = function five() {
  var input = document.getElementById("result");
  var a = "5";
  input.value = input.value + a;
};
window.six = function six() {
  var input = document.getElementById("result");
  var a = "6";
  input.value = input.value + a;
};
window.seven = function seven() {
  var input = document.getElementById("result");
  var a = "7";
  input.value = input.value + a;
};
window.eight = function eight() {
  var input = document.getElementById("result");
  var a = "8";
  input.value = input.value + a;
};
window.nine = function nine() {
  var input = document.getElementById("result");
  var a = "9";
  input.value = input.value + a;
};
window.zero = function zero() {
  var input = document.getElementById("result");
  var a = "0";
  input.value = input.value + a;
};
// create dot and check dot already exist or not
window.dot = function dot() {
  var input = document.getElementById("result");
  var ar = input.value.split("");
  var a = ".";
  for (var i = 0; i < ar.length; i++) {
    if ((ar[i] == a)) {
      break;
    } else {
      if ((i == (ar.length - 1) & (ar[i] != a))) {
        input.value = input.value + a;
      }
    }
  }
};

window.multi = function multi() {
  var input = document.getElementById("result");
  const valueIn1 = parseFloat(input.value);
  
}.then( window.ce()).then( function getInput2 () {

})
// function to clear input
window.ce = function ce() {
  var ce = document.getElementById("result");
  ce.value = "";
};

if (module.hot) {
  module.hot.accept();
}
