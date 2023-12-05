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

function showResult() {
  const x = spaceDisplay.value;
  const y = eval(x);
  spaceDisplay.value = y;
}

btnMulti.addEventListener('click', () => getInput(multi));
btnSub.addEventListener('click', () => getInput(sub));
btnPlus.addEventListener('click', () => getInput(plus));
btnDiv.addEventListener('click', () => getInput(div));
btnClear.addEventListener('click', clearInput);
for (let i = 0; i < 10; i++) {
  btn[i].addEventListener('click', () => getInput(i));
}
btnDot.addEventListener('click', createDot);
btnEqual.addEventListener('click', showResult);

if (module.hot) {
  module.hot.accept();
}
