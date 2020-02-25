"use strict";

var Compiler = require("./Compiler");
var Walker = require("./Walker");
var Parser = require("./Parser");
var HtmlJsParser = require("./HtmlJsParser");
var Builder = require("./Builder");
var extend = require("raptor-util/extend");
var CompileContext = require("./CompileContext");
var globalConfig = require("./config");
var ok = require("assert").ok;
var fs = require("fs");
var taglib = require("../taglib");
var defaults = extend({}, globalConfig);

Object.defineProperty(exports, "defaultOptions", {
  get: function() {
    return globalConfig;
  },
  enumerable: true,
  configurable: false
});

Object.defineProperty(exports, "config", {
  get: function() {
    return globalConfig;
  },
  enumerable: true,
  configurable: false
});

var defaultParser = new Parser(new HtmlJsParser());

function configure(newConfig) {
  if (!newConfig) {
    newConfig = {};
  }

  globalConfig = extend({}, defaults);
  extend(globalConfig, newConfig);
}

var defaultCompiler = new Compiler({
  parser: defaultParser,
  builder: Builder.DEFAULT_BUILDER
});

function createBuilder(options) {
  return new Builder(options);
}

function createWalker(options) {
  return new Walker(options);
}

function isXML(path) {
  return path.endsWith(".xml") || path.endsWith(".xml.marko");
}

function _compile(src, filename, userOptions, callback) {
  registerCoreTaglibs();

  ok(filename, '"filename" argument is required');
  ok(typeof filename === "string", '"filename" argument should be a string');

  var options = {};

  extend(options, globalConfig);

  if (userOptions) {
    extend(options, userOptions);
  }

  var compiler = defaultCompiler;

  if (isXML(filename)) {
    require("complain")("Using Marko to build XML is deprecated");
    options.ignoreUnrecognizedTags = true;
  }

  const context = new CompileContext(src, filename, compiler.builder, options);

  let result;

  try {
    const compiled = compiler.compile(src, context);
    result = userOptions.sourceOnly ? compiled.code : compiled;
  } catch (e) {
    if (callback) {
      return callback(e);
    } else {
      throw e;
    }
  }

  if (callback) {
    callback(null, result);
  } else {
    return result;
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
      output: "vdom",
      meta: false,
      browser: true,
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

  options = extend(
    { output: "vdom", meta: false, browser: true, sourceOnly: false },
    options
  );
  return compileFile(filename, options, callback);
}

function checkUpToDate(/*templateFile, templateJsFile*/) {
  return false; // TODO Implement checkUpToDate
}

function getLastModified(path, options, callback) {
  if (typeof options === "function") {
    callback = options;
    options = null;
  }

  callback(null, -1); // TODO Implement getLastModified
}

function clearCaches() {
  taglib.clearCache();
}

function parseRaw(templateSrc, filename, options) {
  return parse(
    templateSrc,
    filename,
    Object.assign(
      {
        raw: true,
        ignorePlaceholders: true
      },
      options
    )
  );
}

function parse(templateSrc, filename, options) {
  registerCoreTaglibs();
  var context = new CompileContext(
    templateSrc,
    filename,
    Builder.DEFAULT_BUILDER
  );

  if (options.onContext) {
    options.onContext(context);
  }
  var parsed = defaultParser.parse(templateSrc, context, options);

  if (context.hasErrors()) {
    var errors = context.getErrors();

    var message =
      'An error occurred while trying to parse template at path "' +
      filename +
      '". Error(s) in template:\n';
    for (var i = 0, len = errors.length; i < len; i++) {
      let error = errors[i];
      message += i + 1 + ") " + error.toString() + "\n";
    }
    var error = new Error(message);
    error.errors = errors;
    throw error;
  }

  return parsed;
}

exports.createBuilder = createBuilder;
exports.compileFile = compileFile;
exports.compile = compile;
exports.compileForBrowser = compileForBrowser;
exports.compileFileForBrowser = compileFileForBrowser;
exports.parseRaw = parseRaw;
exports.parse = parse;

exports.checkUpToDate = checkUpToDate;
exports.getLastModified = getLastModified;
exports.createWalker = createWalker;
exports.builder = Builder.DEFAULT_BUILDER;
exports.configure = configure;
exports.clearCaches = clearCaches;

exports.taglibLookup = taglib.lookup;
exports.taglibLoader = taglib.loader;
exports.taglibFinder = taglib.finder;

var coreTaglibsRegistered = false;

function registerCoreTaglibs() {
  if (!coreTaglibsRegistered) {
    coreTaglibsRegistered = true;
    taglib.register(
      require("../core-tags/cache/marko.json"),
      require.resolve("../core-tags/cache/marko.json")
    );
    taglib.register(
      require("../core-tags/components/marko.json"),
      require.resolve("../core-tags/components/marko.json")
    );
    taglib.register(
      require("../core-tags/core/marko.json"),
      require.resolve("../core-tags/core/marko.json")
    );
    taglib.register(
      require("../core-tags/html/marko.json"),
      require.resolve("../core-tags/html/marko.json")
    );
    taglib.register(
      require("../core-tags/migrate/marko.json"),
      require.resolve("../core-tags/migrate/marko.json")
    );
    taglib.register(
      require("../core-tags/svg/marko.json"),
      require.resolve("../core-tags/svg/marko.json")
    );
    taglib.register(
      require("../core-tags/math/marko.json"),
      require.resolve("../core-tags/math/marko.json")
    );
  }
}

function buildTaglibLookup(dirname) {
  registerCoreTaglibs();
  return taglib.buildLookup(dirname);
}

exports.buildTaglibLookup = buildTaglibLookup;

exports.registerTaglib = function(filePath) {
  registerCoreTaglibs();

  ok(typeof filePath === "string", '"filePath" should be a string');
  taglib.registerFromFile(filePath);
  clearCaches();
};

exports.isVDOMSupported = true;
exports.modules = require("./modules");
