var nodePath = require("path");
var promiseProvider = require("../../../__util__/async-helpers")
  .promiseProvider;

exports.check = function (marko, markoCompiler, expect, snapshot, done) {
  var template = marko.load(nodePath.join(__dirname, "template.marko"));

  template
    .render({
      userPromise: promiseProvider(1, { name: "John" })
    })
    .then(result => {
      process.nextTick(() => {
        snapshot(result.toString());
        done();
      });
    });
};
