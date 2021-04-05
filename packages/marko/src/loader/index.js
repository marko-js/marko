"use strict";
var nodePath = require("path");
var fs = require("fs");
var Module = require("module").Module;
var markoCompiler = require("../compiler");
var cwd = process.cwd();
var fsOptions = { encoding: "utf8" };
var requiredCompilerOptions = { modules: "cjs" };

module.exports = function load(templatePath, templateSrc, options) {
  if (arguments.length === 1) {
    return doLoad(templatePath);
  } else if (arguments.length === 2) {
    // see if second argument is templateSrc (a String)
    // or options (an Object)
    var lastArg = arguments[arguments.length - 1];
    if (typeof lastArg === "string") {
      return doLoad(templatePath, templateSrc);
    } else {
      var finalOptions = templateSrc;
      return doLoad(templatePath, null, finalOptions);
    }
  } else if (arguments.length === 3) {
    // assume function called according to function signature
    return doLoad(templatePath, templateSrc, options);
  } else {
    throw new Error("Illegal arguments");
  }
};

function loadSource(templatePath, compiledSrc) {
  // Short-circuit loading if the template has already been cached in the Node.js require cache
  var cached = require.cache[templatePath];
  if (cached) {
    return cached.exports;
  }

  var templateModule = new Module(templatePath, module);
  templateModule.paths = Module._nodeModulePaths(
    nodePath.dirname(templatePath)
  );
  templateModule.filename = templatePath;

  Module._cache[templatePath] = templateModule;

  templateModule._compile(compiledSrc, templatePath);

  return templateModule.exports;
}

function getCachedTemplate(templatePath) {
  var precompiledTemplatePath = templatePath + ".js";
  var templateModule =
    require.cache[templatePath] || require.cache[precompiledTemplatePath];

  if (templateModule) {
    return templateModule.exports;
  } else if (fs.existsSync(precompiledTemplatePath)) {
    return require(precompiledTemplatePath);
  }
}

function doLoad(templatePath, templateSrc, options) {
  options = Object.assign(
    {},
    markoCompiler.defaultOptions,
    options,
    requiredCompilerOptions
  );
  templatePath = nodePath.resolve(cwd, templatePath);
  var template = getCachedTemplate(templatePath);

  if (!template) {
    if (templateSrc == null) {
      templateSrc = fs.readFileSync(templatePath, fsOptions);
    }

    var compiledSrc = markoCompiler.compile(templateSrc, templatePath, options);

    template = loadSource(templatePath, compiledSrc);
  }

  if (template.default) {
    template = template.default;
  }

  return template;
}
