require('raptor-polyfill/string/endsWith');

const nodePath = require('path');
const fs = require('fs');

var compiler;
var marko;
var runtime;
var widgets;

var modifiedId = 1;
var HOT_RELOAD_KEY = Symbol('HOT_RELOAD');


function tryReloadTemplate(path) {
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

    var oldCreateTemplate = runtime.c;

    function patchMethods(obj, methodNames, reloadFunc) {
        var hotReloadData = obj[HOT_RELOAD_KEY] || (obj[HOT_RELOAD_KEY] = {});
        hotReloadData._modifiedId = modifiedId;
        hotReloadData._latest = obj;

        methodNames.forEach(function(methodName) {
            hotReloadData[methodName] = obj[methodName];

            obj[methodName] = function hotReloadWrapper() {
                if (hotReloadData.modifiedId !== modifiedId) {
                    hotReloadData.modifiedId = modifiedId;
                    hotReloadData._latest = reloadFunc() || obj;
                }

                var latest = hotReloadData._latest;
                return latest[HOT_RELOAD_KEY][methodName].apply(latest, arguments);
            };
        });
    }

    runtime.c = function hotReloadCreateTemplate(path) {
        var originalTemplate = oldCreateTemplate.apply(runtime, arguments);
        path = path.replace(/\.js$/, '');

        var actualRenderFunc;

        var firstSet = true;

        Object.defineProperty(originalTemplate, '_', {
            configurable: true,

            get: function() {
                return actualRenderFunc;
            },

            set: function(renderFunc) {
                actualRenderFunc = renderFunc;
                if (firstSet) {
                    firstSet = false;
                    patchMethods(originalTemplate, ['_'], function reloadTemplate() {
                        var latestTemplate = tryReloadTemplate(path);
                        if (latestTemplate) {
                            if (latestTemplate !== originalTemplate) {
                                console.log('[marko/hot-reload] Reloaded template: ' + path);
                                originalTemplate.meta = latestTemplate.meta;
                            }

                            if (latestTemplate.template) {
                                // The template might export a component that has a template property.
                                return latestTemplate.template;
                            } else {
                                return latestTemplate;
                            }
                        }
                    });
                }
            }
        });

        return originalTemplate;
    };

    var oldCreateComponent = widgets.c;

    widgets.c = function hotReloadCreateComponent(componentDef, template) {
        var path = template.path;
        path = path.replace(/\.js$/, '');

        var originalComponent = oldCreateComponent.apply(runtime, arguments);

        patchMethods(originalComponent, ['renderer', 'render', 'renderSync'], function reloadTemplate() {
            var latestComponent = tryReloadTemplate(path);
            if (latestComponent) {
                if (latestComponent !== originalComponent) {
                    console.log('[marko/hot-reload] Reloaded template: ' + path);
                }
                return latestComponent;
            }

        });

        return originalComponent;
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