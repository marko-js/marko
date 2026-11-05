var nodePath = require("path");
var PassThrough = require("stream").PassThrough;

exports.check = function (marko, markoCompiler, snapshot, done) {
  var output = "";

  var stream = new PassThrough({ encoding: "utf8" }).on("data", function (data) {
    output += data;
  });

  stream
    .on("end", function () {
      snapshot(output);
      done();
    })
    .on("error", function (e) {
      done(e);
    });

  var template = marko.load(nodePath.join(__dirname, "template.marko"));
  template.render(
    {
      $global: {
        foo: "bar",
      },
    },
    stream,
  );
};
