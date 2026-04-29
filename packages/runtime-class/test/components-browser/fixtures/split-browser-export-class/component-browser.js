function Component() {}

Component.prototype = {
  handleClick: function () {
    this.clicked = true;
  },
};

module.exports = Component;
