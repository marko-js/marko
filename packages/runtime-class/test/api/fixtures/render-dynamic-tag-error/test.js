var nodePath = require("path");

exports.check = function (marko, markoCompiler, expect, snapshot, done) {
  var template = marko.load(nodePath.join(__dirname, "template.marko"));
  var calls = [];

  template.render({ obj: {} }, function (err) {
    calls.push(err ? "render error" : "render ok");
  });
  template.renderToString({ obj: {} }, function (err) {
    calls.push(err ? "renderToString error" : "renderToString ok");
  });
  template
    .render({ obj: {} })
    .then(
      function () {
        calls.push("promise ok");
      },
      function () {
        calls.push("promise error");
      },
    )
    .then(function () {
      setImmediate(function () {
        expect(calls).to.deep.equal([
          "render error",
          "renderToString error",
          "promise error",
        ]);
        done();
      });
    });
};
