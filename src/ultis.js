module.exports = function () {
  this.sleep = function (ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };
  this.isValidPhoneNumber = function (phoneNumber) {
    const phoneno = /^\d{10}$/;
    if (phoneNumber.match(phoneno)) {
      return true;
    }

    return false;
  };
  this.isValidEmail = function (email) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)) {
      return true;
    }

    return false;
  };
  this.isValidPassword = function (password) {
    // for checking if password length is between 8 and 15
    if (!(password.length >= 8 && password.length <= 15)) {
      return false;
    }

    // to check space
    if (password.indexOf(' ') !== -1) {
      return false;
    }

    // for digits from 0 to 9
    let count = 0;
    for (let i = 0; i <= 9; i++) {
      if (password.indexOf(i) !== -1) {
        count = 1;
      }
    }
    if (count === 0) {
      return false;
    }

    // for special characters
    // eslint-disable-next-line no-useless-escape
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      return false;
    }

    // for capital letters
    count = 0;
    for (let i = 65; i <= 90; i++) {
      if (password.indexOf(String.fromCharCode(i)) !== -1) {
        count = 1;
      }
    }
    if (count === 0) {
      return false;
    }

    // for small letters
    count = 0;
    for (let i = 97; i <= 122; i++) {
      if (password.indexOf(String.fromCharCode(i)) !== -1) {
        count = 1;
      }
    }
    if (count === 0) {
      return false;
    }

    // if all conditions fail
    return true;
  };
};
