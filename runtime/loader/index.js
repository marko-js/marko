'use strict';
module.exports = function load(templatePath, templateSrc, options) {
    if (arguments.length === 1) {
        return doLoad(templatePath);
    } else if (arguments.length === 2) {
        // see if second argument is templateSrc (a String)
        // or options (an Object)
        var lastArg = arguments[arguments.length - 1];
        if (typeof lastArg === 'string') {
            return doLoad(templatePath, templateSrc);
        } else {
            var finalOptions = templateSrc;
            return doLoad(templatePath, null, finalOptions);
        }
    } else if (arguments.length === 3) {
        // assume function called according to function signature
        return doLoad(templatePath, templateSrc, options);
    } else {
        throw new Error('Illegal arguments');
    }
};

var nodePath = require('path');
var fs = require('fs');
var Module = require('module').Module;
var markoCompiler = require('../../compiler');
var cwd = process.cwd();
var fsOptions = {encoding: 'utf8'};

if (process.env.hasOwnProperty('MARKO_HOT_RELOAD')) {
    require('../../hot-reload').enable();
}

// If process was launched with browser refresh then automatically
// enable browser-refresh
require('../../browser-refresh').enable();

function fixFlush() {
    try {
        var OutgoingMessage = require('http').OutgoingMessage;
        if (OutgoingMessage.prototype.flush && OutgoingMessage.prototype.flush.toString().indexOf('deprecated') !== -1) {
            // Yes, we are monkey-patching http. This method should never have been added and it was introduced on
            // the iojs fork. It was quickly deprecated and I'm 99% sure no one is actually using it.
            // See:
            // - https://github.com/marko-js/async-writer/issues/3
            // - https://github.com/nodejs/node/issues/2920
            //
            // This method causes problems since marko looks for the flush method and calls it found.
            // The `res.flush()` method is introduced by the [compression](https://www.npmjs.com/package/compression)
            // middleware, but, otherwise, it should typically not exist.
            delete require('http').OutgoingMessage.prototype.flush;
        }
    } catch(e) {}
}

fixFlush();

function loadSource(templatePath, compiledSrc) {
    var templateModulePath = templatePath + '.js';

    // Short-circuit loading if the template has already been cached in the Node.js require cache
    var cached = require.cache[templateModulePath];
    if (cached) {
        return cached.exports;
    }

    var templateModule = new Module(templateModulePath, module);
    templateModule.paths = Module._nodeModulePaths(nodePath.dirname(templateModulePath));
    templateModule.filename = templateModulePath;

    Module._cache[templateModulePath] = templateModule;

    templateModule._compile(
        compiledSrc,
        templateModulePath);

    return templateModule.exports;
}

function getLoadedTemplate(path) {
    var cached = require.cache[path];
    return cached && cached.exports.render ? cached.exports : undefined;
}

function loadFile(templatePath, options) {
    options = Object.assign({}, markoCompiler.defaultOptions, options);

    var targetFile = templatePath + '.js';

    // Short-circuit loading if the template has already been cached in the Node.js require cache
    var cachedTemplate = getLoadedTemplate(targetFile) || getLoadedTemplate(templatePath);
    if (cachedTemplate) {
        return cachedTemplate;
    }

    // Just in case the the path wasn't a fully resolved file system path...
    templatePath = nodePath.resolve(cwd, templatePath);
    targetFile = templatePath + '.js';

    // Check the require cache again after fully resolving the path
    cachedTemplate = getLoadedTemplate(targetFile) || getLoadedTemplate(templatePath);
    if (cachedTemplate) {
        return cachedTemplate;
    }

    // If the `assumeUpToDate` option is true then we just assume that the compiled template on disk is up-to-date
    // if it exists
    if (options.assumeUpToDate) {
        if (fs.existsSync(targetFile)) {
            return require(targetFile);
        }
    }

    var isUpToDate = markoCompiler.checkUpToDate(targetFile);

    if (isUpToDate) {
        return require(targetFile);
    }

	var compiledSrc = markoCompiler.compileFile(templatePath, options);

    // console.log('Compiled code for "' + templatePath + '":\n' + compiledSrc);

    var filename = nodePath.basename(targetFile);
    var targetDir = nodePath.dirname(targetFile);
    var tempFile = nodePath.join(targetDir, '.' + process.pid + '.' + Date.now() + '.' + filename);
    fs.writeFileSync(tempFile, compiledSrc, fsOptions);
    fs.renameSync(tempFile, targetFile);

    return require(targetFile);
}

function createRenderProxy(template) {
    return function(data, out) {
        template._(data, out);
    };
}

function doLoad(templatePath, templateSrc, options) {
    options = Object.assign({}, markoCompiler.defaultOptions, options);

    var template;
    if (typeof templatePath.render === 'function') {
        template = templatePath;
    } else {
        var writeToDisk = options.writeToDisk;


        // If the template source is provided then we can compile the string
        // in memory and there is no need to read template file from disk or
        // write compiled code to disk.
        //
        // If writeToDisk is false then there will be no up-to-date check
        // since compiled source won't be written to disk.
        if ((templateSrc != null) || (writeToDisk === false)) {
            // Don't write the compiled template to disk. Instead, load it
            // directly from the compiled source using the internals of the
            // Node.js module loading system.
            if (templateSrc == null) {
                templateSrc = fs.readFileSync(templatePath, fsOptions);
            }

        	var compiledSrc = markoCompiler.compile(templateSrc, templatePath, options);

            if (writeToDisk === true) {
                var targetFile = templatePath + '.js';
                fs.writeFileSync(targetFile, compiledSrc, fsOptions);
            }

            template = loadSource(templatePath, compiledSrc);
        } else {
            template = loadFile(templatePath, options);
        }
    }

    if (options.buffer === false) {
        var Template = template.constructor;

        template = new Template(
            template.path,
            createRenderProxy(template),
            options);
    }

    return template;
}

require('../stream');
require('../dependencies');