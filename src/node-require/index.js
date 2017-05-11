'use strict';
require('../');

const path = require('path');
const resolveFrom = require('resolve-from');
const fs = require('fs');
const fsReadOptions = { encoding: 'utf8' };
const MARKO_EXTENSIONS = Symbol('MARKO_EXTENSIONS');

function normalizeExtension(extension) {
    if (extension.charAt(0) !== '.') {
        extension = '.' + extension;
    }
    return extension;
}

function compile(templatePath, markoCompiler, compilerOptions) {
    if (compilerOptions) {
        compilerOptions = Object.assign({}, markoCompiler.defaultOptions, compilerOptions);
    } else {
        compilerOptions = markoCompiler.defaultOptions;
    }

    var writeToDisk = compilerOptions.writeToDisk;

    var templateSrc;
    var compiledSrc;

    if (writeToDisk === false) {
        // Don't write the compiled template to disk. Instead, load it
        // directly from the compiled source using the internals of the
        // Node.js module loading system.
        templateSrc = fs.readFileSync(templatePath, fsReadOptions);
        compiledSrc = markoCompiler.compile(templateSrc, templatePath);
    } else {
        var targetFile = templatePath + '.js';

        if (markoCompiler.defaultOptions.assumeUpToDate && fs.existsSync(targetFile)) {
            // If the target file already exists and "assumeUpToDate" then just use the previously
            // compiled template.
            return fs.readFileSync(targetFile, fsReadOptions);
        }

        var targetDir = path.dirname(templatePath);

        var isUpToDate = markoCompiler.checkUpToDate(targetFile);

        if (isUpToDate) {
            compiledSrc = fs.readFileSync(targetFile, fsReadOptions);
        } else {
            templateSrc = fs.readFileSync(templatePath, fsReadOptions);
        	compiledSrc = markoCompiler.compile(templateSrc, templatePath, compilerOptions);

            // Write to a temporary file and move it into place to avoid problems
            // assocatiated with multiple processes write to the same file. We only
            // write the compiled source code to disk so that stack traces will
            // be accurate.
            var filename = path.basename(targetFile);
            var tempFile = path.join(targetDir, '.' + process.pid + '.' + Date.now() + '.' + filename);
            fs.writeFileSync(tempFile, compiledSrc, fsReadOptions);
            fs.renameSync(tempFile, targetFile);
        }
    }

    // We attach a path to the compiled template so that hot reloading will work.
    return compiledSrc;
}

function getLoadedTemplate(path) {
    var cached = require.cache[path];
    return cached && cached.exports.render ? cached.exports : undefined;
}

function install(options) {
    options = options || {};

    var requireExtensions = options.require ? // options.require introduced for testing
        options.require.extensions :
        require.extensions;

    var compilerOptions = options.compilerOptions;

    if (compilerOptions) {
        require('../compiler').configure(compilerOptions);
    } else {
        compilerOptions = {};
    }

    var extensions = [];

    if (options.extension) {
        extensions.push(options.extension);
    }

    if (options.extensions) {
        extensions = extensions.concat(options.extensions);
    }

    if (extensions.length === 0) {
        extensions.push('.marko');
    }

    function markoRequireExtension(module, filename) {
        var targetFile = filename + '.js';
        var cachedTemplate = getLoadedTemplate(targetFile) || getLoadedTemplate(filename);
        if (cachedTemplate) {
            // The template has already been loaded so use the exports of the already loaded template
            module.exports = cachedTemplate;
            return;
        }

        // Resolve the appropriate compiler relative to the location of the
        // marko template file on disk using the "resolve-from" module.
        var dirname = path.dirname(filename);
        var markoCompilerModulePath = resolveFrom(dirname, 'marko/compiler');
        var markoCompiler = require(markoCompilerModulePath);

        // Now use the appropriate Marko compiler to compile the Marko template
        // file to JavaScript source code:
        var compiledSrc = compile(filename, markoCompiler, compilerOptions);

        // Append ".js" to the filename since that is where we write the compiled
        // source code that is being loaded. This allows stack traces to match up.
        module._compile(compiledSrc, targetFile);
    }

    requireExtensions[MARKO_EXTENSIONS] = requireExtensions[MARKO_EXTENSIONS] ||
        (requireExtensions[MARKO_EXTENSIONS] = []);

    extensions.forEach((extension) => {
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
