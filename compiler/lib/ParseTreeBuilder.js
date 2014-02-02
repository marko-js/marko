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
var sax = require('raptor-xml/sax');
var TextNode = require('./TextNode');
var ElementNode = require('./ElementNode');
var Imports = require('./Imports');

function ParseTreeBuilder() {
}
ParseTreeBuilder.parse = function (src, filePath, taglibs) {
    var builder = new ParseTreeBuilder();
    return builder.parse(src, filePath, taglibs);
};
ParseTreeBuilder.prototype = {
    parse: function (src, filePath, taglibs) {
        var logger = logger;
        var parentNode = null;
        var rootNode = null;
        var prevTextNode = null;
        var imports;
        var parser = sax.createParser({
                trim: false,
                normalize: false,
                dom: src.documentElement != null
            });
        function characters(t, isCDATA) {
            if (!parentNode) {
                return;    //Some bad XML parsers allow text after the ending element...
            }

            if (prevTextNode) {
                prevTextNode.text += t;
            } else {
                prevTextNode = new TextNode(t);
                prevTextNode.pos = parser.getPos();
                parentNode.appendChild(prevTextNode);
            }
        }
        parser.on({
            error: function (e) {
                throw createError(e);
            },
            characters: function (t) {
                characters(t, false);
            },
            cdata: function (t) {
                characters(t, true);
            },
            startElement: function (el) {
                prevTextNode = null;
                var importsAttr;
                var importedAttr;
                var importedTag;
                var elementNode = new ElementNode(el.getLocalName(), el.getNamespaceURI(), el.getPrefix());
                elementNode.addNamespaceMappings(el.getNamespaceMappings());
                elementNode.pos = parser.getPos();

                el.getAttributes().forEach(function (attr) {
                    if (attr.getLocalName() === 'imports' && !attr.getNamespaceURI()) {
                        importsAttr = attr.getValue();
                    }
                }, this);

                if (parentNode) {
                    parentNode.appendChild(elementNode);
                } else {
                    rootNode = elementNode;
                    if (importsAttr) {
                        imports = new Imports(taglibs, importsAttr);
                    }
                }

                el.getAttributes().forEach(function (attr) {
                    var attrURI = attr.getNamespaceURI();
                    var attrLocalName = attr.getLocalName();
                    var attrPrefix = attr.getPrefix();
                    if (!attrURI && imports && (importedAttr = imports.getImportedAttribute(attrLocalName))) {
                        attrURI = importedAttr.uri;
                        attrLocalName = importedAttr.name;
                        attrPrefix = importedAttr.prefix;
                    }
                    elementNode.setAttributeNS(attrURI, attrLocalName, attr.getValue(), attrPrefix);
                }, this);
                if (!elementNode.uri && imports && (importedTag = imports.getImportedTag(elementNode.localName))) {
                    elementNode.uri = importedTag.uri;
                    elementNode.localName = importedTag.name;
                    elementNode.prefix = importedTag.prefix;
                }
                parentNode = elementNode;
            },
            endElement: function () {
                prevTextNode = null;
                parentNode = parentNode.parentNode;
            }
        }, this);
        parser.parse(src, filePath);
        rootNode.setRoot(true);
        return rootNode;
    },
    getRootNode: function () {
        return this.rootNode;
    }
};
module.exports = ParseTreeBuilder;