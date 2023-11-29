const axios = require('axios').default;

// query element //
const btnLogin = document.getElementById('btn-login');
const btnShowPassword = document.getElementById('btn-show-password2');
const iconLoadingBtn = document.getElementById('icon-loading-btn');
const inputUser = document.getElementById('input-name');
const inputPassword = document.getElementById('input-password');
const existError = document.getElementById('exist-error');

function sleep(ms) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

function togglePassword() {
  const type = inputPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  inputPassword.setAttribute('type', type);
}

function clearError() {
  existError.innerHTML = '';
}

function displayError(typeError) {
  const emptyInput = 'Please insert your User name / Email and password';
  const wrongUser = 'Wrong use name / password';
  if (typeError === 'emptyInput') {
    existError.innerHTML = emptyInput;
  }
  if (typeError === 'wrongUser') {
    existError.innerHTML = wrongUser;
  }
}

async function login() {
  const userAccount = inputUser.value;
  const userPassword = inputPassword.value;
  let emptyInput;
  let loginResult;

  lockUI(true);
  if (!userAccount || !userPassword) {
    displayError('emptyInput');
    emptyInput = true;
  }
  if (!emptyInput) {
    const response = await axios.get('http://localhost:3000/user');
    await sleep(3000);
    // eslint-disable-next-line array-callback-return
    response.data.findIndex((data) => {
      if (
        // eslint-disable-next-line operator-linebreak
        (userAccount === data.name || userAccount === data.email) &&
        userPassword === data.password
      ) {
        window.location.replace('calculator.html');
        loginResult = true;
      }
      if (!loginResult) {
        displayError('wrongUser');
      }
    });
  }
  lockUI(false);
}

// button event
btnLogin.addEventListener('click', login);
btnShowPassword.addEventListener('click', togglePassword);
inputUser.addEventListener('input', clearError);
inputPassword.addEventListener('input', clearError);

if (module.hot) {
  module.hot.accept();
}
