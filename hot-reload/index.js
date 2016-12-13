require('raptor-polyfill/string/endsWith');

const nodePath = require('path');
const fs = require('fs');

var compiler;
var marko;
var runtime;
var widgets;

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

exports.enable = function() {
    if (runtime.__hotReloadEnabled) {
        // Marko has already been monkey-patched. Nothing to do!
        return;
    }

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
                    console.log('[marko/hot-reload] Template successfully reloaded: ' + templatePath);
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

exports.handleFileModified = function(path) {
    if (!fs.existsSync(path)) {
        console.log('[marko/hot-reload] WARNING cannot resolve template path: ', path);
        return;
    }

    var basename = nodePath.basename(path);

    function handleFileModified() {
        console.log('[marko/hot-reload] File modified: ' + path);
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
    } else if (path.endsWith('.marko') || path.endsWith('.marko.html') || path.endsWith('.marko.xml')) {
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

compiler = require('../compiler');
marko = require('../');
runtime = require('../runtime/html');
widgets = require('../widgets');