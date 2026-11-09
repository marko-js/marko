const assert = require("assert/strict");

var nodePath = require("path");
var promiseProvider =
  require("../../../__util__/async-helpers").promiseProvider;

exports.check = function (marko, markoCompiler, snapshot, done) {
  var template = marko.load(nodePath.join(__dirname, "template.marko"));
  var out = template.createOut();

  template.render(
    {
      userPromise: promiseProvider(1, new Error("User Promise Rejected Error")),
    },
    out,
  );

  out.on("error", (err) => {
    assert.equal(err.message.indexOf("User Promise Rejected Error") !== -1, true);
    done();
  });
};
