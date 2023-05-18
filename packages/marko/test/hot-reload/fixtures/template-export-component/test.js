var fs = require("fs");
var nodePath = require("path");

var tempDir = nodePath.join(__dirname, "temp");

function copyFiles(dir) {
  var files = fs.readdirSync(dir);
  files.forEach(file => {
    var src = fs.readFileSync(nodePath.join(dir, file));
    fs.writeFileSync(nodePath.join(tempDir, file), src);
  });
}

exports.check = function (marko, hotReload, expect, snapshot) {
  try {
    fs.mkdirSync(nodePath.join(__dirname, "temp"));
  } catch (e) {
    /* ignore error */
  }

  var tempTemplatePath = nodePath.join(__dirname, "temp/index.marko");

  copyFiles(nodePath.join(__dirname, "a"));
  var component = require(tempTemplatePath);
  snapshot(component.renderSync().toString(), {
    name: "initial",
    ext: ".html"
  });

  hotReload.handleFileModified(tempTemplatePath);

  copyFiles(nodePath.join(__dirname, "b"));
  snapshot(component.renderSync().toString(), {
    name: "reloaded",
    ext: ".html"
  });
};
