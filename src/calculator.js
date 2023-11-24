// get input from numb button
window.getInput = function getInput(a) {
  var input = document.getElementById("result");
  input.value = input.value + a;
};

// create dot and check dot already exist or not
window.dot = function dot() {
  var input = document.getElementById("result");
  var ar = input.value.split("");
  var a = ".";
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] == a) {
      break;
    } else {
      if ((i == ar.length - 1) & (ar[i] != a)) {
        input.value = input.value + a;
      }
    }
  }
};
//get calculation and return result
window.calculation = function calculation(cal) {
  var input = document.getElementById("result");
  const valueIn1 = input.value;
  console.log("input 1", valueIn1);
  input.value = "";
  window.displayOutput = function displayOutput() {
    var input = document.getElementById("result");
    let valueIn2 = input.value;
    input.value = "";
    console.log("input 2", valueIn2);
    let result;
    switch (cal) {
      case "*":
        result = valueIn1 * valueIn2;
        break;
      case "-":
        result = valueIn1 - valueIn2;
        break;
      case "+":
        result = valueIn1 + valueIn2;
        break;
      case "/":
        result = valueIn1 / valueIn2;
        break;
    }
    input.value = result;
    console.log("result", result);
    result = "";
  };
};

// function to clear input
window.ce = function ce() {
  var ce = document.getElementById("result");
  ce.value = "";
};

if (module.hot) {
  module.hot.accept();
}
