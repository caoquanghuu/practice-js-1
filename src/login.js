window.addEventListener('load', () => {
  require('./axios-request')();
  require('./ultis')();

  // query element //
  const btnLogin = document.getElementById('btn-login');
  const btnShowPassword = document.getElementById('btn-show-password2');
  const iconLoadingBtn = document.getElementById('icon-loading-btn');
  const inputUser = document.getElementById('input-name');
  const inputPassword = document.getElementById('input-password');
  const existErrorText = document.getElementById('exist-error-text');
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

  function setError(typeError) {
    switch (typeError) {
      case errorEmptyInput:
        existErrorText.innerHTML = errorEmptyInput;
        break;
      case errorWrongUser:
        existErrorText.innerHTML = errorWrongUser;
        break;
      case clearError:
        existErrorText.innerHTML = clearError;
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
    let inputEmpty = false;

    lockUI(true);
    if (!userAccount || !userPassword) {
      inputEmpty = true;
    }
    if (!inputEmpty) {
      const response = await getUserInformation;
      await sleep(3000);
      const userInfoInServer = response.data.some(
        (data) =>
          (data.name === userAccount || data.dataEmail === userAccount) &&
          data.password === userPassword,
      );
      if (userInfoInServer) {
        window.location.replace('calculator.html');
      } else {
        setError(errorWrongUser);
      }
    }
    if (inputEmpty) setError(errorEmptyInput);

    lockUI(false);
  }

  // button event
  btnLogin.addEventListener('mouseup', login);
  btnShowPassword.addEventListener('mouseup', togglePassword);
  inputUser.addEventListener('mouseup', () => {
    setError(clearError);
  });
  inputPassword.addEventListener('mouseup', () => {
    setError(clearError);
  });

  if (module.hot) {
    module.hot.accept();
  }
});
