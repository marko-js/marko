var PassThrough = require("stream").PassThrough;

exports.check = function (marko, markoCompiler, snapshot, done) {
  var output = "";
  var outStream = new PassThrough({ encoding: "utf8" }).on("data", function (data) {
    output += data;
  });

  outStream.on("end", function () {
    snapshot(output);
    done();
  });

  var template = require("./template.marko").default;
  template
    .stream({
      name: "John",
    })
    .pipe(outStream)
    .on("error", function (e) {
      done(e);
    });
};
