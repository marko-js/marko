"use strict";

// eslint-disable-next-line no-constant-binary-expression
let complain = "MARKO_DEBUG" && require("complain");
const compiler = require("@marko/compiler");
const path = require("path");

function clearCache() {
  compiler.taglib.clearCaches();
}

function register(taglibProps, taglibPath) {
  return compiler.taglib.register(taglibPath, taglibProps);
}

// A path relative to the working directory, as it was read before.
function registerFromFile(taglibPath) {
  return register(undefined, path.resolve(taglibPath));
}

exports.clearCache = clearCache;
exports.register = register;
exports.registerFromFile = registerFromFile;
exports.buildLookup = compiler.taglib.buildLookup;
exports.excludeDir = compiler.taglib.excludeDir;
exports.excludePackage = compiler.taglib.excludePackage;
exports.lookup = {
  buildLookup: function (dir, translator) {
    if (!translator || !Array.isArray(translator.taglibs)) {
      translator = require("../translator");
      // eslint-disable-next-line no-constant-condition
      if ("MARKO_DEBUG") {
        complain(
          "buildTaglibLookup now requires passing in a translator as the second argument, eg `buildTaglibLookup(dir, require('marko/translator'))`.",
        );
      }
    }

    return compiler.taglib.buildLookup(dir, translator);
  },
  registerTaglib(taglib) {
    if (typeof taglib === "string") {
      registerFromFile(taglib);
    } else {
      register(taglib, taglib.id);
    }
  },
};
