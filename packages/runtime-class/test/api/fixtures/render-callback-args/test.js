const assert = require("assert/strict");

exports.check = function (marko, markoCompiler, snapshot, done) {
  var template = require("./template.marko").default;
  var data = {
    name: "John",
  };
  template.renderToString(data, function (error, html, out) {
    snapshot(html);
    assert.equal(out != null, true);
    done();
  });
};
