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
var createError = require('raptor-util').createError;
var TemplateBuilder = require('./TemplateBuilder');
var parser = require('./parser');
var Expression = require('./Expression');
var TypeConverter = require('./TypeConverter');
var taglibs = require('./taglibs');
var nodePath = require('path');
var ok = require('assert').ok;
var attributeParser = require('./attribute-parser');
var expressionParser = require('./expression-parser');
var inherit = require('raptor-util/inherit');
var _Node = require('./Node');
var ElementNode = require('./ElementNode');
var TextNode = require('./TextNode');
var TagHandlerNode = require('../taglibs/core/TagHandlerNode');

function TemplateCompiler(path, options) {
    this.dirname = nodePath.dirname(path);
    this.path = path;
    this.taglibs = taglibs.buildLookup(this.dirname);
    this.options = options || {};
    this.errors = [];
}

TemplateCompiler.prototype = {
    isTaglib: function(ns) {
        return this.taglibs.isTaglib(ns);
    },

    transformTree: function (rootNode, templateBuilder) {
        if (!templateBuilder) {
            throw createError(new Error('The templateBuilder argument is required'));
        }

        var _this = this;

        function transformTreeHelper(node) {
            try {
                _this.taglibs.forEachNodeTransformer(node, function (transformer) {
                    
                    if (!node.isTransformerApplied(transformer)) {
                        //Check to make sure a transformer of a certain type is only applied once to a node
                        node.setTransformerApplied(transformer);
                        //Mark the node as have been transformed by the current transformer
                        _this._transformerApplied = true;
                        //Set the flag to indicate that a node was transformed
                        node.compiler = _this;
                        var transformerFunc = transformer.getFunc();
                        transformerFunc.call(transformer, node, _this, templateBuilder);    //Have the transformer process the node (NOTE: Just because a node is being processed by the transformer doesn't mean that it has to modify the parse tree)
                    }
                });
            } catch (e) {
                throw createError(new Error('Unable to compile template at path "' + templateBuilder.filePath + '". Error: ' + e.message), e);
            }
            /*
             * Now process the child nodes by looping over the child nodes
             * and transforming the subtree recursively 
             * 
             * NOTE: The length of the childNodes array might change as the tree is being performed.
             *       The checks to prevent transformers from being applied multiple times makes
             *       sure that this is not a problem.
             */
            node.forEachChild(function (childNode) {
                if (!childNode.parentNode) {
                    return;    //The child node might have been removed from the tree
                }
                transformTreeHelper(childNode);
            });
        }
        /*
         * The tree is continuously transformed until we go through an entire pass where 
         * there were no new nodes that needed to be transformed. This loop makes sure that
         * nodes added by transformers are also transformed.
         */
        do {
            this._transformerApplied = false;
            //Reset the flag to indicate that no transforms were yet applied to any of the nodes for this pass
            transformTreeHelper(rootNode);    //Run the transforms on the tree                 
        } while (this._transformerApplied);
    },
    compile: function (src, callback, thisObj) {
        var _this = this;
        var filePath = this.path;
        var rootNode;
        var templateBuilder;
        function handleErrors() {
            var message = 'Errors in template:\n';
            var errors = _this.getErrors();
            for (var i = 0, len = errors.length; i < len; i++) {
                message += i + 1 + ') ' + (errors[i].pos ? '[' + errors[i].pos + '] ' : '') + errors[i].message + '\n';
            }
            var error = new Error(message);
            error.errors = _this.getErrors();
            throw error;
        }

        try {
            /*
             * First build the parse tree for the tempate
             */
            rootNode = parser.parse(src, filePath, this.taglibs);
            //Build a parse tree from the input XML
            templateBuilder = new TemplateBuilder(this, filePath, rootNode);
            //The templateBuilder object is need to manage the compiled JavaScript output              
            this.transformTree(rootNode, templateBuilder);
        } catch (e) {
            throw createError(new Error('An error occurred while trying to compile template at path "' + filePath + '". Exception: ' + (e.stack || e)), e);
        }
        
        try {
            /*
             * The tree has been transformed and we can now generate
             */
            rootNode.generateCode(templateBuilder);    //Generate the code and have all output be managed by the TemplateBuilder
        } catch (e) {
            throw createError(new Error('An error occurred while trying to compile template at path "' + filePath + '". Exception: ' + e), e);
        }
        if (this.hasErrors()) {
            handleErrors();
        }
        var output = templateBuilder.getOutput();
        //Get the compiled output from the template builder
        //console.error('COMPILED TEMPLATE (' + filePath + ')\n', '\n' + output, '\n------------------');

        if (callback) {
            callback.call(thisObj, output);
        }
        
        return output;
    },
    isExpression: function (expression) {
        return expression instanceof Expression;
    },
    makeExpression: function (expression) {
        if (this.isExpression(expression)) {
            return expression;
        } else {
            return new Expression(expression);
        }
    },
    parseExpression: function(str, listeners, options) {
        return expressionParser.parse(str, listeners, options);
    },
    parseAttribute: function(attr, types, options) {
        return attributeParser.parse(attr, types, options);
    },
    createTagHandlerNode: function (tagName) {
        var tag = this.taglibs.getTag(tagName);
        var tagHandlerNode = this.createNode(TagHandlerNode, tag);
        return tagHandlerNode;
    },
    convertType: function (value, type, allowExpressions) {
        return TypeConverter.convert(value, type, allowExpressions);
    },
    addError: function (message, pos) {
        this.errors.push({
            message: message,
            pos: pos
        });
    },
    hasErrors: function () {
        return this.errors.length !== 0;
    },
    getErrors: function () {
        return this.errors;
    },
    getNodeClass: function (tagName) {
        ok(arguments.length === 1, 'Invalid args');

        var tag = this.taglibs.getTag(tagName);
        if (tag && tag.nodeClass) {
            var nodeClass = require(tag.nodeClass);
            nodeClass.prototype.constructor = nodeClass;
            return nodeClass;
        }
        throw createError(new Error('Node class not found for tag "' + tagName + '"'));
    },
    createTag: function () {
        var Taglib = require('./Taglib');
        return new Taglib.Tag();
    },

    inheritNode: function(Ctor) {
        if (!Ctor.prototype.__NODE) {
            var nodeType = Ctor.nodeType || 'node';
            nodeType = nodeType.toLowerCase();

            if (nodeType === 'element') {
                inherit(Ctor, ElementNode);
            } else if (nodeType === 'node') {
                inherit(Ctor, _Node);
            } else {
                throw new Error('Invalid node type: ' + nodeType);
            }
        }
    },

    createNode: function(Ctor, arg) {
        ok(Ctor != null, 'Ctor is required');
        ok(typeof Ctor === 'function', 'Ctor should be a function');

        this.inheritNode(Ctor);

        return new Ctor(arg);
    },

    createTextNode: function(text, escapeXml) {
        return new TextNode(text, escapeXml);
    },

    checkUpToDate: function(sourceFile, targetFile) {
        if (this.options.checkUpToDate === false) {
            return false;
        }
        
        var fs = require('fs');

        
        var statTarget;

        try {
            statTarget = fs.statSync(targetFile);
        } catch(e) {
            return false;
        }

        var statSource = fs.statSync(sourceFile);

        if (statSource.mtime.getTime() > statTarget.mtime.getTime()) {
            return false;
        }

        // Now check if any of the taglib files have been modified after the target file was generated
        
        var taglibFiles = this.taglibs.getInputFiles();
        var len = taglibFiles.length;
        for (var i=0; i<len; i++) {
            var taglibFileStat;
            var taglibFile = taglibFiles[i];

            try {
                taglibFileStat = fs.statSync(taglibFile);
            } catch(e) {
                continue;
            }

            if (taglibFileStat.mtime.getTime() > statTarget.mtime.getTime()) {
                return false;
            }
        }

        return true;

    }
};
module.exports = TemplateCompiler;