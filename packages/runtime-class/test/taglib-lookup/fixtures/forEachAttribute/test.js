exports.check = function (markoCompiler, snapshot) {
  var lookup = markoCompiler.buildTaglibLookup(__dirname);

  var attrNames = [];

  lookup.forEachAttribute("foo", (attr) => {
    attrNames.push(attr.name);
  });

  snapshot(attrNames, ".json");
};
