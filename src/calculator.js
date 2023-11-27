var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var ml = document.getElementById("multi");
var sb = document.getElementById("sub");
var pl = document.getElementById("plus");
var dv = document.getElementById("div");
var eq = document.getElementById("equal");
var cl = document.getElementById("ce");
var d = document.getElementById("dot");

// get input from numb button
function getInput(a) {
  var input = document.getElementById("result");
  input.value = input.value + a;
}

// create dot and check dot already exist or not
function dot() {
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
}

//function to calculate
function displayOutput() {
  var input = document.getElementById("result");
  let valueIn2 = parseFloat(input.value);
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
}

//get calculation and return result
function calculation(cal) {
  var input = document.getElementById("result");
  const valueIn1 = parseFloat(input.value);
  console.log("input 1", valueIn1);
  input.value = "";
  // calculate when press equal button
  eq.addEventListener("click", displayOutput);
}

// function to clear input
function ce() {
  var ce = document.getElementById("result");
  ce.value = "";
}

one.addEventListener("click", getInput(1));
two.addEventListener("click", getInput(2));
three.addEventListener("click", getInput(3));
four.addEventListener("click", getInput(4));
five.addEventListener("click", getInput(5));
six.addEventListener("click", getInput(6));
seven.addEventListener("click", getInput(7));
eight.addEventListener("click", getInput(8));
nine.addEventListener("click", getInput(9));
zero.addEventListener("click", getInput(0));
ml.addEventListener("click", calculation("*"));
sb.addEventListener("click", calculation("-"));
pl.addEventListener("click", calculation("+"));
dv.addEventListener("click", calculation("/"));
cl.addEventListener("click", ce);
d.addEventListener("click", dot);

if (module.hot) {
  module.hot.accept();
}
