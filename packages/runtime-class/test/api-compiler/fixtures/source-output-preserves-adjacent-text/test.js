var fs = require("fs");
var path = require("path");

exports.check = function (marko, markoCompiler, expect, snapshot, done) {
  var templatePath = path.join(__dirname, "template.marko");
  var templateSrc = fs.readFileSync(templatePath, { encoding: "utf8" });
  var code = markoCompiler.compile(templateSrc, templatePath, {
    output: "source",
  });
  snapshot(code, ".marko");
  done();
};
