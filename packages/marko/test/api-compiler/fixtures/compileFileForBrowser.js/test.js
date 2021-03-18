var path = require("path");

exports.check = function (marko, markoCompiler, expect, snapshot, done) {
  var compiler = require("marko/compiler");
  var templatePath = path.join(__dirname, "template.marko");

  var compiledTemplate = compiler.compileFileForBrowser(templatePath, {
    writeVersionComment: false
  });

  var code = compiledTemplate.code;
  code = code.replace(/marko\/dist\//g, "marko/src/");
  snapshot(code, ".js");

  done();
};
