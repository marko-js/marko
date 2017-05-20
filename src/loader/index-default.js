'use strict';

var nodePath = require('path');
var fs = require('fs');
var Module = require('module').Module;
var compilerPath = nodePath.join(__dirname, '../compiler');
var markoCompiler = require(compilerPath);
var cwd = process.cwd();
var fsOptions = {encoding: 'utf8'};

module.exports = function load(templatePath, templateSrc, options) {
    if (typeof templatePath === 'string' && nodePath.extname(templatePath) === '.js') {
        // assume compiled template
        return require(templatePath);
    }

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

function loadSource(templatePath, compiledSrc) {
    templatePath += '.js';

    // Short-circuit loading if the template has already been cached in the Node.js require cache
    var cached = require.cache[templatePath];
    if (cached) {
        return cached.exports;
    }

    var templateModule = new Module(templatePath, module);
    templateModule.paths = Module._nodeModulePaths(nodePath.dirname(templatePath));
    templateModule.filename = templatePath;

    Module._cache[templatePath] = templateModule;

    templateModule._compile(
        compiledSrc,
        templatePath);

    return templateModule.exports;
}

function getCachedTemplate(path) {
    var cached = require.cache[path];
    return cached && cached.exports.render ? cached.exports : undefined;
}

/**
 * This helper function will check the Node.js require cache for the previous
 * loaded template and it will also check the disk for the compiled template
 * if `options.assumeUpToDate` is true

 * @param  {String} templatePath The fully resolved path to the template
 * @param  {Object} options      The options for the template
 * @return {Template}            The loaded template or undefined
 */
function getPreviousTemplate(templatePath, options) {
    /*
    The require.cache is search in the following order:
    1) /path/to/my-template.js
    2) /path/to/my-template.marko.js
    3) /path/to/my-template.marko
     *
    If the template is not found in require.cache and `assumeUpToDate` is true
    then we will check the disk for the precompiled templates in the following
    order:
    1) /path/to/my-template.js
    2) /path/to/my-template.marko.js
    */
    var ext = nodePath.extname(templatePath);
    var targetFilePrecompiled = templatePath.slice(0, 0 - ext.length) + '.js';
    var targetFileDebug = templatePath + '.js';

    // Short-circuit loading if the template has already been cached in the Node.js require cache
    var cachedTemplate =
        getCachedTemplate(targetFilePrecompiled) ||
        getCachedTemplate(targetFileDebug) ||
        getCachedTemplate(templatePath);

    if (cachedTemplate) {
        return cachedTemplate;
    }

    // Just in case the the path wasn't a fully resolved file system path...
    templatePath = nodePath.resolve(cwd, templatePath);

    if (options.assumeUpToDate) {
        if (fs.existsSync(targetFilePrecompiled)) {
            return require(targetFilePrecompiled);
        }

        if (fs.existsSync(targetFileDebug)) {
            return require(targetFileDebug);
        }
    }

    return undefined;
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
        templatePath = nodePath.resolve(cwd, templatePath);

        template = getPreviousTemplate(templatePath, options);
        if (!template) {
            var writeToDisk = options.writeToDisk;

            if (templateSrc == null) {
                templateSrc = fs.readFileSync(templatePath, fsOptions);
            }

            var compiledSrc = markoCompiler.compile(templateSrc, templatePath, options);

            if (writeToDisk === true) {
                var targetFile = templatePath + '.js';
                fs.writeFileSync(targetFile, compiledSrc, fsOptions);
            }

            template = loadSource(templatePath, compiledSrc);
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
