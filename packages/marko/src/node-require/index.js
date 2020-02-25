"use strict";
require("../");

const path = require("path");
const resolveFrom = require("resolve-from");
const fs = require("fs");
const fsReadOptions = { encoding: "utf8" };
const MARKO_EXTENSIONS = Symbol("MARKO_EXTENSIONS");

function normalizeExtension(extension) {
  if (extension.charAt(0) !== ".") {
    extension = "." + extension;
  }
  return extension;
}

function compile(templatePath, markoCompiler, compilerOptions) {
  if (compilerOptions) {
    compilerOptions = Object.assign(
      {},
      markoCompiler.defaultOptions,
      compilerOptions
    );
  } else {
    compilerOptions = markoCompiler.defaultOptions;
  }

  var templateSrc = fs.readFileSync(templatePath, fsReadOptions);
  var compiledSrc = markoCompiler.compile(templateSrc, templatePath);

  return compiledSrc;
}

function install(options) {
  options = options || {};

  var requireExtensions = options.require // options.require introduced for testing
    ? options.require.extensions
    : require.extensions;

  var compilerOptions = options.compilerOptions;
  require("../compiler").configure(compilerOptions);

  var extensions = [];

  if (options.extension) {
    extensions.push(options.extension);
  }

  if (options.extensions) {
    extensions = extensions.concat(options.extensions);
  }

  if (extensions.length === 0) {
    extensions.push(".marko");
  }

  function markoRequireExtension(module, filename) {
    // Resolve the appropriate compiler relative to the location of the
    // marko template file on disk using the "resolve-from" module.
    var dirname = path.dirname(filename);
    var markoCompilerModulePath = resolveFrom(dirname, "marko/compiler");
    var markoCompiler = require(markoCompilerModulePath);

    // Now use the appropriate Marko compiler to compile the Marko template
    // file to JavaScript source code:
    var compiledSrc = compile(filename, markoCompiler, compilerOptions);

    // Append ".js" to the filename since that is where we write the compiled
    // source code that is being loaded. This allows stack traces to match up.
    module._compile(compiledSrc, filename);
  }

  requireExtensions[MARKO_EXTENSIONS] =
    requireExtensions[MARKO_EXTENSIONS] ||
    (requireExtensions[MARKO_EXTENSIONS] = []);

  extensions.forEach(extension => {
    extension = normalizeExtension(extension);
    requireExtensions[extension] = markoRequireExtension;
    requireExtensions[MARKO_EXTENSIONS].push(extension);
  });
}

install();

exports.install = install;

exports.getExtensions = function() {
  return require.extensions[MARKO_EXTENSIONS];
};
