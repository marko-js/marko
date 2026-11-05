const assert = require("assert/strict");

var fs = require("fs");
var nodePath = require("path");

exports.check = function (marko, markoCompiler, snapshot, done) {
  markoCompiler.defaultOptions.writeToDisk = false;
  try {
    var templatePath = nodePath.join(__dirname, "template.marko");
    var compiledPath = nodePath.join(__dirname, "template.marko.js");
    var template = marko.load(templatePath);
    assert.equal(fs.existsSync(compiledPath), false);
    assert.equal(typeof template.render, "function");
    snapshot(template.renderSync({ name: "Frank" }).toString());
  } finally {
    markoCompiler.defaultOptions.writeToDisk = true;
  }

  done();
};
