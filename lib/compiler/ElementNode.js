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
    'raptor/templating/compiler/ElementNode',
    'raptor/templating/compiler/Node',
    ['raptor'],
    function(raptor, require) {
        "use strict";
        
        var forEachEntry = raptor.forEachEntry,
            forEach = raptor.forEach,
            objects = require('raptor/objects'),
            escapeXmlAttr = require('raptor/xml/utils').escapeXmlAttr,
            XML_URI = 'http://www.w3.org/XML/1998/namespace',
            XML_URI_ALT = 'http://www.w3.org/XML/1998/namespace',
            ExpressionParser = require('raptor/templating/compiler/ExpressionParser');
        
        var ElementNode = function(localName, uri, prefix) {
            ElementNode.superclass.constructor.call(this, 'element');
            
            if (!this._elementNode) {
                this._elementNode = true;

                this.dynamicAttributesExpression = null;
                this.attributesByNS = {};
                
                this.prefix = prefix;
                this.localName = this.tagName = localName;
                this.uri = uri;  
                
                this.allowSelfClosing = false;
                this.startTagOnly = false;
            }
            
        };
        
        ElementNode.prototype = {
                
            getQName: function() {
                return this.localName ? (this.prefix ? this.prefix + ":" : "") + this.localName : null;
            },
            
            /**
             * 
             * @param startTagOnly
             */
            setStartTagOnly: function(startTagOnly) {
                this.startTagOnly = true;
            },
            
            /**
             * 
             * @param allowSelfClosing
             */
            setAllowSelfClosing: function(allowSelfClosing) {
                this.allowSelfClosing = allowSelfClosing;
            },
            
            /**
             * 
             * @returns {Boolean}
             */
            isElementNode: function() {
                return true;
            },
            
            /**
             * 
             * @returns {Boolean}
             */
            isTextNode: function() {
                return false;
            },
            
            getAllAttributes: function() {
                var allAttrs = [];
                forEachEntry(this.attributesByNS, function(uri, attrs) {
                    forEachEntry(attrs, function(name, attr) {
                        allAttrs.push(attr);
                    });
                }, this);
                
                return allAttrs;
            },
            
            forEachAttributeAnyNS: function(callback, thisObj) {
                forEachEntry(this.attributesByNS, function(uri, attrs) {
                    forEachEntry(attrs, function(name, attr) {
                        callback.call(thisObj, attr);
                    });
                });
            },

            forEachAttributeNS: function(uri, callback, thisObj) {
                var attrs = this.attributesByNS[uri || ''];
                if (attrs) {
                    forEachEntry(attrs, function(name, attr) {
                        callback.call(thisObj, attr);
                    });
                }
            },
            
            /**
             * 
             * @returns {Array}
             */
            getAttributes: function() {
                var attributes = [];
                forEachEntry(this.attributes, function(name, attr) {
                    attributes.push(attr);
                }, this);
                return attributes;
            },
            
            /**
             * 
             * @param name
             * @returns
             */
            getAttribute: function(name) {
                return this.getAttributeNS(null, name);
            },
            
            /**
             * 
             * @param uri
             * @param localName
             * @returns
             */
            getAttributeNS: function(uri, localName) {
                var attrNS = this.attributesByNS[uri || ''];
                var attr = attrNS ? attrNS[localName] : undefined;
                return attr ? attr.value : undefined;
            },
            
            /**
             * 
             * @param localName
             * @param value
             */
            setAttribute: function(localName, value, escapeXml) {
                this.setAttributeNS(null, localName, value, null, escapeXml);
            },
            
            /**
             * 
             * @param uri
             * @param localName
             * @param value
             * @param prefix
             */
            setAttributeNS: function(uri, localName, value, prefix, escapeXml) {
                
                var attrNS = this.attributesByNS[uri || ''] || (this.attributesByNS[uri || ''] = {});
                
                attrNS[localName] = {
                    localName: localName,
                    value: value,
                    prefix: prefix,
                    uri: uri,
                    escapeXml: escapeXml,
                    qName: prefix ? (prefix + ":" + localName) : localName,
                    name: uri ? (uri + ":" + localName) : localName,
                    toString: function() {
                        return this.name;
                    }
                };
            },
            
            /**
             * 
             * @param name
             */
            setEmptyAttribute: function(name) {
                this.setAttribute(name, null);
            },
            
            /**
             * 
             * @param localName
             */
            removeAttribute: function(localName) {
                this.removeAttributeNS(null, localName);
            },
            
            /**
             * 
             * @param uri
             * @param localName
             */
            removeAttributeNS: function(uri, localName) {
                var attrNS = this.attributesByNS[uri || ''] || (this.attributesByNS[uri || ''] = {});
                if (attrNS) {
                    delete attrNS[localName];
                    if (objects.isEmpty(attrNS)) {
                        delete this.attributesByNS[uri || ''];
                    }
                }
            },

            removeAttributesNS: function(uri) {
                delete this.attributesByNS[uri || ''];
            },
            
            /**
             * 
             * @returns {Boolean}
             */
            isPreserveWhitespace: function() {
                var preserveSpace = ElementNode.superclass.isPreserveWhitespace.call(this);
                
                if (preserveSpace === true) {
                    return true;
                }
                
                var preserveAttr = this.getAttributeNS(XML_URI, "space") || this.getAttributeNS(XML_URI_ALT, "space") || this.getAttribute("xml:space") === "preserve";
                if (preserveAttr === 'preserve') {
                    return true;
                }
                
                
                return preserveSpace; 
            },
            
            hasAttributesAnyNS: function() {
                return !objects.isEmpty(this.attributesByNS);
            },
            
            hasAttributes: function() {
                return this.hasAttributesNS('');
            },
            
            hasAttributesNS: function(uri) {
                return this.attributesByNS[uri || ''] !== undefined;
            },
            
            hasAttribute: function(localName) {
                return this.hasAttributeNS('', localName);
            },
            
            hasAttributeNS: function(uri, localName) {
                var attrsNS = this.attributesByNS[uri || ''];
                return attrsNS ? attrsNS.hasOwnProperty(localName) : false;
            },
            
            removePreserveSpaceAttr: function() {
                this.removeAttributeNS(XML_URI, "space");
                this.removeAttributeNS(XML_URI_ALT, "space");
                this.removeAttribute("space");
            },
            
            setStripExpression: function(stripExpression) {
                this.stripExpression = stripExpression;
            },
            
            /**
             * 
             * @param template
             */
            doGenerateCode: function(template) {
                this.generateBeforeCode(template);
                this.generateCodeForChildren(template);
                this.generateAfterCode(template);
            },
            
            generateBeforeCode: function(template) {
                var preserveWhitespace = this.preserveWhitespace = this.isPreserveWhitespace();
                
                var name = this.prefix ? (this.prefix + ":" + this.localName) : this.localName;
                
                if (preserveWhitespace) {
                    this.removePreserveSpaceAttr();
                }
                
                template.text("<" + name);
                
                this.forEachAttributeAnyNS(function(attr) {
                    var prefix = attr.prefix;
                    if (!prefix && attr.uri) {
                        prefix = this.resolveNamespacePrefix(attr.uri);
                    }
                    
                    if (prefix) {
                        name = prefix + (attr.localName ? (":" + attr.localName) : "");
                    }
                    else {
                        name = attr.localName;
                    }
                    
                    if (attr.value === null || attr.value === undefined) {
                        template.text(' ' + name);
                    }
                    else if (template.isExpression(attr.value)) {
                        
                        template.attr(name, attr.value, attr.escapeXml !== false);
                    }
                    else {
                        
                        var attrParts = [],
                            hasExpression = false,
                            invalidAttr = false;
                        
                        ExpressionParser.parse(
                                attr.value,
                                {
                                    text: function(text, escapeXml) {
                                        attrParts.push({
                                            text: text,
                                            escapeXml: escapeXml !== false
                                        });
                                    },
                                    expression: function(expression, escapeXml) {
                                        hasExpression = true;
                                        
                                        attrParts.push({
                                            expression: expression,
                                            escapeXml: escapeXml !== false
                                        });
                                    },
                                    error: function(message) {
                                        invalidAttr = true;
                                        this.addError('Invalid expression found in attribute "' + name + '". ' + message);
                                    }
                                },
                                this);
                        if (invalidAttr) {
                            template.text(name + '="' + escapeXmlAttr(attr.value) + '"');    
                        }
                        else {
                            if (hasExpression && attrParts.length === 1) {
                                template.attr(name, attrParts[0].expression, attrParts[0].escapeXml !== false);
                            }
                            else {
                                template.text(' ' + name + '="');
                                forEach(attrParts, function(part) {
                                   if (part.text) {
                                       template.text(part.escapeXml !== false ? escapeXmlAttr(part.text) : part.text);
                                   } 
                                   else if (part.expression) {
                                       template.write(part.expression, {escapeXmlAttr: part.escapeXml !== false});
                                   }
                                   else {
                                       throw raptor.createError(new Error("Illegal state"));
                                   }
                                });
                                template.text('"');
                            }
                        }
                        
                        
                    }
                }, this);
                
                
                if (this.dynamicAttributesExpression) {
                    template.attrs(this.dynamicAttributesExpression);
                }
                
                if (this.hasChildren()) {
                    template.text(">");
                }
                else {
                    if (this.startTagOnly) {
                        template.text(">");
                    }
                    else if (this.allowSelfClosing) {
                        template.text("/>");
                    }
                }
            },
            
            generateAfterCode: function(template) {
                var name = this.prefix ? (this.prefix + ":" + this.localName) : this.localName;
                
                if (this.hasChildren()) {
                    template.text("</" + name + ">");
                }
                else {
                    if (!this.startTagOnly && !this.allowSelfClosing) {
                        template.text("></" + name + ">");
                    }
                }
            },
            
            toString: function() {
                return "<" + (this.prefix ? (this.prefix + ":" + this.localName) : this.localName) + ">";
            }
        
        };
        
        return ElementNode;
    });