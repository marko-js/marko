var assert = require("assert/strict");

var Component = {
  onCreate: function () {
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

  handleRootClick: function (event, el) {
    assert.equal(el.getAttribute("class"), "app-dom-events");
    assert.equal(event.target.tagName.length > 0, true);
    this.log("el:click");
    assert.equal(this.name, "app-dom-events");
  },

  handleButtonClick: function () {
    this.log("button:click");
  },

  handleRootMouseMove: function () {
    this.log("el:mousemove");
  },

  handleButtonSpanMouseMove: function () {
    this.log("button>span:mousemove");
  },

  handleFooLinkDblClick: function () {
    this.log("#fooLink:dblclick");
  },

  handleFooLinkMouseOut: function (event, el) {
    assert.equal(event.target, el);
    this.log("#fooLink:mouseout");
  },

  handleHelloWorldMouseDown: function (event, el) {
    assert.equal(this.getEl("helloWorld"), el);
    this.log("#helloWorld:mousedown");
  },
};

module.exports = Component;
