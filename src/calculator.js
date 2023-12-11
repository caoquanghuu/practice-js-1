window.addEventListener('load', () => {
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
  let valueIn1 = null;
  let valueIn2 = null;
  let preType = null;
  let result = null;

  function cache() {
    localStorage.clear();
    window.location.replace('login.html');
  }

  function checkLoggedIn() {
    const userName = localStorage.getItem('user-name');
    if (!userName) {
      window.location.replace('login.html');
    }
    setTimeout(cache, 30000);
  }

  checkLoggedIn();

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
    valueIn1 = '';
    valueIn2 = '';
    preType = '';
  }

  function calculate() {
    switch (preType) {
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
  }

  function handleClick(calcType) {
    if (!valueIn1) {
      valueIn1 = parseFloat(spaceDisplay.value);
      spaceDisplay.value = '';
    } else {
      valueIn2 = parseFloat(spaceDisplay.value);
      spaceDisplay.value = '';
    }
    if (valueIn1 && valueIn2 && preType) {
      calculate();
      spaceDisplay.value = result;
      valueIn1 = result;
    }
    preType = calcType;
    spaceDisplay.value = '';
  }

  function showFinalResult() {
    valueIn2 = parseFloat(spaceDisplay.value);
    calculate();
    spaceDisplay.value = result;
    valueIn1 = result;
    valueIn2 = null;
    preType = null;
  }

  btnMulti.addEventListener('click', () => handleClick(multi));
  btnSub.addEventListener('click', () => handleClick(sub));
  btnPlus.addEventListener('click', () => handleClick(plus));
  btnDiv.addEventListener('click', () => handleClick(div));
  btnClear.addEventListener('click', clearInput);
  for (let i = 0; i < 10; i++) {
    btn[i].addEventListener('click', () => getInput(i));
  }
  btnDot.addEventListener('click', createDot);
  btnEqual.addEventListener('click', showFinalResult);

  if (module.hot) {
    module.hot.accept();
  }
});
