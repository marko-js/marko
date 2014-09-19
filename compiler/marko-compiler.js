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
'use strict';
var extend = require('raptor-util').extend;
var fs = require('fs');
var nodePath = require('path');

var defaultOptions = {
        minify: false,
        preserveWhitespace: {
            'pre': true,
            'textarea': true,
            'script': true
        },
        allowSelfClosing: {},
        startTagOnly: {
            'img': true,
            'br': true,
            'input': true,
            'meta': true,
            'link': true,
            'hr': true
        },
        checkUpToDate: true
    };

extend(exports, {
    createCompiler: function (path, options) {
        var TemplateCompiler = require('./TemplateCompiler');
        //Get a reference to the TemplateCompiler class
        if (options) {
            /*
             * If options were provided then they should override the default options.
             * NOTE: Only top-level properties are overridden
             */
            options = extend(extend({}, defaultOptions), options);
        } else {
            options = defaultOptions;    //Otherwise, no options were provided so use the default options
        }

        return new TemplateCompiler(path, options);
    },

    compile: function (src, path, options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = undefined;
        }

        return this.createCompiler(path, options).compile(src, callback);
    },

    compileFile: function(path, options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = null;
        }

        var compiler = this.createCompiler(path, options);

        fs.readFile(path, {encoding: 'utf8'}, function(err, src) {
            if (err) {
                return callback(err);
            }

            try {
                callback(null, compiler.compile(src));
            } catch(e) {
                callback(e);
            }
        });
    },

    getLastModified: function(path, options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = null;
        }

        var compiler = this.createCompiler(path, options);
        callback(null, compiler.getLastModified());
    },

    Node: require('./Node'),
    ElementNode: require('./ElementNode'),
    TextNode: require('./TextNode'),
    expressionParser: require('./expression-parser'),
    Expression: require('./Expression'),
    TypeConverter: require('./TypeConverter'),
    EscapeXmlContext: require('./EscapeXmlContext'),
    defaultOptions: defaultOptions
});

exports.TemplateCompiler = require('./TemplateCompiler');
exports.taglibs = require('./taglibs');
exports.taglibs.excludeDir(nodePath.join(__dirname, '../'));

exports.taglibs.registerTaglib(require.resolve('../taglibs/core/marko-taglib.json'));
exports.taglibs.registerTaglib(require.resolve('../taglibs/html/marko-taglib.json'));
exports.taglibs.registerTaglib(require.resolve('../taglibs/caching/marko-taglib.json'));
exports.taglibs.registerTaglib(require.resolve('marko-taglib-layout/marko-taglib.json'));
exports.taglibs.registerTaglib(require.resolve('marko-taglib-async/marko-taglib.json'));
