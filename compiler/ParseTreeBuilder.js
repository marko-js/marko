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

var TextNode = require('./TextNode');
var ElementNode = require('./ElementNode');
var CommentNode = require('./CommentNode');
var charProps = require('char-props');
var path = require('path');

var ieConditionalCommentRegExp = /^\[if [^]*?<!\[endif\]$/;
// IE conditional comment format: <!--[if expression]> HTML <![endif]-->;

function isIEConditionalComment(comment) {
    return ieConditionalCommentRegExp.test(comment);
}

function getRelativePath(absolutePath) {
    if (typeof window === 'undefined') {
        absolutePath = path.resolve(process.cwd(), absolutePath);
        return path.relative(process.cwd(), absolutePath);
    } else {
        return absolutePath;
    }
}

function Pos(filePath, line, column) {
    this.filePath = getRelativePath(filePath);
    this.line = line;
    this.column = column;
}

Pos.prototype = {
    toString: function() {
        return this.filePath + ":" + this.line + ":" + this.column;
    }
};

function ParseTreeBuilder(taglibs) {
    this.taglibs = taglibs;

    this.rootNode = null;
    this.prevTextNode = null;
    this.parentNode = null;
    this.src = null;
    this.filePath = null;
    this.charProps = null;

    this.nsStack = [];
    this.compilerOptions = undefined;
}

var COMPILER_ATTRIBUTE_HANDLERS = {
    whitespace: function(attr, compilerOptions) {
        if (attr.value === 'preserve') {
            compilerOptions.preserveWhitespace = true;
        }
    },
    comments: function(attr, compilerOptions) {
        if (attr.value === 'preserve') {
            compilerOptions.preserveComments = true;
        }
    }
};

ParseTreeBuilder.prototype = {
    createPos: function(line, column) {
        if (arguments.length === 1) {
            var index = arguments[0];
            if (!this.charProps) {
                this.charProps = charProps(this.src);
            }
            line = this.charProps.lineAt(index)+1;
            column = this.charProps.columnAt(index);
        }

        return new Pos(this.filePath, line, column);
    },
    parse: function(src, filePath) {
        this.src = src;
        this.filePath = filePath;

        this.doParse(src, filePath);

        var rootNode = this.rootNode;

        // Cleanup
        this.src = null;
        this.filePath = null;
        this.charProps = null;
        this.rootNode = null;
        this.prevTextNode = null;
        this.parentNode = null;
        this.nsStack = [];

        // Put the compiler options into the rootNode so that
        // TemplateCompiler has access to these
        rootNode.compilerOptions = this.compilerOptions;

        return rootNode;
    },

    handleCharacters: function(t) {
        if (!this.parentNode) {
            return;    //Some bad XML parsers allow text after the ending element...
        }

        if (this.prevTextNode) {
            this.prevTextNode.text += t;
        } else {
            this.prevTextNode = new TextNode(t);
            this.prevTextNode.pos = this.getPos();
            this.parentNode.appendChild(this.prevTextNode);
        }
    },

    handleStartElement: function(el, attributes) {
        var self = this;

        if (el.localName === 'compiler-options') {
            attributes.forEach(function (attr) {
                var attrLocalName = attr.localName;
                var attrPrefix = attr.prefix;
                var handler;
                if (attrPrefix || ((handler = COMPILER_ATTRIBUTE_HANDLERS[attrLocalName]) === undefined)) {
                    var attrName = attrPrefix;
                    attrName = (attrName) ? attrName + ':' + attrLocalName : attrLocalName;
                    throw new Error('Invalid Marko compiler option: ' + attrName + ', Allowed: ' + Object.keys(COMPILER_ATTRIBUTE_HANDLERS));
                }

                handler(attr, self.compilerOptions || (self.compilerOptions = {}));
            }, this);
            return;
        }

        this.prevTextNode = null;

        var namespaceMappings = this.nsStack.length ? Object.create(this.nsStack[this.nsStack.length-1]) : {};
        this.nsStack.push(namespaceMappings);

        attributes.forEach(function (attr) {
            if (attr.prefix === 'xmlns') {
                var nsPrefix = attr.localName;
                var targetNS = attr.value;
                namespaceMappings[nsPrefix] = targetNS;
            }
        }, this);

        function getNS(node) {
            if (node.namespace) {
                return node.namespace;
            } else if (node.prefix) {
                if (node.prefix === 'xml') {
                    return 'http://www.w3.org/XML/1998/namespace';
                }
                return namespaceMappings[node.prefix] || node.prefix;
            }
            else {
                return '';
            }
        }

        var elNS = getNS(el);

        var elementNode = new ElementNode(
            el.localName,
            elNS,
            el.prefix);

        elementNode.pos = this.getPos();

        if (this.parentNode) {
            this.parentNode.appendChild(elementNode);
        } else {

            elementNode.setRoot(true);

            if (!elNS && el.localName === 'template') {
                elementNode.localName = 'c-template';
            }

            this.rootNode = elementNode;
        }

        attributes.forEach(function (attr) {
            var attrNS = getNS(attr);
            var attrLocalName = attr.localName;
            var attrPrefix = attr.prefix;
            elementNode.setAttributeNS(attrNS, attrLocalName, attr.value, attrPrefix);
        }, this);

        this.parentNode = elementNode;
    },

    handleEndElement: function(elementName) {
        if (elementName === 'compiler-options') {
            return;
        }

        this.prevTextNode = null;
        this.parentNode = this.parentNode.parentNode;
        this.nsStack.pop();
    },

    handleComment: function(comment) {
        var compilerOptions = this.compilerOptions;
        var preserveComment = (compilerOptions && compilerOptions.preserveComments === true) ||
            isIEConditionalComment(comment);

        if (preserveComment) {
            var commentNode = new CommentNode(comment);
            this.parentNode.appendChild(commentNode);
        }
    },

    getRootNode: function () {
        return this.rootNode;
    }
};

module.exports = ParseTreeBuilder;
