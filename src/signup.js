require('./ultis')();
// Export getUserInformation and function postUserInformation.
require('./axios-request');
require('./axios-request')();

const btnSignUP = document.getElementById('btn-sign-up');
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputPhone = document.getElementById('input-phone');
const inputPassword = document.getElementById('input-password');
const iconLoadingBtn = document.getElementById('icon-loading-btn');
const btnShowPassword = document.getElementById('btn-show-password');
const existErrorText = document.getElementById('exist-error-text');
const typeErrorDisplay = {
  missInfo: 'Please insert all information!!!',
  existInfo: 'user / email already exist!!!',
};

// Disable/Enable input field.
function lockUI(lock) {
  inputName.disabled = lock;
  inputEmail.disabled = lock;
  inputPhone.disabled = lock;
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

function setError(typeError) {
  switch (typeError) {
    case 'missInfo':
      existErrorText.innerHTML = typeErrorDisplay.missInfo;
      break;
    case 'existInfo':
      existErrorText.innerHTML = typeErrorDisplay.existInfo;
      break;
    case 'clearError':
      existErrorText.innerHTML = '';
      break;
    default:
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
  let emptyInput = false;

  // Lock UI
  lockUI(true);
  // Check all input field has been assigned or not
  if (!userName || !userEmail || !userPhone || !userPassword) {
    setError('missInfo');
    emptyInput = true;
  }
  // Check user information exist on data server exist or not
  if (!emptyInput) {
    const response = await getUserInformation;
    await sleep(3000);
    const dataName = response.data.findIndex((data) => data.name === userName);
    const dataEmail = response.data.findIndex((data) => data.email === userEmail);
    if (dataName !== -1 || dataEmail !== -1) {
      setError('existInfo');
    } else {
      await postUserInformation(userName, userEmail, userPassword, userPhone);
    }
  }
  // Unlock UI
  lockUI(false);
}

// Export function with events.
btnSignUP.addEventListener('click', signUp);
inputName.addEventListener('click', () => {
  setError('clearError');
});
inputEmail.addEventListener('click', () => {
  setError('clearError');
});
btnShowPassword.addEventListener('click', togglePassword);

if (module.hot) {
  module.hot.accept();
}
