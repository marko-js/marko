require('raptor-polyfill/string/endsWith');

var extend = require('raptor-util/extend');
var compiler = require('../compiler');
var nodePath = require('path');
var runtime = require('../runtime');
var Template = runtime.Template;

var modifiedFlag = 1;

exports.enable = function() {


    if (runtime.__hotReloadEnabled) {
        // Marko has already been monkey-patched. Nothing to do!
        return;
    }

    runtime.__hotReloadEnabled = true;

    // We set an environment variable so that _all_ marko modules
    // installed in the project will have hot reload enabled.
    process.env.MARKO_HOT_RELOAD = 'true';

    // Patch the Template prototype to proxy all render methods...

    Object.keys(Template.prototype).forEach(function(k) {
        var v = Template.prototype[k];

        if (typeof v === 'function') {
            var oldMethod = v;
            Template.prototype[k] = function() {
                if (this.__hotReloadModifiedFlag !== modifiedFlag) {
                    var path = this.__hotReloadPath;
                    if (path) {
                        // Reload the template
                        var template = runtime.load(path);
                        extend(this, template);
                    }
                }

                return oldMethod.apply(this, arguments);
            };
        }
    });


    var oldLoad = runtime.load;

    runtime.load = function hotReloadLoad(path) {
        if (!path) {
            throw new Error('Invalid path');
        }
        var template = oldLoad.apply(runtime, arguments);

        // Store the current last modified with the template
        template.__hotReloadModifiedFlag = modifiedFlag;
        template.__hotReloadPath = path;

        return template;
    };
};

exports.handleFileModified = function(path) {

    var basename = nodePath.basename(path);

    if (path.endsWith('.marko') ||
        path.endsWith('.marko.html') ||
        path.endsWith('.marko.xml') ||
        basename === 'marko-tag.json' ||
        basename === 'marko-taglib.json') {

        console.log('[marko/hot-reload] File modified: ' + path);

        if (path.endsWith('.marko') || path.endsWith('.marko.html')) {
            delete require.cache[path + '.js'];
        }

        runtime.cache = {};
        compiler.clearCaches();
        modifiedFlag++;
    }

};