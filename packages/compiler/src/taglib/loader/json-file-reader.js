var taglibConfig = require("../config");
var stripJsonComments = require("strip-json-comments");
var fsReadOptions = { encoding: "utf8" };

exports.readFileSync = function (path) {
  var json = String(taglibConfig.fs.readFileSync(path, fsReadOptions));

  try {
    var taglibProps = JSON.parse(stripJsonComments(json));
    return taglibProps;
  } catch (e) {
    throw new Error(
      'Unable to parse JSON file at path "' + path + '". Error: ' + e
    );
  }
};
