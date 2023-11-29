const axios = require('axios').default;

const btnSignUP = document.getElementById('btn-sign-up');
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputPhone = document.getElementById('input-phone');
const inputPassword = document.getElementById('input-password');
const iconLoadingBtn = document.getElementById('icon-loading-btn');
const btnShowPassword = document.getElementById('btn-show-password');
const existError = document.getElementById('exist-error');

function sleep(ms) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Disable/Enable input field.
function lockUI(lock) {
  inputName.disabled = lock;
  inputEmail.disabled = lock;
  inputPhone.disabled = lock;
  inputPassword.disabled = lock;
}

// Start/Stop loading button
function loadingBtn(start) {
  if (start) {
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

// clear error.
function clearError() {
  existError.innerHTML = '';
}

function displayError(typeError) {
  const missInfoError = 'Please insert all information!!!';
  const existInfo = 'user / email already exist.';

  if (typeError === 'missInfo') {
    existError.innerHTML = missInfoError;
  }
  if (typeError === 'existInfo') {
    existError.innerHTML = existInfo;
  }
}

// Start sign up step
async function signUp() {
  // Set variable inside
  const userName = inputName.value;
  const userEmail = inputEmail.value;
  const userPhone = inputPhone.value;
  const userPassword = inputPassword.value;
  // variables for check as boolean
  let emptyInput;
  let userExist;

  // Lock UI
  lockUI(true);

  // Start loading button.
  loadingBtn(true);

  // Check all input field has been assigned or not
  if (!userName || !userEmail || !userPhone || !userPassword) {
    displayError('missInfo');
    emptyInput = true;
  }
  // Check user information exist on data server exist or not
  if (!emptyInput) {
    const response = await axios.get('http://localhost:3000/user');
    await sleep(3000);
    // eslint-disable-next-line array-callback-return
    response.data.findIndex((data) => {
      if (userName === data.name || userEmail === data.email) {
        displayError('existInfo');
        userExist = true;
      }
    });
    // Post user information to data server
    if (!userExist) {
      axios.post('http://localhost:3000/user', {
        name: userName,
        email: userEmail,
        password: userPassword,
        phoneNumb: userPhone,
      });
    }
  }

  // Unlock UI
  lockUI(false);

  // Stop loading button.
  loadingBtn(false);
}

// Export function with events.
btnSignUP.addEventListener('click', signUp);
inputName.addEventListener('input', clearError);
inputEmail.addEventListener('input', clearError);
btnShowPassword.addEventListener('click', togglePassword);

if (module.hot) {
  module.hot.accept();
}
