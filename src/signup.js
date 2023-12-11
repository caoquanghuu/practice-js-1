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
  const spaceDisplaySignUpSuccess = document.getElementById('space-sign-up-success');
  const [
    errorEmptyInput,
    errorExistInfo,
    clearError,
    signUPSuccess,
    inputEmailError,
    inputPhoneError,
    inputPasswordError,
  ] = [
    'Please insert all information!!!',
    'user / email already exist!!!',
    '',
    'sign up success, let go to login',
    'please insert valid email',
    'please insert valid Phone Number',
    'password must have 8-15 length, no space, have number, special characters, capital letters and small letters',
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

  function displaySignUpResult(typeError) {
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
      case inputEmailError:
        spaceDisplayError.innerHTML = inputEmailError;
        break;
      case inputPhoneError:
        spaceDisplayError.innerHTML = inputPhoneError;
        break;
      case inputPasswordError:
        spaceDisplayError.innerHTML = inputPasswordError;
        break;
      case signUPSuccess:
        spaceDisplaySignUpSuccess.innerHTML = signUPSuccess;
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
    let spaceDisplayController = null;

    // Lock UI
    lockUI(true);
    // Check all input field has been assigned or not
    if (!userName || !userEmail || !userPhone || !userPassword) {
      spaceDisplayController = errorEmptyInput;
    } else if (!isValidEmail(inputEmail.value)) {
      spaceDisplayController = inputEmailError;
    } else if (!isValidPhoneNumber(inputPhone.value)) {
      spaceDisplayController = inputPhoneError;
    } else if (!isValidPassword(inputPassword.value)) {
      spaceDisplayController = inputPasswordError;
    } else {
      const response = await getUserInformation();
      await sleep(3000);
      const dataName = response.data.findIndex((data) => data.name === userName);
      const dataEmail = response.data.findIndex((data) => data.email === userEmail);
      if (dataName === -1 && dataEmail === -1) {
        await postUserInformation(userName, userEmail, userPassword, userPhone);
        spaceDisplayController = signUPSuccess;
      } else {
        spaceDisplayController = errorExistInfo;
      }
    }
    // display error if have.
    switch (spaceDisplayController) {
      case errorEmptyInput:
        displaySignUpResult(errorEmptyInput);
        break;
      case errorExistInfo:
        displaySignUpResult(errorExistInfo);
        break;
      case signUPSuccess:
        displaySignUpResult(signUPSuccess);
        break;
      case inputEmailError:
        displaySignUpResult(inputEmailError);
        break;
      case inputPhoneError:
        displaySignUpResult(inputPhoneError);
        break;
      case inputPasswordError:
        displaySignUpResult(inputPasswordError);
        break;
      default:
    }
    // Unlock UI
    lockUI(false);
  }

  // Export function with events.
  btnSignUP.addEventListener('mouseup', signUp);
  inputName.addEventListener('mouseup', () => {
    displaySignUpResult(clearError);
  });
  inputEmail.addEventListener('mouseup', () => {
    displaySignUpResult(clearError);
  });
  btnShowPassword.addEventListener('mouseup', togglePassword);

  if (module.hot) {
    module.hot.accept();
  }
});
