const axios = require('axios').default;

module.exports = function () {
  this.getUserInformation = axios.get('http://localhost:3000/user').catch((error) => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
  this.postUserInformation = function (userName, userEmail, userPassword, userPhone) {
    axios
      .post('http://localhost:3000/user', {
        name: userName,
        email: userEmail,
        password: userPassword,
        phoneNumb: userPhone,
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };
};
