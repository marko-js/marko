"use strict";

var complain = "MARKO_DEBUG" && require("complain");
var compiler = require("@marko/compiler");
var extend = require("raptor-util/extend");
var globalConfig = require("./config");
var ok = require("assert").ok;
var fs = require("fs");
var taglib = require("../taglib");
var defaults = extend({}, globalConfig);

var defaultOptionsExportDefinition = {
  get: function() {
    return globalConfig;
  },
  enumerable: true,
  configurable: false
};

Object.defineProperties(exports, {
  defaultOptions: defaultOptionsExportDefinition,
  config: defaultOptionsExportDefinition
});

function configure(newConfig) {
  if (!newConfig) {
    newConfig = {};
  }

  globalConfig = extend({}, defaults);
  extend(globalConfig, newConfig);

  compiler.configure(newConfig);
}

function resultCompat({ code, meta, map }, options = {}) {
  if (options.sourceOnly !== false) {
    return code;
  } else {
    return { code, meta, map };
  }
}

function _compile(src, filename, userConfig, callback) {
  ok(filename, '"filename" argument is required');
  ok(typeof filename === "string", '"filename" argument should be a string');
  var options = {};

  extend(options, globalConfig);

  if (userConfig) {
    extend(options, userConfig);
  }

  if (callback) {
    compiler.compile(src, filename, options).then(
      result => callback(null, resultCompat(result, options)),
      error => callback(error)
    );
  } else {
    return resultCompat(compiler.compileSync(src, filename, options), options);
  }
}

function compile(src, filename, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = null;
  }

  options = options || {};
  options.sourceOnly = options.sourceOnly !== false;

  return _compile(src, filename, options, callback);
}

function compileForBrowser(src, filename, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = null;
  }

  options = extend(
    {
      output: "dom",
      meta: false,
      sourceOnly: false
    },
    options
  );

  return compile(src, filename, options, callback);
}

function compileFile(filename, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = null;
  }

  options = options || {};
  options.sourceOnly = options.sourceOnly !== false;

  if (callback) {
    fs.readFile(filename, { encoding: "utf8" }, function(err, templateSrc) {
      if (err) {
        return callback(err);
      }

      _compile(templateSrc, filename, options, callback);
    });
  } else {
    let templateSrc = fs.readFileSync(filename, { encoding: "utf8" });
    return _compile(templateSrc, filename, options, callback);
  }
}

function compileFileForBrowser(filename, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = null;
  }

  options = extend({ output: "dom", meta: false, sourceOnly: false }, options);
  return compileFile(filename, options, callback);
}

exports.compileFile = compileFile;
exports.compile = compile;
exports.compileForBrowser = compileForBrowser;
exports.compileFileForBrowser = compileFileForBrowser;

exports.configure = configure;

// TODO: resolve these circular dep issues.
Object.defineProperties(exports, {
  taglibLookup: {
    get() {
      return taglib.lookup;
    }
  },
  taglibLoader: {
    get() {
      return taglib.loader;
    }
  },
  taglibFinder: {
    get() {
      return taglib.finder;
    }
  },
  buildTaglibLookup: {
    get() {
      return (dir, translator) => {
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
      };
    }
  }
});

exports.clearCaches = function clearCaches() {
  compiler._clearDefaults();
  taglib.clearCache();
};

exports.registerTaglib = function(filePath) {
  ok(typeof filePath === "string", '"filePath" should be a string');
  taglib.registerFromFile(filePath);
  exports.clearCaches();
};

exports.isVDOMSupported = true;
