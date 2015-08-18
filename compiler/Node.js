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
var forEachEntry = require('raptor-util').forEachEntry;
var extend = require('raptor-util').extend;
var isArray = Array.isArray;
var EscapeXmlContext = require('./EscapeXmlContext');

function Node(nodeType) {
    if (!this.nodeType) {
        this._isRoot = false;
        this.preserveWhitespace = null;
        this.wordWrapEnabled = null;
        this.escapeXmlBodyText = null;
        this.escapeXmlContext = null;
        this.nodeType = nodeType;
        this.parentNode = null;
        this.previousSibling = null;
        this.nextSibling = null;
        this.firstChild = null;
        this.lastChild = null;
        this.namespaceMappings = {};
        this.prefixMappings = {};
        this.transformersApplied = {};
        this.properties = {};
        this.beforeCode = [];
        this.afterCode = [];
        this.data = {}; // Property for associating arbitrary data with a node
        this.flags = null;
    }
}

Node.isNode = function(node) {
    return node.__NODE === true;
};

Node.prototype = {
    /**
     * Marks this node with an arbitrary flag
     * @param  {String} flag The flag name
     */
    setFlag: function(flag) {
        if (!this.flags) {
            this.flags = {};
        }
        this.flags[flag] = true;
    },

    /**
     * Checks if this node has been marked with an arbitrary flag
     * @param  {String} flag The flag name
     * @return {Boolean} True, if marked. False, otherwise.
     */
    hasFlag: function(flag) {
        return this.flags ? this.flags.hasOwnProperty(flag) : false;
    },
    /**
     * Marks this node as being the root node of the tmeplate
     * @param {Boolean} isRoot
     */
    setRoot: function (isRoot) {
        this._isRoot = isRoot;
    },
    /**
     * Gets the position information associated with this node.
     *
     * The returned position object has the following properties:
     * - filePath
     * - line;
     * - column;
     */
    getPosition: function () {
        var pos = this.pos || this.getProperty('pos') || {
                toString: function () {
                    return '(unknown position)';
                }
            };
        return pos;
    },
    /**
     * Stores position information with this node.
     */
    setPosition: function (pos) {
        this.pos = pos;
    },
    /**
     * Associates a compile-time error with this node that will be reported by the comiler.
     */
    addError: function (error) {
        var compiler = this.compiler;
        var curNode = this;
        while (curNode != null && !compiler) {
            compiler = curNode.compiler;
            if (compiler) {
                break;
            }
            curNode = curNode.parentNode;
        }
        if (!compiler) {
            throw createError(new Error('Template compiler not set for node ' + this));
        }
        var pos = this.getPosition();
        compiler.addError(error + ' (' + this.toString() + ')', pos);
    },
    resolveNamespace: function(namespace) {
        return namespace || '';
    },
    setProperty: function (name, value) {
        this.properties[name] = value;
    },
    setProperties: function (props) {
        if (!props) {
            return;
        }
        extend(this.properties, props);
    },
    getProperties: function () {
        return this.properties;
    },
    hasProperty: function (name) {
        return this.properties.hasOwnProperty(name);
    },
    forEachProperty: function (callback, thisObj) {
        forEachEntry(this.properties, callback, this);
    },
    getProperty: function (name) {
        return this.properties[name];
    },
    removeProperty: function (name) {
        delete this.properties[name];
    },
    /**
     * Loops over the child nodes of this node
     * @param  {Function} callback A callback function
     * @param  {Boolean}  thisObj  The "this" for the callback function
     */
    forEachChild: function (callback, thisObj) {
        if (!this.firstChild) {
            return;
        }
        var children = [];
        var curChild = this.firstChild;
        while (curChild) {
            children.push(curChild);
            curChild = curChild.nextSibling;
        }
        for (var i = 0, len = children.length; i < len; i++) {
            curChild = children[i];
            if (curChild.parentNode === this) {
                //Make sure the node is still a child of this node
                if (false === callback.call(thisObj, curChild)) {
                    return;
                }
            }
        }
    },
    getExpression: function (template, childrenOnly, escapeXml, asFunction) {
        if (!template) {
            throw createError(new Error('template argument is required'));
        }
        var _this = this;

        var methodCall;

        if (escapeXml !== false) {
            methodCall = 'out.captureString(';
        } else {
            methodCall = '__helpers.c(out, ';
        }

        return template.makeExpression({
            toString: function () {
                return template.captureCode(function () {
                    if (asFunction) {
                        template.code('function() {\n').code(template.indentStr(2) + 'return ' + methodCall + 'function() {\n').indent(3, function () {
                            if (childrenOnly === true) {
                                _this.generateCodeForChildren(template);
                            } else {
                                _this.generateCode(template);
                            }
                        }).code(template.indentStr(2) + '});\n').code(template.indentStr() + '}');
                    } else {
                        template.code(methodCall + 'function() {\n').indent(function () {
                            if (childrenOnly === true) {
                                _this.generateCodeForChildren(template);
                            } else {
                                _this.generateCode(template);
                            }
                        }).code(template.indentStr() + '})');
                    }
                });
            }
        });
    },
    getBodyContentExpression: function (template, escapeXml) {
        return this.getExpression(template, true, escapeXml, false);
    },
    getBodyContentFunctionExpression: function (template, escapeXml) {
        return this.getExpression(template, true, escapeXml, true);
    },
    isTransformerApplied: function (transformer) {
        return this.transformersApplied[transformer.id] === true;
    },
    setTransformerApplied: function (transformer) {
        this.transformersApplied[transformer.id] = true;
    },
    hasChildren: function () {
        return this.firstChild != null;
    },
    appendChild: function (childNode) {
        if (childNode.parentNode) {
            childNode.parentNode.removeChild(childNode);
        }
        if (!this.firstChild) {
            this.firstChild = this.lastChild = childNode;
            childNode.nextSibling = null;
            childNode.previousSibling = null;
        } else {
            this.lastChild.nextSibling = childNode;
            childNode.previousSibling = this.lastChild;
            this.lastChild = childNode;
        }
        childNode.parentNode = this;
    },
    appendChildren: function (childNodes) {
        if (!childNodes) {
            return;
        }
        childNodes.forEach(function (childNode) {
            this.appendChild(childNode);
        }, this);
    },
    isRoot: function () {
        return this._isRoot === true;
    },
    detach: function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    },
    removeChild: function (childNode) {
        if (childNode.parentNode !== this) {
            //Check if the child node is a child of the parent
            return null;
        }
        var previousSibling = childNode.previousSibling;
        var nextSibling = childNode.nextSibling;
        if (this.firstChild === childNode && this.lastChild === childNode) {
            //The child node is the one and only child node being removed
            this.firstChild = this.lastChild = null;
        } else if (this.firstChild === childNode) {
            //The child node being removed is the first child and there is another child after it
            this.firstChild = this.firstChild.nextSibling;
            //Make the next child the first child
            this.firstChild.previousSibling = null;
        } else if (this.lastChild === childNode) {
            //The child node being removed is the last child and there is another child before it
            this.lastChild = this.lastChild.previousSibling;
            //Make the previous child the last child
            this.lastChild.nextSibling = null;
        } else {
            previousSibling.nextSibling = nextSibling;
            nextSibling.previousSibling = previousSibling;
        }
        //Make sure the removed node is completely detached
        childNode.parentNode = null;
        childNode.previousSibling = null;
        childNode.nextSibling = null;
        return childNode;
    },
    removeChildren: function () {
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
    },
    replaceChild: function (newChild, replacedChild) {
        if (newChild === replacedChild) {
            return false;
        }
        if (!replacedChild) {
            return false;
        }
        if (replacedChild.parentNode !== this) {
            return false;    //The parent does not have the replacedChild as a child... nothing to do
        }
        if (this.firstChild === replacedChild && this.lastChild === replacedChild) {
            this.firstChild = newChild;
            this.lastChild = newChild;
            newChild.previousSibling = null;
            newChild.nextSibling = null;
        } else if (this.firstChild === replacedChild) {
            newChild.nextSibling = replacedChild.nextSibling;
            replacedChild.nextSibling.previousSibling = newChild;
            this.firstChild = newChild;
        } else if (this.lastChild === replacedChild) {
            newChild.previousSibling = replacedChild.previousSibling;
            newChild.nextSibling = null;
            replacedChild.previousSibling.nextSibling = newChild;
            this.lastChild = newChild;
        } else {
            replacedChild.nextSibling.previousSibling = newChild;
            replacedChild.previousSibling.nextSibling = newChild;
            newChild.nextSibling = replacedChild.nextSibling;
            newChild.previousSibling = replacedChild.previousSibling;
        }
        newChild.parentNode = this;
        replacedChild.parentNode = null;
        replacedChild.previousSibling = null;
        replacedChild.nextSibling = null;
        return true;
    },
    insertAfter: function (node, referenceNode) {
        if (!node) {
            return false;
        }
        if (referenceNode && referenceNode.parentNode !== this) {
            return false;
        }
        if (isArray(node)) {
            node.forEach(function (node) {
                this.insertAfter(node, referenceNode);
                referenceNode = node;
            }, this);
            return true;
        }
        if (node === referenceNode) {
            return false;
        }
        if (referenceNode === this.lastChild) {
            this.appendChild(node);
            return true;
        }
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        if (!referenceNode || referenceNode === this.lastChild) {
            this.appendChild(node);
            return true;
        } else {
            referenceNode.nextSibling.previousSibling = node;
            node.nextSibling = referenceNode.nextSibling;
            node.previousSibling = referenceNode;
            referenceNode.nextSibling = node;
        }
        node.parentNode = this;
        return true;
    },
    insertBefore: function (node, referenceNode) {
        if (!node) {
            return false;
        }
        if (referenceNode && referenceNode.parentNode !== this) {
            return false;
        }
        if (isArray(node)) {
            var nodes = node;
            var i;
            for (i = nodes.length - 1; i >= 0; i--) {
                this.insertBefore(nodes[i], referenceNode);
                referenceNode = nodes[i];
            }
            return true;
        }
        if (node === referenceNode) {
            return false;
        }
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
        if (!referenceNode) {
            this.appendChild(node);
        } else if (this.firstChild === referenceNode) {
            this.firstChild = node;
            this.firstChild.nextSibling = referenceNode;
            this.firstChild.previousSibling = null;
            referenceNode.previousSibling = this.firstChild;
            node.parentNode = this;
        } else {
            this.insertAfter(node, referenceNode.previousSibling);
        }
        return true;
    },
    __NODE: true,
    isTextNode: function () {
        return false;
    },
    isElementNode: function () {
        return false;
    },
    setStripExpression: function (stripExpression) {
        this.stripExpression = stripExpression;
    },

    addBeforeCode: function (code) {
        this.beforeCode.push(code);
    },
    addAfterCode: function (code) {
        this.afterCode.push(code);
    },

    generateCode: function (template) {
        this.compiler = template.compiler;

        if (this.beforeCode.length) {
            this.beforeCode.forEach(function (code) {
                template.indent().code(code).code('\n');
            });
        }


        var preserveWhitespace = this.isPreserveWhitespace();
        if (preserveWhitespace == null) {
            preserveWhitespace = template.options.preserveWhitespace;
            if (preserveWhitespace === true || preserveWhitespace && preserveWhitespace['*']) {
                this.setPreserveWhitespace(true);
            } else {
                this.setPreserveWhitespace(false);
            }
        }
        var wordWrapEnabled = this.isWordWrapEnabled();
        if (wordWrapEnabled == null) {
            wordWrapEnabled = template.options.wordWrapEnabled;
            if (wordWrapEnabled !== false) {
                this.setWordWrapEnabled(true);
            }
        }
        if (this.isEscapeXmlBodyText() == null) {
            this.setEscapeXmlBodyText(true);
        }
        try {
            if (!this.stripExpression || this.stripExpression.toString() === 'false') {
                this.doGenerateCode(template);
            } else if (this.stripExpression.toString() === 'true') {
                this.generateCodeForChildren(template);
            } else {
                //There is a strip expression
                if (!this.generateBeforeCode || !this.generateAfterCode) {
                    this.addError('The c-strip directive is not supported for node ' + this);
                    this.generateCodeForChildren(template);
                    return;
                }
                var nextStripVarId = template.data.nextStripVarId || (template.data.nextStripVarId = 0);
                template.data.nextStripVarId++;

                var varName = '__strip' + nextStripVarId++;
                template.statement('var ' + varName + ' = !(' + this.stripExpression + ');');
                template.statement('if (' + varName + ') {').indent(function () {
                    this.generateBeforeCode(template);
                }, this).line('}');
                this.generateCodeForChildren(template);
                template.statement('if (' + varName + ') {').indent(function () {
                    this.generateAfterCode(template);
                }, this).line('}');
            }
        } catch (e) {
            throw createError(new Error('Unable to generate code for node ' + this + ' at position [' + this.getPosition() + ']. Exception: ' + e), e);
        }

        if (this.afterCode.length) {
            this.afterCode.forEach(function (code) {
                template.indent().code(code).code('\n');
            });
        }
    },
    isPreserveWhitespace: function () {
        return this.preserveWhitespace;
    },
    setPreserveWhitespace: function (preserve) {
        this.preserveWhitespace = preserve;
    },
    isWordWrapEnabled: function () {
        return this.wordWrapEnabled;
    },
    setWordWrapEnabled: function (enabled) {
        this.wordWrapEnabled = enabled;
    },
    doGenerateCode: function (template) {
        this.generateCodeForChildren(template);
    },
    generateCodeForChildren: function (template, indent) {
        if (!template) {
            throw createError(new Error('The "template" argument is required'));
        }
        if (indent === true) {
            template.incIndent();
        }
        this.forEachChild(function (childNode) {
            if (childNode.isPreserveWhitespace() == null) {
                childNode.setPreserveWhitespace(this.isPreserveWhitespace() === true);
            }
            if (childNode.isWordWrapEnabled() == null) {
                childNode.setWordWrapEnabled(this.isWordWrapEnabled() === true);
            }
            if (childNode.isEscapeXmlBodyText() == null) {
                childNode.setEscapeXmlBodyText(this.isEscapeXmlBodyText() !== false);
            }
            if (childNode.getEscapeXmlContext() == null) {
                childNode.setEscapeXmlContext(this.getEscapeXmlContext() || require('./EscapeXmlContext').ELEMENT);
            }
            childNode.generateCode(template);
        }, this);
        if (indent === true) {
            template.decIndent();
        }
    },
    addNamespaceMappings: function (namespaceMappings) {
        if (!namespaceMappings) {
            return;
        }
        var existingNamespaceMappings = this.namespaceMappings;
        var prefixMappings = this.prefixMappings;
        forEachEntry(namespaceMappings, function (prefix, namespace) {
            existingNamespaceMappings[prefix] = namespace;
            prefixMappings[namespace] = prefix;
        });
    },
    hasNamespacePrefix: function (namespace) {
        return this.prefixMappings.hasOwnProperty(namespace);
    },
    resolveNamespacePrefix: function (namespace) {
        var prefix = this.prefixMappings[namespace];
        return !prefix && this.parentNode ? this.parentNode.resolveNamespacePrefix() : prefix;
    },
    forEachNamespace: function (callback, thisObj) {
        forEachEntry(this.namespaceMappings, callback, thisObj);
    },
    getNodeClass: function () {
        return this.nodeClass || this.constructor;
    },
    setNodeClass: function (nodeClass) {
        this.nodeClass = nodeClass;
    },
    prettyPrintTree: function () {
        var out = [];
        function printNode(node, indent) {
            out.push(indent + node.toString() + '\n');
            node.forEachChild(function (child) {
                printNode(child, indent + '  ');
            });
        }
        printNode(this, '');
        return out.join('');
    },
    setEscapeXmlBodyText: function (escapeXmlBodyText) {
        this.escapeXmlBodyText = escapeXmlBodyText;
    },
    isEscapeXmlBodyText: function () {
        return this.escapeXmlBodyText;
    },
    setEscapeXmlContext: function (escapeXmlContext) {
        if (typeof escapeXmlContext === 'string') {
            escapeXmlContext = EscapeXmlContext[escapeXmlContext.toUpperCase()];
        }

        this.escapeXmlContext = escapeXmlContext;
    },
    getEscapeXmlContext: function () {
        return this.escapeXmlContext;
    }
};
module.exports = Node;
