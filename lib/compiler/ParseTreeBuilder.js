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

define.Class(
    'raptor/templating/compiler/ParseTreeBuilder',
    ['raptor'],
    function(raptor, require, exports, module) {
        "use strict";
        
        var logger = module.logger(),
            sax = require('raptor/xml/sax'),
            forEach = raptor.forEach,
            TextNode = require('raptor/templating/compiler/TextNode'),
            ElementNode = require('raptor/templating/compiler/ElementNode');
            
          
        var ParseTreeBuilder = function() {
        };
        
        ParseTreeBuilder.parse = function(src, filePath, taglibs) {
            var builder = new ParseTreeBuilder();
            return builder.parse(src, filePath, taglibs);
        };
        
        ParseTreeBuilder.prototype = {
            /**
             * @param src {String} The XML source code to parse
             * @param src {String} The file path (for debugging and error reporting purposes)
             * @param taglibs {raptor/templating/compiler/TaglibCollection} The taglib collection. Required for resolving taglib URIs when short names are used. 
             */
            parse: function(src, filePath, taglibs) {
                var logger = logger,
                    parentNode = null,
                    rootNode = null,
                    prevTextNode = null,
                    imports,
                    parser = sax.createParser({
                        trim: false,
                        normalize: false,
                        dom: src.documentElement != null
                    }),
                    characters = function(t, isCDATA) {
                        if (!parentNode) {
                            return; //Some bad XML parsers allow text after the ending element...
                        }
                        if (prevTextNode) {
                            prevTextNode.text += t;
                        }
                        else {
                            prevTextNode = new TextNode(t);
                            prevTextNode.pos = parser.getPos();
                            parentNode.appendChild(prevTextNode);
                        }
                    };

                parser.on({
                    error: function(e) {
                        throw raptor.createError(e);
                    },
                    
                    characters: function(t) {
                        characters(t, false);
                    },
                    
                    cdata: function(t) {
                        characters(t, true);
                    },
                    
                    startElement: function(el) {
                        prevTextNode = null;
                        var importsAttr,
                            importedAttr,
                            importedTag;
                        
                        var elementNode = new ElementNode(
                                el.getLocalName(),
                                taglibs.resolveURI(el.getNamespaceURI()),
                                el.getPrefix());
                        
                        
                        elementNode.addNamespaceMappings(el.getNamespaceMappings());
                        
                        elementNode.pos = parser.getPos();
                        
                        forEach(el.getAttributes(), function(attr) {
                            if (attr.getLocalName() === 'imports' && !attr.getNamespaceURI()) {
                                importsAttr = attr.getValue();
                            }
                        }, this);
                        
                        
                        
                        if (parentNode) {
                            
                            parentNode.appendChild(elementNode);
                        }
                        else {
                            rootNode = elementNode;
                            if (importsAttr) {
                                imports = taglibs.getImports(importsAttr);
                            }
                        }
                        
                        forEach(el.getAttributes(), function(attr) {
                            var attrURI = taglibs.resolveURI(attr.getNamespaceURI()),
                                attrLocalName = attr.getLocalName(),
                                attrPrefix = attr.getPrefix();
                            
                            
                            if (!attrURI && imports && (importedAttr = imports.getImportedAttribute(attrLocalName))) {     
                                attrURI = importedAttr.uri;
                                attrLocalName = importedAttr.name;
                                attrPrefix = importedAttr.prefix;
                            }
                            
                            elementNode.setAttributeNS(
                                    attrURI, 
                                    attrLocalName, 
                                    attr.getValue(), 
                                    attrPrefix);
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
            
            getRootNode: function() {
                return this.rootNode;
            }
        };
        
        return ParseTreeBuilder;
    });