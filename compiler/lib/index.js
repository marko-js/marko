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

var defaultOptions = {
        minify: false,
        preserveWhitespace: {
            'pre': true,
            'textarea': true
        },
        allowSelfClosing: {},
        startTagOnly: {
            'img': true,
            'br': true,
            'input': true,
            'meta': true,
            'link': true,
            'hr': true
        }
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

    compile: function (src, path, options) {
        return this.createCompiler(path, options).compile(src);
    },

    Node: require('./Node'),
    ElementNode: require('./ElementNode'),
    TextNode: require('./TextNode'),
    AttributeSplitter: require('./AttributeSplitter'),
    ExpressionParser: require('./ExpressionParser'),
    Expression: require('./Expression'),
    TypeConverter: require('./TypeConverter'),
    EscapeXmlContext: require('./EscapeXmlContext'),
    defaultOptions: defaultOptions
});
