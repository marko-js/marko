var nodePath = require("path");

exports.check = function (marko, markoCompiler, expect, snapshot, done) {
  // Load the JS file to ensure the hello.marko.js file is created
  marko.load(nodePath.join(__dirname, "template.marko"));

  var template = require(nodePath.join(__dirname, "template.marko")).default;
  template.render(
    {
      name: "John",
    },
    function (err, result) {
      if (err) {
        return done(err);
      }

      snapshot(result.toString());
      done();
    },
  );
};
