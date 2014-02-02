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
var ParseTreeBuilder = require('./ParseTreeBuilder');
var Expression = require('./Expression');
var TypeConverter = require('./TypeConverter');
var taglibLookup = require('./taglib-lookup');
var nodePath = require('path');

function TemplateCompiler(path, options) {
    this.dirname = nodePath.dirname(path);
    this.path = path;
    this.taglibs = taglibLookup.buildLookup(this.dirname);
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
                        transformer.getInstance().process(node, _this, templateBuilder);    //Have the transformer process the node (NOTE: Just because a node is being processed by the transformer doesn't mean that it has to modify the parse tree)
                    }
                });
            } catch (e) {
                throw createError(new Error('Unable to compile template at path "' + templateBuilder.filePath + '. Error: ' + e.message), e);
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
    compile: function (xmlSrc, callback, thisObj) {
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
            rootNode = ParseTreeBuilder.parse(xmlSrc, filePath, this.taglibs);
            //Build a parse tree from the input XML
            templateBuilder = new TemplateBuilder(this, filePath, rootNode);
            //The templateBuilder object is need to manage the compiled JavaScript output              
            this.transformTree(rootNode, templateBuilder);
        } catch (e) {
            throw createError(new Error('An error occurred while trying to compile template at path "' + filePath + '". Exception: ' + e), e);
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
            callback.call(thisObj, {
                source: output,
                templateName: templateBuilder.getTemplateName()
            });
        }
        
        var options = this.options;
        if (options && options.nameCallback) {
            options.nameCallback(templateBuilder.getTemplateName());
        }
        return output;
    },
    isExpression: function (expression) {
        return expression instanceof Expression;
    },
    createTagHandlerNode: function (ns, localName) {
        var TagHandlerNode = require('../taglibs/core/TagHandlerNode');
        var tag = this.taglibs.getTag(ns, localName);
        var tagHandlerNode = new TagHandlerNode(tag);
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
    getNodeClass: function (ns, localName) {
        var tag = this.taglibs.getTag(ns, localName);
        if (tag && tag.nodeClass) {
            return require(tag.nodeClass);
        }
        throw createError(new Error('Node class not found for namespace "' + ns + '" and localName "' + localName + '"'));
    },
    createTag: function () {
        var Taglib = require('./Taglib');
        return new Taglib.Tag();
    }
};
module.exports = TemplateCompiler;