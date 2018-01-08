require('raptor-polyfill/string/endsWith');

const nodePath = require('path');
const fs = require('fs');
const nodeRequire = require('./node-require');

var compiler;
var marko;
var runtime;
var components;

var modifiedId = 1;
var HOT_RELOAD_KEY = Symbol('HOT_RELOAD');

function cleaResolvePathCache() {
    var modulePathCache = require('module').Module._pathCache;
    if (!modulePathCache) {
        console.log('[marko/hot-reload] WARNING: Missing: require("module").Module._pathCache [' + __filename + ']');
        return;
    }

    var keys = Object.keys(modulePathCache);
    keys.forEach(function(key) {
        delete modulePathCache[key];
    });
}

function tryReloadTemplate(path) {
    path = path.replace(/\.js$/, '');

    try {
        return marko.load(path);
    } catch(e) {
        return undefined;
    }
}

exports.enable = function(options) {
    if (runtime.__hotReloadEnabled) {
        // Marko has already been monkey-patched. Nothing to do!
        return;
    }

    options = options || {};
    var silent = options.silent || false;

    runtime.__hotReloadEnabled = true;

    // We set an environment variable so that _all_ marko modules
    // installed in the project will have hot reload enabled.
    process.env.MARKO_HOT_RELOAD = 'true';

    function createHotReloadProxy(func, template, methodName) {
        var hotReloadData = template[HOT_RELOAD_KEY];
        if (!hotReloadData) {
            hotReloadData = template[HOT_RELOAD_KEY] = {
                modifiedId: modifiedId,
                latest: template,
                originals: {}
            };
        }

        hotReloadData.originals[methodName] = func;

        var templatePath = template.path;

        function hotReloadProxy() {
            if (hotReloadData.modifiedId !== modifiedId) {
                hotReloadData.modifiedId = modifiedId;
                hotReloadData.latest = tryReloadTemplate(templatePath) || template;

                if (hotReloadData.latest !== template) {
                    template.meta = hotReloadData.latest.meta;
                    if (!silent) { console.log('[marko/hot-reload] Template successfully reloaded: ' + templatePath); }
                }
            }

            var latest = hotReloadData.latest;
            var originals = latest[HOT_RELOAD_KEY] && latest[HOT_RELOAD_KEY].originals;
            if (!originals) {
                originals = latest;
            }

            var targetFunc = originals._;
            return targetFunc.apply(latest, arguments);
        }

        return hotReloadProxy;
    }

    var oldCreateTemplate = runtime.t;

    runtime.t = function hotReloadCreateTemplate(path) {
        var originalTemplate = oldCreateTemplate.apply(runtime, arguments);
        var actualRenderFunc;

        Object.defineProperty(originalTemplate, '_', {
            get: function() {
                return actualRenderFunc;
            },

            set: function(renderFunc) {
                actualRenderFunc = createHotReloadProxy(renderFunc, originalTemplate, '_');
            }
        });

        return originalTemplate;
    };
};

/**
 * Checks whether a path ends with a custom Marko extension
 */
function _endsWithMarkoExtension(path, requireExtensions) {
    for (var i = 0; i < requireExtensions.length; i++) {
        if (path.endsWith(requireExtensions[i])) {
            return true;
        }
    }
    return false;
}

function normalizeExtension(extension) {
    if (extension.charAt(0) !== '.') {
        extension = '.' + extension;
    }
    return extension;
}

exports.handleFileModified = function(path, options) {
    if (!fs.existsSync(path)) {
        console.log('[marko/hot-reload] WARNING cannot resolve template path: ', path);
        return;
    }

    options = options || {};
    var silent = options.silent || false;

    // Default hot-reloaded extensions
    var requireExtensions = ['.marko', '.marko.html', '.marko.xml'];

    if (options.extension) {
        requireExtensions.push(options.extension);
    }

    if (options.extensions) {
        requireExtensions = requireExtensions.concat(options.extensions);
    }

    var nodeRequireExtensions = nodeRequire.getExtensions();
    if (nodeRequireExtensions) {
        requireExtensions = requireExtensions.concat(nodeRequireExtensions);
    }

    for (var i = 0; i < requireExtensions.length; i++) {
        requireExtensions[i] = normalizeExtension(requireExtensions[i]);
    }

    var basename = nodePath.basename(path);

    function handleFileModified() {
        if (!silent) { console.log('[marko/hot-reload] File modified: ' + path); }
        runtime.cache = {};
        compiler.clearCaches();
        cleaResolvePathCache();
        modifiedId++;
    }

    if (basename === 'marko-tag.json' || basename === 'marko.json') {
        handleFileModified();
        // If we taglib was modified then uncache *all* templates so that they will
        // all be reloaded
        Object.keys(require.cache).forEach((filename) => {
            if (filename.endsWith('.marko') || filename.endsWith('.marko.js')) {
                delete require.cache[filename];
            }
        });
    } else if (_endsWithMarkoExtension(path, requireExtensions)) {
        handleFileModified();
        delete require.cache[path];
        delete require.cache[path + '.js'];
    } else if (basename === 'component.js') {
        handleFileModified();
        var dir = nodePath.dirname(path);
        var templatePath = nodePath.join(dir, 'index.marko');
        delete require.cache[path];
        delete require.cache[templatePath];
        delete require.cache[templatePath + '.js'];
    }
};

compiler = require('./compiler');
marko = require('./');
runtime = require('./runtime/html');
components = require('./components');
