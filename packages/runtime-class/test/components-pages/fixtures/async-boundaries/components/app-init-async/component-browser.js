var assert = require("assert/strict");

module.exports = {
  onMount: function () {
    window.appInitAsync = this;

    var helloFrank = this.getComponent("helloFrank");
    var helloFrankAsync = this.getComponent("helloFrankAsync");
    var helloJohn = this.getComponent("helloJohn");
    var helloJohnAsync = this.getComponent("helloJohnAsync");
    var helloJane = this.getComponent("helloJane");

    this.test = function () {
      assert.ok(typeof helloFrank === "object" && helloFrank !== null);
      assert.equal(helloFrank.name, "Frank");

      assert.ok(typeof helloFrankAsync === "object" && helloFrankAsync !== null);
      assert.equal(helloFrankAsync.name, "Frank Async");

      assert.ok(typeof helloJohn === "object" && helloJohn !== null);
      assert.equal(helloJohn.name, "John");

      assert.ok(typeof helloJohnAsync === "object" && helloJohnAsync !== null);
      assert.equal(helloJohnAsync.name, "John Async");

      assert.ok(typeof helloJane === "object" && helloJane !== null);
      assert.equal(helloJane.name, "Jane");
    };
  },
};
