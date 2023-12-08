window.addEventListener('load', () => {
  require('./axios-request')();
  require('./ultis')();

  // query element //
  const btnLogin = document.getElementById('btn-login');
  const btnShowPassword = document.getElementById('btn-show-password2');
  const iconLoadingBtn = document.getElementById('icon-loading-btn');
  const inputUser = document.getElementById('input-name');
  const inputPassword = document.getElementById('input-password');
  const spaceDisplayError = document.getElementById('space-display-error2');
  const [errorEmptyInput, errorWrongUser, clearError] = [
    'Please insert your User name / Email and password',
    'Wrong use name / password',
    '',
  ];

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

  function displayError(typeError) {
    switch (typeError) {
      case errorEmptyInput:
        spaceDisplayError.innerHTML = errorEmptyInput;
        break;
      case errorWrongUser:
        spaceDisplayError.innerHTML = errorWrongUser;
        break;
      case clearError:
        spaceDisplayError.innerHTML = clearError;
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
    let errorController = null;

    lockUI(true);
    if (!userAccount || !userPassword) {
      errorController = errorEmptyInput;
    } else {
      const response = await getUserInformation();
      await sleep(3000);
      const userInfoInServer = response.data.some(
        (data) =>
          (data.name === userAccount || data.dataEmail === userAccount) &&
          data.password === userPassword,
      );
      if (userInfoInServer) {
        window.location.replace('index.html');
        localStorage.setItem('user-name', JSON.stringify(userAccount));
        localStorage.setItem('login-time', JSON.stringify(new Date()));
      } else {
        errorController = errorEmptyInput;
      }
    }
    // Display error if have
    if (errorController === errorEmptyInput) displayError(errorEmptyInput);
    else if (errorController === errorWrongUser) displayError(errorWrongUser);
    lockUI(false);
  }

  // button event
  btnLogin.addEventListener('mouseup', login);
  btnShowPassword.addEventListener('mouseup', togglePassword);
  inputUser.addEventListener('mouseup', () => {
    displayError(clearError);
  });
  inputPassword.addEventListener('mouseup', () => {
    displayError(clearError);
  });

  if (module.hot) {
    module.hot.accept();
  }
});
