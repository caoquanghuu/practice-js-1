const btnOne = document.getElementById('btn-one');
const two = document.getElementById('btn-two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const input = document.getElementById('result');

const btns = [
  'btn-one',
  'btn-two',
  'btn-three',
  'btn-four',
  'btn-five',
  'btn-six',
  'btn-seven',
  'btn-eight',
  'btn-nine',
  'btn-zero',
].map((i) => query(i));

const ml = document.getElementById('multi');
const sb = document.getElementById('sub');
const pl = document.getElementById('plus');
const dv = document.getElementById('div');
const eq = document.getElementById('equal');
const cl = document.getElementById('ce');
const d = document.getElementById('dot');

// get input from numb button
function getInput(a) {
  input.value += a;
}

// create dot and check dot already exist or not
function dot() {
  const ar = input.value.split('');
  const a = '.';
  for (let i = 0; i < ar.length; i += 1) {
    if (ar[i] === a) {
      break;
    } else if (i === ar.length - 1 && ar[i] !== a) {
      input.value += a;
    }
  }
}

// function to calculate
function displayOutput() {
  const valueIn2 = parseFloat(input.value);
  input.value = '';
  console.log('input 2', valueIn2);
  let result;
  switch (cal) {
    case '*':
      result = valueIn1 * valueIn2;
      break;
    case '-':
      result = valueIn1 - valueIn2;
      break;
    case '+':
      result = valueIn1 + valueIn2;
      break;
    case '/':
      result = valueIn1 / valueIn2;
      break;
  }
  input.value = result;
  console.log('result', result);
  result = '';
}

// get calculation and return result
function calculation(cal) {
  const valueIn1 = parseFloat(input.value);
  console.log('input 1', valueIn1);
  input.value = '';
  // calculate when press equal button
  eq.addEventListener('click', displayOutput);
}

// function to clear input
function ce() {
  const ce = document.getElementById('result');
  ce.value = '';
}

one.addEventListener('click', getInput(1));
two.addEventListener('click', getInput(2));
three.addEventListener('click', getInput(3));
four.addEventListener('click', getInput(4));
five.addEventListener('click', getInput(5));
six.addEventListener('click', getInput(6));
seven.addEventListener('click', getInput(7));
eight.addEventListener('click', getInput(8));
nine.addEventListener('click', getInput(9));
zero.addEventListener('click', getInput(0));
ml.addEventListener('click', calculation('*'));
sb.addEventListener('click', calculation('-'));
pl.addEventListener('click', calculation('+'));
dv.addEventListener('click', calculation('/'));
cl.addEventListener('click', ce);
d.addEventListener('click', dot);

if (module.hot) {
  module.hot.accept();
}
