// query element //
const loginBtn = document.getElementById('login-button');
const showBtn = document.getElementById('eye');
const inputUser = document.getElementById('input-name');
const inputPassword = document.getElementById('input-password');
const loadingIcon = document.querySelector('.fa');
const showError = document.getElementById('exist-error');

const axios = require('axios').default;

function sleep(ms) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// function lockWhenLoading() {
//   inputUser.disabled = true;
//   inputPassword.disabled = true;
//   loadingIcon.classList.add('fa-circle-o-notch');
//   loadingIcon.classList.add('fa-spin');
//   loginBtn.disabled = true;
// }

function unlockWhenLoaded() {
  inputUser.disabled = false;
  inputPassword.disabled = false;
  loadingIcon.classList.remove('fa-circle-o-notch');
  loadingIcon.classList.remove('fa-spin');
  loginBtn.disabled = false;
}

async function login() {
  inputUser.disabled = true;
  inputPassword.disabled = true;
  loadingIcon.classList.add('fa-circle-o-notch');
  loadingIcon.classList.add('fa-spin');
  loginBtn.disabled = true;
  // get data from dp.jon/user
  const response = await axios.get('http://localhost:3000/user');
  await sleep(3000);
  // set variable
  const uID = inputUser.value;
  const uPW = inputPassword.value;
  // start logic compare with data and user id,password
  if (!uID) {
    showError.innerHTML = 'Please insert your ID';
  } else if (!uPW) {
    showError.innerHTML = 'Please insert your password';
  } else {
    for (let i = 0; i < response.data.length; i += 1) {
      const account = response.data[i].name;
      const em = response.data[i].email;
      const pass = response.data[i].userPSW;
      if ((uID === account || uID === em) && uPW === pass) {
        window.location.replace('./calculator.html');
      }
      if (i === response.data.length - 1 && uID !== account) {
        showError.innerHTML = 'Wrong user name / password';
      }
    }
  }
  // inputUser.disabled = false;
  // inputPassword.disabled = false;
  // loadingIcon.classList.remove('fa-circle-o-notch');
  // loadingIcon.classList.remove('fa-spin');
  // loginBtn.disabled = false;
}

function showPSW() {
  showBtn.type = 'text';
}

function hidePSW() {
  showBtn.type = 'password';
}
function clearError() {
  showError.innerHTML = '';
}
// button event
loginBtn.addEventListener('click', login);
showBtn.addEventListener('click', showPSW);
showBtn.addEventListener('mouseleave', hidePSW);
inputUser.addEventListener('input', clearError);
inputPassword.addEventListener('input', clearError);
loginBtn.addEventListener('load', unlockWhenLoaded);
// loginBtn.addEventListener('loadeddata', unlockWhenLoaded);

if (module.hot) {
  module.hot.accept();
}
