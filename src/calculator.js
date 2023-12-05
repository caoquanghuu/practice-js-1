const btn = [...Array(10).keys()].map((i) => document.getElementById(`btn-calc-${i}`));
const [multi, div, plus, sub] = ['*', '/', '+', '-'];
const [spaceDisplay, btnDot, btnClear, btnMulti, btnSub, btnPlus, btnDiv, btnEqual] = [
  document.getElementById('result'),
  document.getElementById('btn-dot'),
  document.getElementById('btn-clear'),
  document.getElementById('btn-multi'),
  document.getElementById('btn-sub'),
  document.getElementById('btn-plus'),
  document.getElementById('btn-div'),
  document.getElementById('btn-equal'),
];
// const firstVal = null;
// const secondVal = null;

function getInput(a) {
  spaceDisplay.value += a;
}

// function calculation(calcType) {
//   firstVal = parseFloat(spaceDisplay.value);
//   spaceDisplay.value = '';
//   console.log('firstVal', firstVal);
//   if (secondVal) {
//     switch (calcType) {
//       case multi:
//         result = firstVal * secondVal;
//         break;
//       case sub:
//         result = firstVal - secondVal;
//         break;
//       case plus:
//         result = firstVal + secondVal;
//         break;
//       case div:
//         result = firstVal / secondVal;
//         break;
//       default:
//     }
//     spaceDisplay.value = result;
//     firstVal = result;
//   }
//   secondVal = parseFloat(spaceDisplay);
//   console.log('secondVal', secondVal);
// }
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
  console.log('valueIn2: ', valueIn2);
  let result = '';
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
  console.log(result);
}

function calculate(calcType) {
  const valueIn1 = parseFloat(spaceDisplay.value);
  console.log('valueIn1: ', valueIn1);
  spaceDisplay.value = '';
  btnEqual.onclick = () => displayOutput(calcType, valueIn1);
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
