'use strict';

var Compiler = require('./Compiler');
var Walker = require('./Walker');
var Parser = require('./Parser');
var HtmlJsParser = require('./HtmlJsParser');
var Builder = require('./Builder');
var extend = require('raptor-util/extend');

var defaultParser = new Parser(new HtmlJsParser());

var defaultOptions = {
        /**
         * If true, then the compiler will check the disk to see if a previously compiled
         * template is the same age or newer than the source template. If so, the previously
         * compiled template will be loaded. Otherwise, the template will be recompiled
         * and saved to disk.
         *
         * If false, the template will always be recompiled. If `writeToDisk` is false
         * then this option will be ignored.
         */
        checkUpToDate: true,
        /**
         * If true (the default) then compiled templates will be written to disk. If false,
         * compiled templates will not be written to disk (i.e., no `.marko.js` file will
         * be generated)
         */
        writeToDisk: true
    };

function configure(config) {
    extend(defaultOptions, config);
}

var defaultCompiler = new Compiler({
    parser: defaultParser,
    builder: Builder.DEFAULT_BUILDER
});

var req = require;

function createBuilder(options) {
    return new Builder(options);
}

function createWalker(options) {
    return new Walker(options);
}

function compileFile(filename, options, callback) {
    var fs = req('fs');
    var compiler;

    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    if (options) {
        compiler = options.compiler;
    }

    if (!compiler) {
        compiler = defaultCompiler;
    }

    if (callback) {
        fs.readFile(filename, {encoding: 'utf8'}, function(err, templateSrc) {
            if (err) {
                return callback(err);
            }

            try {
                callback(null, compiler.compile(templateSrc, filename, options));
            } catch(e) {
                callback(e);
            }
        });
    } else {
        let templateSrc = fs.readFileSync(filename, {encoding: 'utf8'});
        return compiler.compile(templateSrc, filename, options);
    }
}

function compile(src, filename, options, callback) {
    var compiler;

    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    if (options) {
        compiler = options.compiler;
    }

    if (!compiler) {
        compiler = defaultCompiler;
    }

    if (callback) {
        try {
            callback(null, compiler.compile(src, filename, options));
        } catch(e) {
            callback(e);
        }
    } else {
        return compiler.compile(src, filename, options);
    }
}

function checkUpToDate(templateFile, templateJsFile) {
    return false; // TODO Implement checkUpToDate
}

function getLastModified(path, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    callback(null, -1); // TODO Implement getLastModified
}

exports.createBuilder = createBuilder;
exports.compileFile = compileFile;
exports.compile = compile;
exports.defaultOptions = defaultOptions;
exports.checkUpToDate = checkUpToDate;
exports.getLastModified = getLastModified;
exports.createWalker = createWalker;
exports.builder = Builder.DEFAULT_BUILDER;
exports.configure = configure;

var taglibLookup = require('./taglib-lookup');
exports.taglibLookup = taglibLookup;
exports.taglibLoader = require('./taglib-loader');

taglibLookup.registerTaglib(require.resolve('../taglibs/core/marko-taglib.json'));
taglibLookup.registerTaglib(require.resolve('../taglibs/layout/marko-taglib.json'));
taglibLookup.registerTaglib(require.resolve('../taglibs/html/marko-taglib.json'));
taglibLookup.registerTaglib(require.resolve('../taglibs/async/marko-taglib.json'));



/*
exports.Taglib = require('./Taglib');

exports.lookup = require('./taglib-lookup');
exports.buildLookup = exports.lookup.buildLookup;
exports.registerTaglib = exports.lookup.registerTaglib;
exports.excludeDir = exports.lookup.excludeDir;
exports.clearCaches = function() {
    exports.lookup.clearCaches();
    require('./taglib-finder').clearCaches();
};
*/