var assert = require("assert/strict");

module.exports = {
  onMount: function () {
    this.name = "app-legacy-button";

    var logOutput = (this.logOutput = []);

    function log(data) {
      logOutput.push(data);
    }

    this.log = log;
    this.clicked = false;
  },

  handleRootMouseDown: function (event, el) {
    this.clicked = true;
    assert.equal(el.getAttribute("class"), "app-legacy-button");
    this.log("click");
    assert.equal(this.name, "app-legacy-button");
  },
};
