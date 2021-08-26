var Component = {
  onCreate: function () {
    this.logOutput = [];
    this.state = { active: true };
  },

  log(data) {
    this.logOutput.push(data);
  },

  clearLog() {
    this.logOutput = [];
  },

  toggle() {
    this.state.active = !this.state.active;
  },

  handleDOMClick: function () {
    this.log("dom:click");
  },

  handleCustomClick: function () {
    this.log("custom:click");
  }
};

module.exports = Component;
