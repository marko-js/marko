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
var charProps = require('char-props');



function Pos(filePath, line, column) {
    this.filePath = filePath;
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
}

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
            }
            else if (node.prefix) {
                if (node.prefix === 'xml') {
                    return 'http://www.w3.org/XML/1998/namespace';
                }
                return namespaceMappings[node.prefix] || node.prefix;
            }
            else {
                return '';
            }
        }

        var taglibs = this.taglibs;
        
        var elNS = getNS(el);
        elNS = taglibs.resolveNamespace(elNS) || elNS;

        el.localName = el.localName.toLowerCase();

        var elementNode = new ElementNode(
            el.localName,
            elNS,
            el.prefix);

        elementNode.pos = this.getPos();

        if (this.parentNode) {
            this.parentNode.appendChild(elementNode);
        } else {
            
            elementNode.setRoot(true);

            if (!el.namespace && el.localName === 'template') {
                elementNode.namespace = 'core';
            }

            this.rootNode = elementNode;
        }

        attributes.forEach(function (attr) {
            if (attr.prefix === 'xmlns') {
                return; // Skip xmlns attributes
            }
            var attrNS = getNS(attr);
            attrNS = taglibs.resolveNamespace(attrNS) || attrNS;

            var attrLocalName = attr.localName.toLowerCase();
            var attrPrefix = attr.prefix;
            elementNode.setAttributeNS(attrNS, attrLocalName, attr.value, attrPrefix);
        }, this);
        
        this.parentNode = elementNode;
    },

    handleEndElement: function() {
        this.prevTextNode = null;
        this.parentNode = this.parentNode.parentNode;
        this.nsStack.pop();
    },

    getRootNode: function () {
        return this.rootNode;
    }
};

module.exports = ParseTreeBuilder;