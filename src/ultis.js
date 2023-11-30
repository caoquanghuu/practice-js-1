module.exports = function () {
  this.sleep = function (ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };
};
