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
var extend = require('raptor-util/extend');
var req = require; // Fool code inspectors used by client-side bundles
var nodePath = require('path');

var defaultOptions = {
        /**
         * Set of tag names that should automatically have whitespace preserved.
         * Alternatively, if value is `true` then whitespace will be preserved
         * for all tags.
         */
        preserveWhitespace: {
            'pre': true,
            'textarea': true,
            'script': true
        },
        /**
         * Set of tag names that should be allowed to be rendered as a self-closing
         * XML tag. A self-closing tag will only be rendered if the tag has no nested
         * content. HTML doesn't allow self-closing tags so you should likely
         * never use this.
         */
        allowSelfClosing: {},
        /**
         * Set of tag names that should be rendered with a start tag only.
         */
        startTagOnly: {
            'img': true,
            'br': true,
            'input': true,
            'meta': true,
            'link': true,
            'hr': true
        },
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

if (process.env.MARKO_CLEAN === '' || process.env.MARKO_CLEAN === 'true') {
    defaultOptions.checkUpToDate = false;
}

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
        var fs = req('fs');

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
    defaultOptions: defaultOptions,
    clearCaches: function() {
        exports.taglibs.clearCaches();
    }
});

exports.TemplateCompiler = require('./TemplateCompiler');
exports.taglibs = require('./taglibs');
exports.taglibs.excludeDir(nodePath.join(__dirname, '../'));

exports.taglibs.registerTaglib(require.resolve('../taglibs/core/marko-taglib.json'));
exports.taglibs.registerTaglib(require.resolve('../taglibs/html/marko-taglib.json'));
exports.taglibs.registerTaglib(require.resolve('../taglibs/caching/marko-taglib.json'));
exports.taglibs.registerTaglib(require.resolve('marko-layout/marko-taglib.json'));
exports.taglibs.registerTaglib(require.resolve('marko-async/marko-taglib.json'));
