const signupBtn = document.getElementById('signup-button');
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputPhone = document.getElementById('input-phone');
const inputPassword = document.getElementById('input-password');
const loadingIcon = document.querySelector('.fa');
const showBtn = document.getElementById('eye-signup');
const showError = document.getElementById('exist-error');

const axios = require('axios').default;

function sleep(ms) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function Signup() {
  // Set variable inside
  const userName = inputName.value;
  const userEmail = inputEmail.value;
  const userPhone = inputPhone.value;
  const userPassword = inputPassword.value;
  // Disable input field.
  inputName.disabled = true;
  inputEmail.disabled = true;
  inputPhone.disabled = true;
  inputPassword.disabled = true;
  // Start loading button.
  loadingIcon.classList.add('fa-circle-o-notch');
  loadingIcon.classList.add('fa-spin');

  if (!userName || !userEmail || !userPhone || !userPassword) {
    showError.innerHTML = 'Please insert all information!!!';
  } else {
    const response = await axios.get('http://localhost:3000/user');
    await sleep(3000);
    let checkUser;
    for (let i = 0; i < response.data.length - 1; i += 1) {
      if (userName === response.data[i].name || userEmail === response.data[i].email) {
        checkUser = false;
        showError.innerHTML = 'user / email already exist';
      }
    }
    if (checkUser !== false) {
      axios.post('http://localhost:3000/user', {
        name: userName,
        email: userEmail,
        userPSW: userPassword,
        PhoneNumb: userPhone,
      });
    }
  }
  // Enable input field.
  inputName.disabled = false;
  inputEmail.disabled = false;
  inputPhone.disabled = false;
  inputPassword.disabled = false;
  // Stop loading button.
  loadingIcon.classList.remove('fa-circle-o-notch');
  loadingIcon.classList.remove('fa-spin');
}
// clear error.
function clearError() {
  document.getElementById('exist-error').innerHTML = '';
}

function showPSW() {
  inputPassword.type = 'text';
}

function hidePSW() {
  inputPassword.type = 'password';
}

// Export function with events.
signupBtn.addEventListener('click', Signup);
inputName.addEventListener('input', clearError);
inputEmail.addEventListener('input', clearError);
showBtn.addEventListener('click', showPSW);
showBtn.addEventListener('mouseleave', hidePSW);

if (module.hot) {
  module.hot.accept();
}
