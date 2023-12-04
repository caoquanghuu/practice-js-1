window.addEventListener('load', () => {
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
  const spaceDisplayError = document.getElementById('space-display-error');
  const [errorEmptyInput, errorExistInfo, clearError] = [
    'Please insert all information!!!',
    'user / email already exist!!!',
    '',
  ];

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

  function displayError(typeError) {
    switch (typeError) {
      case errorEmptyInput:
        spaceDisplayError.innerHTML = errorEmptyInput;
        break;
      case errorExistInfo:
        spaceDisplayError.innerHTML = errorExistInfo;
        break;
      case clearError:
        spaceDisplayError.innerHTML = clearError;
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
    let inputEmpty = false;

    // Lock UI
    lockUI(true);
    // Check all input field has been assigned or not
    if (!userName || !userEmail || !userPhone || !userPassword) {
      inputEmpty = true;
    }
    // Check user information exist on data server exist or not
    if (!inputEmpty) {
      const response = await getUserInformation;
      await sleep(3000);
      const dataName = response.data.findIndex((data) => data.name === userName);
      const dataEmail = response.data.findIndex((data) => data.email === userEmail);
      if (dataName !== -1 || dataEmail !== -1) {
        displayError(errorExistInfo);
      } else {
        await postUserInformation(userName, userEmail, userPassword, userPhone);
      }
    }
    if (inputEmpty) displayError(errorEmptyInput);
    // Unlock UI
    lockUI(false);
  }

  // Export function with events.
  btnSignUP.addEventListener('mouseup', signUp);
  inputName.addEventListener('mouseup', () => {
    displayError(clearError);
  });
  inputEmail.addEventListener('mouseup', () => {
    displayError(clearError);
  });
  btnShowPassword.addEventListener('mouseup', togglePassword);

  if (module.hot) {
    module.hot.accept();
  }
});
