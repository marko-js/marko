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
var extend = require('raptor-util/extend');
var _Node = require('./Node');
var ElementNode = require('./ElementNode');
var TextNode = require('./TextNode');
var TagHandlerNode = require('../taglibs/core/TagHandlerNode');
var deresolve = require('./util/deresolve');
var upToDate = require('./up-to-date');

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
                throw createError(new Error('Unable to compile template at path "' + _this.path + '". Error: ' + e.message), e);
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
        var err;

        function returnError(err) {
            if (callback) {
                return callback.call(thisObj, err);
            } else {
                throw err;
            }
        }

        try {
            /*
             * First build the parse tree for the tempate
             */
            rootNode = parser.parse(src, filePath, this.taglibs);

            if (rootNode.compilerOptions) {
                // compiler options were set in the template so use those here
                this.options = extend(extend({}, this.options), rootNode.compilerOptions);
            }

            //Build a parse tree from the input XML
            templateBuilder = new TemplateBuilder(this, filePath, rootNode);
            //The templateBuilder object is need to manage the compiled JavaScript output
            this.transformTree(rootNode, templateBuilder);
        } catch (e) {
            err = createError(new Error('An error occurred while trying to compile template at path "' + filePath + '". Exception: ' + (e.stack || e)), e);
            return returnError(err);
        }

        try {
            /*
             * The tree has been transformed and we can now generate
             */
            rootNode.generateCode(templateBuilder);    //Generate the code and have all output be managed by the TemplateBuilder
        } catch (e) {
            err = createError(new Error('An error occurred while trying to compile template at path "' + filePath + '". Exception: ' + e), e);
            return returnError(err);
        }

        if (this.hasErrors()) {
            var message = 'An error occurred while trying to compile template at path "' + filePath + '". Error(s) in template:\n';
            var errors = _this.getErrors();
            for (var i = 0, len = errors.length; i < len; i++) {
                message += (i + 1) + ') ' + (errors[i].pos ? '[' + errors[i].pos + '] ' : '') + errors[i].message + '\n';
            }
            var error = new Error(message);
            error.errors = _this.getErrors();
            return returnError(error);
        } else {
            var output = templateBuilder.getOutput();
            if (callback) {
                callback.call(thisObj, null, output);
            }
            return output;
        }
    },
    isExpression: function (expression) {
        return expression instanceof Expression;
    },
    hasExpression: function(str) {
        return expressionParser.hasExpression(str);
    },
    makeExpression: function (expression, replaceSpecialOperators) {
        if (this.isExpression(expression)) {
            return expression;
        } else {
            return new Expression(expression, replaceSpecialOperators);
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
        tagHandlerNode.localName = tagName;
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
    /**
     * Returns the constructor for an AST node based
     * on the tag name.
     */
    getNodeClass: function (tagName) {
        ok(arguments.length === 1, 'Invalid args');

        var tag = this.taglibs.getTag(tagName);
        if (tag && tag.nodeClass) {
            var nodeClass = require(tag.nodeClass);
            nodeClass.prototype.constructor = nodeClass;
            return nodeClass;
        } else {
            return ElementNode;
        }
        throw createError(new Error('Node class not found for tag "' + tagName + '"'));
    },

    /**
     * There are three types of nodes that can be added to an AST: Node, ElementNode and TextNode
     * Nodes that produce an HTML tag should extend ElementNode.
     * Nodes that produce text should extend TextNode
     * For everything else, a node should inherit from the base Node class
     */
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

    /**
     * Create a new AST node that can be added to the AST tree
     *
     * The first argument can either be a tag name or a construtor
     * function.
     */
    createNode: function(Ctor, arg) {
        if (typeof Ctor === 'string') {
            var tagName = Ctor;
            Ctor = this.getNodeClass(tagName);

            if (Ctor === ElementNode) {
                return new ElementNode(
                    tagName,
                    '',
                    '');
            }
        }

        ok(Ctor != null, 'Ctor is required');
        ok(typeof Ctor === 'function', 'Ctor should be a function');

        this.inheritNode(Ctor);

        return new Ctor(arg);
    },

    /**
     * Helper method to create a new Text node that can be added to the AST.
     * The Text node will generate code that renders static HTML
     */
    createTextNode: function(text, escapeXml) {
        return new TextNode(text, escapeXml);
    },

    /**
     * Returns the max last modified date of a template and all of its taglibs
     */
    getLastModified: function() {
        return upToDate.getLastModified(this.path, this.taglibs);
    },

    checkUpToDate: function(targetFile) {
        if (this.options.checkUpToDate === false) {
            return false;
        }

        return upToDate.checkUpToDate(targetFile, this.path, this.taglibs);

    },
    getRequirePath: function(targetModuleFile) {
        return deresolve(targetModuleFile, this.dirname);
    }
};
module.exports = TemplateCompiler;
