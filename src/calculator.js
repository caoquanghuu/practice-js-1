const displayField = document.getElementById("result");
const btnDot = document.getElementById("btn-dot");
const btnClear = document.getElementById("btn-clear");
const btnMulti = document.getElementById("btn-multi");
const btnSub = document.getElementById("btn-sub");
const btnPlus = document.getElementById("btn-plus");
const btnDiv = document.getElementById("btn-div");
const btnEqual = document.getElementById("btn-equal");
const btn = [...Array(10).keys()].map((i) =>
  document.getElementById(`btn-calc-${i}`)
);

function getInput(a) {
  displayField.value += a;
}

// create dot and check dot already exist or not
function createDot() {
  const ar = displayField.value.split("");
  const a = ".";
  const dotInDisplayField = ar.some((dot) => dot === a);
  if (!dotInDisplayField && !!ar[0]) {
    displayField.value += a;
  }
}

// function to clear input
function clearInput() {
  const ce = document.getElementById("result");
  ce.value = "";
}

async function calculate(calcType) {
  const valueIn1 = parseFloat(displayField.value);
  displayField.value = "";
  await function calculateType() {};
}

// function to calculate
function displayOutput() {
  const valueIn2 = parseFloat(displayField.value);
  displayField.value = "";
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
    default:
  }
  displayField.value = result;
  result = "";
}

// get calculation and return result

btnMulti.addEventListener("click", () => calculate("*"));
btnSub.addEventListener("click", () => calculate("-"));
btnPlus.addEventListener("click", () => calculate("+"));
btnDiv.addEventListener("click", () => calculate("/"));
btnClear.addEventListener("click", clearInput);
for (let i = 0; i < 10; i++) {
  btn[i].addEventListener("click", () => getInput(i));
}
btnDot.addEventListener("click", createDot);

if (module.hot) {
  module.hot.accept();
}
