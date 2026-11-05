const assert = require("assert/strict");

var nodePath = require("path");

exports.check = function (marko, markoCompiler, helpers, done) {
  var template = marko.load(nodePath.join(__dirname, "template.marko"));
  var out = template.createOut();
  var events = [];
  var error;

  out
    .on("error", function (_error) {
      events.push("error");
      error = _error;
    })
    .on("finish", function () {
      events.push("finish");

      assert.deepEqual(events, ["error", "finish"]);
      assert.equal(error != null, true);
      assert.match(error.toString(), /invalid/);

      done();
    });
  template.render({ name: "John" }, out);
};
