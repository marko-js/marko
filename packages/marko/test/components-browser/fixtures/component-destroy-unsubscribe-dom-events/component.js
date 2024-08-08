var expect = require("chai").expect;

module.exports = {
  onMount: function () {
    this.logOutput = [];

    this.name = "app-dom-events";

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    var self = this;
    function log(data) {
      self.logOutput.push(data);
    }

    this.log = log;
    this.clearLog = function () {
      this.logOutput = [];
    };

    this.logOutput = [];
  },

  handleFooLinkDblClick: function () {
    this.log("#fooLink:dblclick");
  },

  handleFooLinkMouseOut: function (event, el) {
    expect(event.target).to.equal(el);
    this.log("#fooLink:mouseout");
  },
};
