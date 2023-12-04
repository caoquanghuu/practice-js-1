const spaceDisplay = document.getElementById('result');
const btnDot = document.getElementById('btn-dot');
const btnClear = document.getElementById('btn-clear');
const btnMulti = document.getElementById('btn-multi');
const btnSub = document.getElementById('btn-sub');
const btnPlus = document.getElementById('btn-plus');
const btnDiv = document.getElementById('btn-div');
const btnEqual = document.getElementById('btn-equal');
const btn = [...Array(10).keys()].map((i) => document.getElementById(`btn-calc-${i}`));
const [multi, div, plus, sub] = ['*', '/', '+', '-'];

function getInput(a) {
  spaceDisplay.value += a;
}

// create dot and check dot already exist or not
function createDot() {
  const ar = spaceDisplay.value.split('');
  const a = '.';
  const dotInDisplayField = ar.some((dot) => dot === a);
  if (!dotInDisplayField && !!ar[0]) {
    spaceDisplay.value += a;
  }
}

// function to clear input
function clearInput() {
  spaceDisplay.value = '';
}

function displayOutput(calcType, valueIn1) {
  const valueIn2 = parseFloat(spaceDisplay.value);
  console.log('value 2 ', valueIn2);
  spaceDisplay.value = '';
  let result;
  switch (calcType) {
    case multi:
      result = valueIn1 * valueIn2;
      break;
    case sub:
      result = valueIn1 - valueIn2;
      break;
    case plus:
      result = valueIn1 + valueIn2;
      break;
    case div:
      result = valueIn1 / valueIn2;
      break;
    default:
  }
  spaceDisplay.value = result;
  console.log('result ', result);
  result = '';
}

function calculate(calcType) {
  const valueIn1 = parseFloat(spaceDisplay.value);
  console.log('value 1 ', valueIn1);
  spaceDisplay.value = '';
  btnEqual.addEventListener('click', () => displayOutput(calcType, valueIn1));
}

btnMulti.addEventListener('click', () => calculate(multi));
btnSub.addEventListener('click', () => calculate(sub));
btnPlus.addEventListener('click', () => calculate(plus));
btnDiv.addEventListener('click', () => calculate(div));
btnClear.addEventListener('click', clearInput);
for (let i = 0; i < 10; i++) {
  btn[i].addEventListener('click', () => getInput(i));
}
btnDot.addEventListener('click', createDot);

if (module.hot) {
  module.hot.accept();
}
