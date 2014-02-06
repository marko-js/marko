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
function removeDashes(str) {
    return str.replace(/-([a-z])/g, function (match, lower) {
        return lower.toUpperCase();
    });
}
var extend = require('raptor-util').extend;

var WriteNode = require('./WriteNode');
var ForNode = require('./ForNode');
var IfNode = require('./IfNode');
var ElseIfNode = require('./ElseIfNode');
var ElseNode = require('./ElseNode');
var WithNode = require('./WithNode');
var WhenNode = require('./WhenNode');
var OtherwiseNode = require('./OtherwiseNode');
var TagHandlerNode = require('./TagHandlerNode');
var IncludeNode = require('./IncludeNode');
var Expression = require('../../compiler').Expression;
var AttributeSplitter = require('../../compiler').AttributeSplitter;
var TypeConverter = require('../../compiler').TypeConverter;
var EscapeXmlContext = require('../../compiler').EscapeXmlContext;
var resolver = require('raptor-modules/resolver');

function getPropValue(value, type, allowExpressions) {
    return TypeConverter.convert(value, type, allowExpressions);
}

function CoreTagTransformer() {
}

CoreTagTransformer.prototype = {
    process: function (node, compiler, template) {
        //Find and handle nested <c:attrs> elements
        this.findNestedAttrs(node, compiler, template);
        var inputAttr;
        var forEachNode;
        var namespace;
        var tag;
        var coreNS = compiler.taglibs.resolveNamespace('core');

        function forEachProp(callback, thisObj) {
            var foundProps = {};

            node.forEachAttributeAnyNS(function (attr) {
                if (attr.namespace === 'http://www.w3.org/2000/xmlns/' || attr.namespace === 'http://www.w3.org/XML/1998/namespace' || attr.prefix == 'xmlns') {
                    return;    //Skip xmlns attributes
                }
                var prefix = attr.prefix;
                var attrUri = attr.namespace;
                var resolvedAttrNamespace = attrUri ? compiler.taglibs.resolveNamespace(attrUri) : null;
                attrUri = attr.prefix && resolvedAttrNamespace === tag.taglib.id ? null : attr.namespace;

                var attrDef = compiler.taglibs.getAttribute(namespace, node.localName, attrUri, attr.localName);
                var type = attrDef ? attrDef.type || 'string' : 'string';

                var taglibIdForTag = compiler.taglibs.resolveNamespaceForTag(tag);

                var value;

                // Check if the attribute and tag are part of the same taglib
                if (attrUri && compiler.taglibs.resolveNamespace(attrUri) === taglibIdForTag) {
                    // If so, then don't repeat prefix
                    prefix = '';
                }

                
                if (!attrDef) {
                    // var isAttrForTaglib = compiler.taglibs.isTaglib(attrUri);
                    //Tag doesn't allow dynamic attributes
                    node.addError('The tag "' + tag.name + '" in taglib "' + taglibIdForTag + '" does not support attribute "' + attr + '"');
                    return;
                }

                

                if (attr.value instanceof Expression) {
                    value = attr.value;
                } else {
                    try {
                        value = getPropValue(attr.value, type, attrDef ? attrDef.allowExpressions !== false : true);
                    } catch (e) {
                        node.addError('Invalid attribute value of "' + attr.value + '" for attribute "' + attr.name + '": ' + e.message);
                        value = attr.value;
                    }

                }
                var propName;
                if (attrDef.dynamicAttribute) {
                    propName = attr.localName;
                } else {
                    if (attrDef.targetProperty) {
                        propName = attrDef.targetProperty;
                    } else if (attrDef.preserveName) {
                        propName = attr.localName;
                    } else {
                        propName = removeDashes(attr.localName);
                    }
                }

                foundProps[propName] = true;
                callback.call(thisObj, attrUri, propName, value, prefix, attrDef);
            });

            tag.forEachAttribute(function (attr) {
                if (attr.hasOwnProperty('defaultValue') && !foundProps[attr.name]) {
                    callback.call(thisObj, '', attr.name, template.makeExpression(JSON.stringify(attr.defaultValue)), '', attr);
                }
            });
        }
        namespace = node.namespace;
        if (!namespace && node.isRoot() && node.localName === 'template') {
            namespace = 'core';
        }

        tag = node.tag || compiler.taglibs.getTag(namespace, node.localName);

        var coreAttrHandlers = {
            'space': function(attr) {
                this.whitespace(attr);
            },
            'whitespace': function(attr) {
                if (attr.value === 'preserve') {
                    node.setPreserveWhitespace(true);    
                }
            },
            'escape-xml': function(attr) {
                node.setEscapeXmlBodyText(attr.value !== 'false');
            },
            'parse-body-text': function(attr) {
                node.parseBodyText = attr.value !== 'false';
            },
            'when': function(attr) {
                var whenNode = new WhenNode({
                        test: new Expression(attr.value),
                        pos: node.getPosition()
                    });
                node.parentNode.replaceChild(whenNode, node);
                whenNode.appendChild(node);
            },
            'otherwise': function(attr) {
                var otherwiseNode = new OtherwiseNode({ pos: node.getPosition() });
                node.parentNode.replaceChild(otherwiseNode, node);
                otherwiseNode.appendChild(node);
            },
            'attrs': function(attr) {
                node.dynamicAttributesExpression = attr.value;
            },
            'for-each': function(attr) {
                this['for'](attr);
            },
            'for': function(attr) {
                var forEachProps = AttributeSplitter.parse(attr.value, {
                        each: { type: 'custom' },
                        separator: { type: 'expression' },
                        'iterator': { type: 'expression' },
                        'status-var': { type: 'identifier' },
                        'for-loop': {
                            type: 'boolean',
                            allowExpressions: false
                        }
                    }, {
                        removeDashes: true,
                        defaultName: 'each',
                        errorHandler: function (message) {
                            node.addError('Invalid c:for attribute of "' + attr.value + '". Error: ' + message);
                        }
                    });
                forEachProps.pos = node.getPosition();
                //Copy the position property
                forEachNode = new ForNode(forEachProps);
                //Surround the existing node with an "forEach" node by replacing the current
                //node with the new "forEach" node and then adding the current node as a child
                node.parentNode.replaceChild(forEachNode, node);
                forEachNode.appendChild(node);
            },
            'if': function(attr) {
                var ifNode = new IfNode({
                        test: new Expression(attr.value),
                        pos: node.getPosition()
                    });
                //Surround the existing node with an "if" node by replacing the current
                //node with the new "if" node and then adding the current node as a child
                node.parentNode.replaceChild(ifNode, node);
                ifNode.appendChild(node);
            },
            'else-if': function(attr) {
                var elseIfNode = new ElseIfNode({
                        test: new Expression(attr.value),
                        pos: node.getPosition()
                    });
                //Surround the existing node with an "if" node by replacing the current
                //node with the new "if" node and then adding the current node as a child
                node.parentNode.replaceChild(elseIfNode, node);
                elseIfNode.appendChild(node);
            },
            'else': function(attr) {
                var elseNode = new ElseNode({ pos: node.getPosition() });
                //Surround the existing node with an "if" node by replacing the current
                //node with the new "if" node and then adding the current node as a child
                node.parentNode.replaceChild(elseNode, node);
                elseNode.appendChild(node);
            },
            'with': function(attr) {
                var withNode = new WithNode({
                        vars: attr.value,
                        pos: node.getPosition()
                    });
                node.parentNode.replaceChild(withNode, node);
                withNode.appendChild(node);
            },
            'body-content': function(attr) {
                this.content(attr);
            },
            'content': function(attr) {
                var newChild = new WriteNode({
                        expression: attr.value,
                        pos: node.getPosition()
                    });
                node.removeChildren();
                node.appendChild(newChild);
            },
            'trim-body-indent': function(attr) {
                if (attr.value === 'true') {
                    node.trimBodyIndent = true;    
                }
            },
            'strip': function(attr) {
                if (!node.setStripExpression) {
                    node.addError('The c:strip directive is not allowed for target node');
                }
                node.setStripExpression(attr.value);
            },
            'replace': function(attr) {
                var replaceWriteNode = new WriteNode({
                        expression: attr.value,
                        pos: node.getPosition()
                    });
                //Replace the existing node with an node that only has children
                node.parentNode.replaceChild(replaceWriteNode, node);
                node = replaceWriteNode;
            },
            'input': function(attr) {
                inputAttr = attr.value;
            }
        };

        node.forEachAttributeAnyNS(function(attr) {
            var attrNS = attr.namespace;
            if (!attrNS) {
                return;
            }

            attrNS = compiler.taglibs.resolveNamespace(attrNS);

            if (attrNS === coreNS) {
                node.removeAttributeNS(attr.namespace, attr.localName);
                var handler = coreAttrHandlers[attr.localName];
                if (!handler) {
                    node.addError('Unsupported attribute: ' + attr.qName);
                }
                coreAttrHandlers[attr.localName](attr);
            }
        });

        if (tag) {
            if (tag.preserveWhitespace) {
                node.setPreserveWhitespace(true);
            }
            if (tag.renderer || tag.template) {
                if (tag.renderer) {
                    //Instead of compiling as a static XML element, we'll
                    //make the node render as a tag handler node so that
                    //writes code that invokes the handler
                    TagHandlerNode.convertNode(node, tag);
                    if (inputAttr) {
                        node.setInputExpression(template.makeExpression(inputAttr));
                    }
                } else {
                    var templatePath = resolver.deresolve(tag.template, compiler.dirname);
                    // The tag is mapped to a template that will be used to perform
                    // the rendering so convert the node into a "IncludeNode" that can
                    // be used to include the output of rendering a template
                    IncludeNode.convertNode(node, templatePath);
                }

                forEachProp(function (namespace, name, value, prefix, attrDef) {
                    if (attrDef.dynamicAttribute && attrDef.targetProperty) {
                        if (attrDef.removeDashes === true) {
                            name = removeDashes(name);
                        }
                        node.addDynamicAttribute(prefix ? prefix + ':' + name : name, value);
                        node.setDynamicAttributesProperty(attrDef.targetProperty);
                    } else {
                        node.setPropertyNS(namespace, name, value);
                    }
                });
            } else if (tag.nodeClass) {
                var NodeCompilerClass = require(tag.nodeClass);
                extend(node, NodeCompilerClass.prototype);
                NodeCompilerClass.call(node);
                node.setNodeClass(NodeCompilerClass);
                forEachProp(function (namespace, name, value) {
                    node.setPropertyNS(namespace, name, value);
                });
            }
        } else if (namespace && compiler.isTaglib(namespace)) {
            node.addError('Tag ' + node.toString() + ' is not allowed for taglib "' + namespace + '"');
        }
    },
    findNestedAttrs: function (node, compiler, template) {
        var coreNS = compiler.taglibs.resolveNamespace('core');

        node.forEachChild(function (child) {
            if (compiler.taglibs.resolveNamespace(child.namespace) === coreNS && child.localName === 'attr') {
                this.handleAttr(child, compiler, template);
            }
        }, this);
    },
    handleAttr: function (node, compiler, template) {
        var parentNode = node.parentNode;
        if (!parentNode.isElementNode()) {
            node.addError(this.toString() + ' tag is not nested within an element tag.');
            return;
        }
        var hasValue = node.hasAttribute('value');
        var attrName = node.getAttribute('name');
        var attrValue = node.getAttribute('value');
        var attrUri = node.getAttribute('namespace') || '';
        var attrPrefix = node.getAttribute('prefix') || '';
        if (parentNode.hasAttributeNS(attrUri, attrName)) {
            node.addError(node.toString() + ' tag adds duplicate attribute with name "' + attrName + '"' + (attrUri ? ' and URI "' + attrUri + '"' : ''));
            return;
        }
        node.removeAttribute('name');
        node.removeAttribute('value');
        node.removeAttribute('namespace');
        node.removeAttribute('prefix');
        if (node.hasAttributesAnyNS()) {
            var invalidAttrs = node.getAllAttributes().map(function (attr) {
                    return attr.qName;
                });
            node.addError('Invalid attributes for tag ' + node.toString() + ': ' + invalidAttrs.join(', '));
            return;
        }
        //Cleanup whitespace between <c:attr> tags
        if (node.previousSibling && node.previousSibling.isTextNode() && node.previousSibling.getText().trim() === '') {
            node.previousSibling.detach();
        }
        if (node.nextSibling && node.nextSibling.isTextNode() && node.nextSibling.getText().trim() === '') {
            node.nextSibling.detach();
        }
        if (node.nextSibling && node.nextSibling.isTextNode()) {
            node.nextSibling.setText(node.nextSibling.getText().replace(/^\n\s*/, ''));
        }
        node.detach();
        //Remove the node out of the tree
        compiler.transformTree(node, template);
        if (hasValue) {
            parentNode.setAttributeNS(attrUri, attrName, attrValue, attrPrefix);
        } else {
            node.setEscapeXmlContext(EscapeXmlContext.Attribute);
            //Escape body text and expressions as attributes
            parentNode.setAttributeNS(attrUri, attrName, node.getBodyContentExpression(template), attrPrefix, false);
        }
    }
};
module.exports = CoreTagTransformer;