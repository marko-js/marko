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

var resolver = require('raptor-modules/resolver');

function handleAttr(node, compiler, template) {
    var parentNode = node.parentNode;
    if (!parentNode.isElementNode()) {
        node.addError(node.toString() + ' tag is not nested within an element tag.');
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
    //Cleanup whitespace between <c-attr> tags
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
        node.setEscapeXmlContext('ATTRIBUTE');
        //Escape body text and expressions as attributes
        parentNode.setAttributeNS(attrUri, attrName, node.getBodyContentExpression(template), attrPrefix, false);
    }
}

function findNestedAttrs(node, compiler, template) {
    node.forEachChild(function (child) {
        if (child.qName === 'c-attr') {
            handleAttr(child, compiler, template);
        }
    });
}



module.exports = function transform(node, compiler, template) {

    //Find and handle nested <c-attrs> elements
    findNestedAttrs(node, compiler, template);

    var inputAttr;
    var forEachNode;
    var tag;


    function convertAttrValue(attr, type, attrDef) {
        type = type || (attrDef ? attrDef.type : 'string') || 'string';

        try {
            return compiler.convertType(attr.value, type, attrDef ? attrDef.allowExpressions !== false : true);
        } catch (e) {
            node.addError('Invalid attribute value of "' + attr.value + '" for attribute "' + attr.name + '": ' + e.message);
            return attr.value;
        }
    }

    function forEachProp(callback, thisObj) {
        var foundProps = {};

        node.forEachAttributeAnyNS(function (attr) {
            var attrDef = compiler.taglibs.getAttribute(node, attr);
            if (!attrDef) {
                // var isAttrForTaglib = compiler.taglibs.isTaglib(attrUri);
                //Tag doesn't allow dynamic attributes
                node.addError('The tag "' + tag.name + '" in taglib "' + tag.taglibId + '" does not support attribute "' + attr + '"');
                return;
            }

            var type = attrDef.type || 'string';

            var value;

            if (compiler.isExpression(attr.value)) {
                value = attr.value;
            } else {
                if (type === 'path') {
                    var pathVar;
                    if (compiler.hasExpression(attr.value)) {
                        value = convertAttrValue(attr, 'string', attrDef);
                    } else {
                        // Resolve the static string to a full path only once
                        pathVar = template.addStaticVar(attr.value, 'require.resolve(' + compiler.convertType(attr.value, 'string', true) + ')');
                        value = compiler.makeExpression(pathVar);
                    }
                } else if (type === 'template') {
                    var templateVar;
                    if (compiler.hasExpression(attr.value)) {
                        value = compiler.makeExpression('__helpers.l(' + convertAttrValue(attr, 'string', attrDef) + ')');
                    } else {
                        // Resolve the static string to a full path only once
                        templateVar = template.addStaticVar(attr.value, '__helpers.l(require.resolve(' + compiler.convertType(attr.value, 'string', true) + '))');
                        value = compiler.makeExpression(templateVar);
                    }
                } else {
                    value = convertAttrValue(attr, type, attrDef);
                }
            }
            var propName;
            if (attrDef.dynamicAttribute) {
                propName = attr.qName;
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
            callback.call(thisObj, propName, value, attrDef);
        });

        tag.forEachAttribute(function (attr) {
            if (attr.hasOwnProperty('defaultValue') && !foundProps[attr.name]) {
                callback.call(thisObj, attr.name, template.makeExpression(JSON.stringify(attr.defaultValue)), '', attr);
            }
        });
    }

    tag = node.tag || compiler.taglibs.getTag(node);

    var coreAttrHandlers = {
        'c-space': function(attr) {
            this['c-whitespace'](attr);
        },
        'c-whitespace': function(attr) {
            if (attr.value === 'preserve') {
                node.setPreserveWhitespace(true);
            }
        },
        'c-escape-xml': function(attr) {
            node.setEscapeXmlBodyText(attr.value !== 'false');
        },
        'c-parse-body-text': function(attr) {
            node.parseBodyText = attr.value !== 'false';
        },
        'c-when': function(attr) {
            var whenNode = compiler.createNode(WhenNode, {
                    test: template.makeExpression(attr.value),
                    pos: node.getPosition()
                });
            node.parentNode.replaceChild(whenNode, node);
            whenNode.appendChild(node);
        },
        'c-otherwise': function(attr) {
            var otherwiseNode = compiler.createNode(OtherwiseNode, { pos: node.getPosition() });
            node.parentNode.replaceChild(otherwiseNode, node);
            otherwiseNode.appendChild(node);
        },
        'c-attrs': function(attr) {
            if (!node.addDynamicAttributes) {
                node.addError('Node does not support the "c-attrs" attribute');
            } else {
                node.addDynamicAttributes(attr.value);
            }
        },
        'c-for-each': function(attr) {
            this['for'](attr);
        },
        'c-for': function(attr) {
            var forEachProps = compiler.parseAttribute(attr.value, {
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
                        node.addError('Invalid c-for attribute of "' + attr.value + '". Error: ' + message);
                    }
                });
            forEachProps.pos = node.getPosition();
            //Copy the position property
            forEachNode = compiler.createNode(ForNode, forEachProps);
            //Surround the existing node with an "forEach" node by replacing the current
            //node with the new "forEach" node and then adding the current node as a child
            node.parentNode.replaceChild(forEachNode, node);
            forEachNode.appendChild(node);
        },
        'c-if': function(attr) {
            var ifNode = compiler.createNode(IfNode, {
                    test: template.makeExpression(attr.value),
                    pos: node.getPosition()
                });
            //Surround the existing node with an "if" node by replacing the current
            //node with the new "if" node and then adding the current node as a child
            node.parentNode.replaceChild(ifNode, node);
            ifNode.appendChild(node);
        },
        'c-else-if': function(attr) {
            var elseIfNode = compiler.createNode(ElseIfNode, {
                    test: template.makeExpression(attr.value),
                    pos: node.getPosition()
                });
            //Surround the existing node with an "if" node by replacing the current
            //node with the new "if" node and then adding the current node as a child
            node.parentNode.replaceChild(elseIfNode, node);
            elseIfNode.appendChild(node);
        },
        'c-else': function(attr) {
            var elseNode = compiler.createNode(ElseNode, { pos: node.getPosition() });
            //Surround the existing node with an "if" node by replacing the current
            //node with the new "if" node and then adding the current node as a child
            node.parentNode.replaceChild(elseNode, node);
            elseNode.appendChild(node);
        },
        'c-with': function(attr) {
            var withNode = compiler.createNode(WithNode, {
                    vars: attr.value,
                    pos: node.getPosition()
                });
            node.parentNode.replaceChild(withNode, node);
            withNode.appendChild(node);
        },
        'c-body-content': function(attr) {
            this.content(attr);
        },
        'c-content': function(attr) {
            var newChild = compiler.createNode(WriteNode, {
                    expression: attr.value,
                    pos: node.getPosition()
                });
            node.removeChildren();
            node.appendChild(newChild);
        },
        'c-trim-body-indent': function(attr) {
            if (attr.value === 'true') {
                node.trimBodyIndent = true;
            }
        },
        'c-strip': function(attr) {
            if (!node.setStripExpression) {
                node.addError('The c-strip directive is not allowed for target node');
            }
            node.setStripExpression(attr.value);
        },
        'c-replace': function(attr) {
            var replaceWriteNode = compiler.createNode(WriteNode, {
                    expression: attr.value,
                    pos: node.getPosition()
                });
            //Replace the existing node with an node that only has children
            node.parentNode.replaceChild(replaceWriteNode, node);
            node = replaceWriteNode;
        },
        'c-input': function(attr) {
            inputAttr = attr.value;
        },
        'c-data': function(attr) {
            inputAttr = attr.value;
        }
    };

    node.forEachAttributeNS('', function(attr) {
        
        var handler = coreAttrHandlers[attr.qName];
        if (handler) {
            node.removeAttribute(attr.localName);
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

            forEachProp(function (name, value, attrDef) {
                if (attrDef.dynamicAttribute && attrDef.targetProperty) {
                    if (attrDef.removeDashes === true) {
                        name = removeDashes(name);
                    }
                    node.addDynamicAttribute(name, value);
                    node.setDynamicAttributesProperty(attrDef.targetProperty);
                } else {
                    node.setProperty(name, value);
                }
            });

        } else if (tag.nodeClass) {
            var NodeCompilerClass = require(tag.nodeClass);
            compiler.inheritNode(NodeCompilerClass);
            extend(node, NodeCompilerClass.prototype);
            NodeCompilerClass.call(node);
            node.setNodeClass(NodeCompilerClass);
            forEachProp(function (name, value) {
                node.setProperty(name, value);
            });
        }
    }
};