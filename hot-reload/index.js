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
        if (k === 'c') {
            return;
        }

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
        template.__hotReloadModifiedFlag = modifiedFlag;
        template.__hotReloadPath = templatePath;

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
            delete require.cache[path];
            delete require.cache[path + '.js'];
        }

        runtime.cache = {};
        compiler.clearCaches();
        modifiedFlag++;
    }

};