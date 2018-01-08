module.exports = {
  onCreate: function () {
    this.clicked = false;
  },
  handleButtonClick: function () {
    this.clicked = true;
  }
};