var nodePath = require("path");

exports.check = function(marko, markoCompiler, expect, snapshot, done) {
  var template;
  var templatePath;

  // Make sure calling load with templatePath:String, templateSrc:String arguments works
  templatePath = nodePath.join(__dirname, "dummy.marko");
  template = marko.load(templatePath, "-- Hello $!{data.name}!");
  snapshot(template.renderSync({ name: "Frank" }).toString(), {
    name: "no-options"
  });

  // Make sure calling load with templatePath:String, templateSrc:String, options:Object arguments works
  templatePath = nodePath.join(__dirname, "dummy.marko");
  template = marko.load(templatePath, "-- Hello $!{data.name}!", {});
  snapshot(template.renderSync({ name: "Frank" }).toString(), {
    name: "empty-options"
  });

  // Make sure calling load with templatePath:String, options:Object arguments works
  templatePath = nodePath.join(__dirname, "invalid-template.marko");

  template = marko.load(templatePath, { ignoreUnrecognizedTags: true });
  expect(template.render).to.be.a("function");
  snapshot(template.renderSync({}).toString(), { name: "custom-options" });
  done();
};
