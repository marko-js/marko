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
var TaglibCollection = require('./TaglibCollection');
var taglibs = new TaglibCollection();
var extend = require('raptor-util').extend;
var ExpressionParser = require('./ExpressionParser');
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
module.exports = {
    createCompiler: function (options) {
        if (this.discoverTaglibs) {
            //Only discover taglibs if that method is implemented
            this.discoverTaglibs();    //The discoverTaglibs method is implemented on the server so execute it now
        }
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
        return new TemplateCompiler(taglibs, options);
    },
    compile: function (xmlSource, path, options) {
        return this.createCompiler(options).compile(xmlSource, path);
    },
    compileAndLoad: function (xmlSource, path, options) {
        this.createCompiler(options).compileAndLoad(xmlSource, path);
    },
    loadTaglibXml: function (taglibXml, path) {
        var TaglibXmlLoader = require('./TaglibXmlLoader');
        var taglib = TaglibXmlLoader.load(taglibXml, path);
        this.addTaglib(taglib);
        return taglib;
    },
    addTaglib: function (taglib) {
        taglibs.add(taglib);
    },
    addTaglibAlias: function (uri, alias) {
        taglibs.addAlias(uri, alias);
    },
    clearTaglibs: function () {
        this.taglibs = taglibs = new TaglibCollection();
    },
    hasTaglib: function (uri) {
        return taglibs.isTaglib(uri);
    },
    registerCustomExpressionHandler: function (name, func) {
        ExpressionParser.custom[name] = func;
    },
    recordLoadedTaglib: function (taglibResource) {
    },
    defaultOptions: defaultOptions,
    taglibs: taglibs
};