"use strict";

const complain = "MARKO_DEBUG" && require("complain");
const path = require("path");
const resolveFrom = require("resolve-from");
const requiredCompilerOptions = { modules: "cjs" };
const defaultCompilerOptions = {
  // eslint-disable-next-line no-constant-condition
  sourceMaps: "MARKO_DEBUG" ? "inline" : false,
  meta: true
};
const MARKO_EXTENSIONS = Symbol("MARKO_EXTENSIONS");

// eslint-disable-next-line no-constant-condition
if ("MARKO_DEBUG") {
  complain(
    'Using "marko/node-require" has been replaced with "@marko/compiler/register".'
  );
}

function normalizeExtension(extension) {
  if (extension.charAt(0) !== ".") {
    extension = "." + extension;
  }
  return extension;
}

function compile(templatePath, markoCompiler, userCompilerOptions) {
  return markoCompiler.compileFileSync(
    templatePath,
    Object.assign(
      {},
      defaultCompilerOptions,
      userCompilerOptions,
      requiredCompilerOptions
    )
  ).code;
}

function install(options) {
  options = options || {};

  var requireExtensions = options.require // options.require introduced for testing
    ? options.require.extensions
    : require.extensions;

  var compilerOptions = options.compilerOptions;

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
    var markoCompilerModulePath = resolveFrom(dirname, "@marko/compiler");
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

exports.getExtensions = function () {
  return require.extensions[MARKO_EXTENSIONS];
};

require("./browser-refresh");
