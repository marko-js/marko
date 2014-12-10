require('raptor-polyfill/string/endsWith');

var extend = require('raptor-util/extend');
var compiler = require('../compiler');
var nodePath = require('path');
var runtime = require('../runtime');
var Template = runtime.Template;

var modifiedFlag = 1;

exports.enable = function() {


    if (runtime.__browserRefresh) {
        // Marko has already been monkey-patched. Nothing to do!
        return;
    }

    runtime.__browserRefresh = true;

    // Patch the Template prototype to proxy all render methods...

    Object.keys(Template.prototype).forEach(function(k) {
        var v = Template.prototype[k];

        if (typeof v === 'function') {
            var oldMethod = v;
            Template.prototype[k] = function() {
                var path = this.__brPath;

                if (this.__brModifiedFlag !== modifiedFlag) {
                    // Reload the template
                    var template = runtime.load(path);
                    extend(this, template);
                }

                oldMethod.apply(this, arguments);
            };
        }
    });


    var oldLoad = runtime.load;

    runtime.load = function browserRefreshLoad(path) {
        if (!path) {
            throw new Error('Invalid path');
        }
        var template = oldLoad.apply(runtime, arguments);

        // Store the current last modified with the template
        template.__brModifiedFlag = modifiedFlag;
        template.__brPath = path;

        return template;
    };
};

exports.handleFileModified = function(path) {

    var basename = nodePath.basename(path);

    if (path.endsWith('.marko') ||
        path.endsWith('.marko.xml') ||
        basename === 'marko-tag.json' ||
        basename === 'marko-taglib.json') {

        console.log('[marko/hot-reload] File modified: ' + path);

        if (path.endsWith('.marko')) {
            delete require.cache[path + '.js'];
        }

        runtime.cache = {};
        compiler.clearCaches();
        modifiedFlag++;
    }

};