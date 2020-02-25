var expect = require("chai").expect;
var markoVersion = require("../../../../package.json").version;

exports.test = function(helpers) {
  helpers.spawnSync(["template.marko"]);
  var compiledFile = helpers.readSync("template.marko.js").toString();
  expect(compiledFile).to.contain(
    "Compiled using marko@" + markoVersion + " - DO NOT EDIT"
  );
};
