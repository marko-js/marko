/*
* Copyright 2011 eBay Software Foundation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

require('raptor-polyfill/string/endsWith');

var extend = require('raptor-util/extend');
var compiler = require('../compiler');
var nodePath = require('path');

var modifiedId = 1;
var nextTemplateId = 0;
var runtime;

/**
 * Lazily require the Marko runtime because there is a circular dependency.
 * We need to export our `enable` function before actually requiring the
 * Marko runtime.
 */
function _getMarkoRuntime() {
    return runtime || (runtime = require('../runtime'));
}

function tryReload(path, runtime) {
    try {
        return runtime.load(path);
    } catch(e) {
        return undefined;
    }
}

exports.enable = function() {
    var runtime = _getMarkoRuntime();

    if (runtime.__hotReloadEnabled) {
        // Marko has already been monkey-patched. Nothing to do!
        return;
    }

    var Template = runtime.Template;

    runtime.__hotReloadEnabled = true;

    // We set an environment variable so that _all_ marko modules
    // installed in the project will have hot reload enabled.
    process.env.MARKO_HOT_RELOAD = 'true';

    // Patch the Template prototype to proxy all render methods...

    Object.keys(Template.prototype).forEach(function(k) {
        if (k === 'c') {
            return;
        }

        var v = Template.prototype[k];

        if (typeof v === 'function') {
            var oldMethod = v;
            Template.prototype[k] = function() {
                if (this.__hotReloadModifiedId !== modifiedId) {
                    var path = this.__hotReloadPath;
                    if (path) {
                        // Reload the template
                        var template = tryReload(path, runtime);
                        if (template && template.__hotReloadTemplateId !== this.__hotReloadTemplateId) {
                            extend(this, template);
                        }
                    }
                    this.__hotReloadModifiedId = modifiedId;
                }

                return oldMethod.apply(this, arguments);
            };
        }
    });


    var oldCreateTemplate = runtime.c;

    runtime.c = function hotReloadCreateTemplate(path) {
        if (!path) {
            throw new Error('Invalid path');
        }

        var templatePath = path;

        if (typeof templatePath !== 'string') {
            templatePath = path.path;
        }

        if (typeof templatePath === 'string') {
            templatePath = templatePath.replace(/\.js$/, '');
        }

        var template = oldCreateTemplate.apply(runtime, arguments);

        // Store the current last modified with the template
        template.__hotReloadModifiedId = modifiedId;

        // Store the path of the loaded template so that we can reload it if
        // necessary
        template.__hotReloadPath = templatePath;

        // Assign a unique ID to the loaded template so that we can know if
        // a new version of the template is loaded
        template.__hotReloadTemplateId = nextTemplateId++;

        return template;
    };
};

exports.handleFileModified = function(path) {
    var runtime = _getMarkoRuntime();
    var basename = nodePath.basename(path);

    if (path.endsWith('.marko') ||
        path.endsWith('.marko.html') ||
        path.endsWith('.marko.xml') ||
        basename === 'marko-tag.json' ||
        basename === 'marko-taglib.json') {

        console.log('[marko/hot-reload] File modified: ' + path);

        if (path.endsWith('.marko') || path.endsWith('.marko.html')) {
            // Uncache just the modified template
            delete require.cache[path];
            delete require.cache[path + '.js'];
        } else {
            // If we taglib was modified then uncache *all* templates so that they will
            // all be reloaded
            Object.keys(require.cache).forEach(function(filename) {
                if (filename.endsWith('.marko') || filename.endsWith('.marko.js')) {
                    delete require.cache[filename];
                }
            });
        }

        runtime.cache = {};
        compiler.clearCaches();
        modifiedId++;
    }
};