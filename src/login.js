const axios = require('axios').default;
require('./ultis')();

// query element //
const btnLogin = document.getElementById('btn-login');
const btnShowPassword = document.getElementById('btn-show-password2');
const iconLoadingBtn = document.getElementById('icon-loading-btn');
const inputUser = document.getElementById('input-name');
const inputPassword = document.getElementById('input-password');
const existErrorText = document.getElementById('exist-error-text');
const typeErrorDisplay = {
  emptyInput: 'Please insert your User name / Email and password',
  wrongUser: 'Wrong use name / password',
};

function lockUI(lock) {
  inputUser.disabled = lock;
  inputPassword.disabled = lock;
  if (lock) {
    iconLoadingBtn.classList.add('fa-circle-o-notch');
    iconLoadingBtn.classList.add('fa-spin');
  } else {
    iconLoadingBtn.classList.remove('fa-circle-o-notch');
    iconLoadingBtn.classList.remove('fa-spin');
  }
}

function setError(typeError) {
  switch (typeError) {
    case 'emptyInput':
      existErrorText.innerHTML = typeErrorDisplay.emptyInput;
      break;
    case 'wrongUser':
      existErrorText.innerHTML = typeErrorDisplay.wrongUser;
      break;
    case 'clearError':
      existErrorText.innerHTML = '';
      break;
    default:
  }
}

function togglePassword() {
  const type = inputPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  inputPassword.setAttribute('type', type);
}

async function login() {
  const userAccount = inputUser.value;
  const userPassword = inputPassword.value;
  let emptyInput = false;

  lockUI(true);
  if (!userAccount || !userPassword) {
    setError('emptyInput');
    emptyInput = true;
  }
  if (!emptyInput) {
    const response = await axios.get('http://localhost:3000/user').catch((error) => {
      console.log(error);
    });
    await sleep(3000);
    const dataName = response.data.findIndex((data) => data.name === userAccount);
    const dataEmail = response.data.findIndex((data) => data.email === userAccount);
    const dataPassword = response.data.findIndex((data) => data.password === userPassword);
    if (
      (dataName !== -1 || dataEmail !== -1) &&
      dataPassword !== -1 &&
      (dataName === dataPassword || dataEmail === dataPassword)
    ) {
      window.location.replace('calculator.html');
    } else {
      setError('wrongUser');
    }
  }
  lockUI(false);
}

// button event
btnLogin.addEventListener('click', login);
btnShowPassword.addEventListener('click', togglePassword);
inputUser.addEventListener('input', () => {
  setError('clearError');
});
inputPassword.addEventListener('input', () => {
  setError('clearError');
});

if (module.hot) {
  module.hot.accept();
}
