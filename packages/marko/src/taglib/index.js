"use strict";

let complain = "MARKO_DEBUG" && require("complain");
const compiler = require("@marko/compiler");

function clearCache() {
  compiler.taglib.clearCaches();
}

function register(taglibProps, taglibPath) {
  return compiler.taglib.register(taglibPath, taglibProps);
}

function registerFromFile(taglibPath) {
  return register(
    compiler.taglib._loader.loadTaglibFromFile(taglibPath),
    taglibPath
  );
}

exports.clearCache = clearCache;
exports.register = register;
exports.registerFromFile = registerFromFile;
exports.buildLookup = compiler.taglib.buildLookup;
exports.excludeDir = compiler.taglib.excludeDir;
exports.excludePackage = compiler.taglib.excludePackage;
exports.loader = compiler.taglib._loader;
exports.finder = compiler.taglib._finder;
exports.lookup = {
  buildLookup: function (dir, translator) {
    if (!translator || !Array.isArray(translator.taglibs)) {
      translator = require("@marko/translator-default");
      // eslint-disable-next-line no-constant-condition
      if ("MARKO_DEBUG") {
        complain(
          "buildTaglibLookup now requires passing in a transltor as the second argument, eg `buildTaglibLookup(dir, require('@marko/translator-default'))`."
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
  }
};
