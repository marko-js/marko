var fs = require("fs");
var nodePath = require("path");

var Module = require("module").Module;
var oldResolveFilename = Module._resolveFilename;

var isDebug = require("../../env").isDebug;

var rootDir = nodePath.join(__dirname, "../../");
var markoDir = isDebug
  ? nodePath.join(rootDir, "src")
  : nodePath.join(rootDir, "dist");

try {
  var markoInstalledDir = nodePath.dirname(require.resolve("marko"));
  if (fs.existsSync(markoInstalledDir)) {
    fs.renameSync(
      markoInstalledDir,
      markoInstalledDir.replace("node_modules/marko", "node_modules/~marko")
    );
  }
} catch (e) {
  // ignore error
}

Module._resolveFilename = function(request, parent, isMain) {
  if (request.charAt(0) !== "." && parent.filename.startsWith(rootDir)) {
    if (
      request === "marko/components" ||
      request === "marko/env" ||
      request.startsWith("marko/dist/") ||
      request.startsWith("marko/src/") ||
      request.startsWith("marko/helpers/")
    ) {
      request = nodePath.join(rootDir, request.substring("marko/".length));
    } else if (request === "marko") {
      request = rootDir;
    } else if (request.startsWith("marko/")) {
      request = nodePath.join(markoDir, request.substring("marko/".length));
    }
  }

  return oldResolveFilename.call(this, request, parent, isMain);
};
