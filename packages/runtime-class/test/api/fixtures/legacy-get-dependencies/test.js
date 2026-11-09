const assert = require("assert/strict");
const nodePath = require("path");
const { getDeps } = require("marko/src/runtime/components/legacy/dependencies");

exports.check = function (marko, markoCompiler, snapshot, done) {
  const template = marko.load(nodePath.join(__dirname, "template.marko"));
  const [init] = getDeps(template, {});
  assert.match(
    init.virtualModule.read(),
    /components\.register\('[^']+', require\('\.\/template\.marko'\)\);/,
  );
  done();
};
