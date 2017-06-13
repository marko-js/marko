'use strict';

var Compiler = require('./Compiler');
var Walker = require('./Walker');
var Parser = require('./Parser');
var HtmlJsParser = require('./HtmlJsParser');
var Builder = require('./Builder');
var extend = require('raptor-util/extend');
var CompileContext = require('./CompileContext');
var globalConfig = require('./config');
var CompileContext = require('./CompileContext');
var InlineCompiler = require('./InlineCompiler');
var ok = require('assert').ok;
var fs = require('fs');
var taglibLoader = require('./taglib-loader');

var defaults = extend({}, globalConfig);

Object.defineProperty(exports, 'defaultOptions', {
    get: function() { return globalConfig;  },
    enumerable: true,
    configurable: false
});

Object.defineProperty(exports, 'config', {
    get: function() { return globalConfig;  },
    enumerable: true,
    configurable: false
});

var defaultParser = new Parser(new HtmlJsParser());
var rawParser = new Parser(
    new HtmlJsParser({
        ignorePlaceholders: true
    }),
    {
        raw: true
    });

function configure(newConfig) {
    if (!newConfig) {
        newConfig = {};
    }

    extend(globalConfig, defaults);
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

function shouldIgnoreUnrecognizedTags(path) {
    return path.endsWith('.xml') || path.endsWith('.xml.marko');
}

function _compile(src, filename, userOptions, callback) {
    registerCoreTaglibs();

    ok(filename, '"filename" argument is required');
    ok(typeof filename === 'string', '"filename" argument should be a string');

    var options = {};

    extend(options, globalConfig);

    if (userOptions) {
        extend(options, userOptions);
    }

    var compiler = defaultCompiler;

    if (shouldIgnoreUnrecognizedTags(filename)) {
        options.ignoreUnrecognizedTags = true;
    }

    var context = new CompileContext(src, filename, compiler.builder, options);

    if (callback) {
        let compiled;

        try {
            compiled = compiler.compile(src, context);
        } catch(e) {
            return callback(e);
        }

        callback(null, userOptions.sourceOnly ? compiled.code : compiled);
    } else {
        let compiled = compiler.compile(src, context);
        return userOptions.sourceOnly ? compiled.code : compiled;
    }
}

function compile(src, filename, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    options = options || {};
    options.sourceOnly = options.sourceOnly !== false;

    return _compile(src, filename, options, callback);
}

function compileForBrowser(src, filename, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    options = extend({
        output: 'vdom',
        meta: false,
        browser: true,
        sourceOnly: false
    }, options);

    return compile(src, filename, options, callback);
}

function compileFile(filename, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    options = options || {};
    options.sourceOnly = options.sourceOnly !== false;

    if (callback) {
        fs.readFile(filename, {encoding: 'utf8'}, function(err, templateSrc) {
            if (err) {
                return callback(err);
            }

            _compile(templateSrc, filename, options, callback);
        });
    } else {
        let templateSrc = fs.readFileSync(filename, {encoding: 'utf8'});
        return _compile(templateSrc, filename, options, callback);
    }
}

function compileFileForBrowser(filename, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = null;
    }

    options = extend({output: 'vdom', meta: false, browser: true, sourceOnly: false}, options);
    return compileFile(filename, options, callback);
}


function createInlineCompiler(filename, userOptions) {
    registerCoreTaglibs();

    var options = {};

    extend(options, globalConfig);

    if (userOptions) {
        extend(options, userOptions);
    }

    var compiler = defaultCompiler;
    var context = new CompileContext('', filename, compiler.builder, options);
    return new InlineCompiler(context, compiler);
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

function clearCaches() {
    exports.taglibLookup.clearCache();
    exports.taglibFinder.clearCache();
    exports.taglibLoader.clearCache();
}

function parseRaw(templateSrc, filename) {
    registerCoreTaglibs();
    var context = new CompileContext(templateSrc, filename, Builder.DEFAULT_BUILDER);
    var parsed = rawParser.parse(templateSrc, context);

    if (context.hasErrors()) {
        var errors = context.getErrors();

        var message = 'An error occurred while trying to compile template at path "' + filename + '". Error(s) in template:\n';
        for (var i = 0, len = errors.length; i < len; i++) {
            let error = errors[i];
            message += (i + 1) + ') ' + error.toString() + '\n';
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
exports.createInlineCompiler = createInlineCompiler;

exports.checkUpToDate = checkUpToDate;
exports.getLastModified = getLastModified;
exports.createWalker = createWalker;
exports.builder = Builder.DEFAULT_BUILDER;
exports.configure = configure;
exports.clearCaches = clearCaches;

var taglibLookup = require('./taglib-lookup');
exports.taglibLookup = taglibLookup;
exports.taglibLoader = taglibLoader;
exports.taglibFinder = require('./taglib-finder');

function registerTaglib(taglibProps, taglibPath) {
    var taglib = taglibLoader.createTaglib(taglibPath);
    taglibLoader.loadTaglibFromProps(taglib, taglibProps);
    taglibLookup.registerTaglib(taglib);
}

var coreTaglibsRegistered = false;

function registerCoreTaglibs() {
    if (!coreTaglibsRegistered) {
        coreTaglibsRegistered = true;
        registerTaglib(require('../taglibs/core/marko.json'), require.resolve('../taglibs/core/marko.json'));
        registerTaglib(require('../taglibs/layout/marko.json'), require.resolve('../taglibs/layout/marko.json'));
        registerTaglib(require('../taglibs/html/marko.json'), require.resolve('../taglibs/html/marko.json'));
        registerTaglib(require('../taglibs/svg/marko.json'), require.resolve('../taglibs/svg/marko.json'));
        registerTaglib(require('../taglibs/async/marko.json'), require.resolve('../taglibs/async/marko.json'));
        registerTaglib(require('../taglibs/cache/marko.json'), require.resolve('../taglibs/cache/marko.json'));
        registerTaglib(require('../components/taglib/marko.json'), require.resolve('../components/taglib/marko.json'));
    }

}

function buildTaglibLookup(dirname) {
    registerCoreTaglibs();
    return taglibLookup.buildLookup(dirname);
}

exports.buildTaglibLookup = buildTaglibLookup;

exports.registerTaglib = function(filePath) {
    registerCoreTaglibs();

    ok(typeof filePath === 'string', '"filePath" shouldbe a string');
    var taglib = taglibLoader.loadTaglibFromFile(filePath);
    taglibLookup.registerTaglib(taglib);
    clearCaches();
};

exports.isVDOMSupported = true;
exports.modules = require('./modules');
