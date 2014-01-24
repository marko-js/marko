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
var coreNS = 'http://raptorjs.org/templates/core';
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

function getPropValue(value, type, allowExpressions) {
    return TypeConverter.convert(value, type, allowExpressions);
}

function CoreTagTransformer() {
}

CoreTagTransformer.id = 'core/CoreTagTransformer';

CoreTagTransformer.prototype = {
    process: function (node, compiler, template) {
        //Find and handle nested <c:attrs> elements
        this.findNestedAttrs(node, compiler, template);
        var forEachAttr;
        var ifAttr;
        var elseIfAttr;
        var attrsAttr;
        var whenAttr;
        var withAttr;
        var escapeXmlAttr;
        var parseBodyTextAttr;
        var stripAttr;
        var contentAttr;
        var replaceAttr;
        var inputAttr;
        var forEachNode;
        var uri;
        var tag;
        var nestedTag;
        function forEachProp(callback, thisObj) {
            node.forEachAttributeAnyNS(function (attr) {
                if (attr.uri === 'http://www.w3.org/2000/xmlns/' || attr.uri === 'http://www.w3.org/XML/1998/namespace' || attr.prefix == 'xmlns') {
                    return;    //Skip xmlns attributes
                }
                var prefix = attr.prefix;
                var attrUri = compiler.taglibs.resolveURI(attr.uri);
                attrUri = attr.prefix && attrUri != tag.getTaglibUri() ? attr.uri : null;
                var attrDef = compiler.taglibs.getAttribute(uri, node.localName, attrUri, attr.localName);
                var type = attrDef ? attrDef.type || 'string' : 'string';
                var value;
                if (attrUri === tag.getTaglibUri()) {
                    prefix = '';
                }
                var isTaglibUri = template.isTaglib(attrUri);
                if (!attrDef && (isTaglibUri || !tag.dynamicAttributes)) {
                    //Tag doesn't allow dynamic attributes
                    node.addError('The tag "' + tag.name + '" in taglib "' + tag.getTaglibUri() + '" does not support attribute "' + attr + '"');
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
                if (attrDef) {
                    if (attrDef.targetProperty) {
                        propName = attrDef.targetProperty;
                    } else if (attrDef.preserveName) {
                        propName = attr.localName;
                    } else {
                        propName = removeDashes(attr.localName);
                    }
                } else {
                    propName = attr.localName;
                }
                callback.call(thisObj, attrUri, propName, value, prefix, attrDef);
            });

            tag.forEachStaticProperty(function (staticProp) {
                var value = getPropValue(staticProp.value, staticProp.type, false);
                callback.call(thisObj, '', staticProp.name, value, '', staticProp);
            });
        }
        uri = node.uri;
        if (!uri && node.isRoot() && node.localName === 'template') {
            uri = coreNS;
        }
        if (node.parentNode) {
            var parentUri = node.parentNode.uri;
            var parentName = node.parentNode.localName;
            nestedTag = compiler.taglibs.getNestedTag(parentUri, parentName, uri, node.localName);
            if (nestedTag) {
                node.setWordWrapEnabled(false);
                node.parentNode.setProperty(nestedTag.targetProperty, node.getBodyContentExpression(template));
                node.detach();
                return;
            }
        }
        tag = node.tag || compiler.taglibs.getTag(uri, node.localName);
        if (node.getAttributeNS(coreNS, 'space') === 'preserve' || node.getAttributeNS(coreNS, 'whitespace') === 'preserve') {
            node.setPreserveWhitespace(true);
        }
        node.removeAttributeNS(coreNS, 'space');
        node.removeAttributeNS(coreNS, 'whitespace');
        if ((escapeXmlAttr = node.getAttributeNS(coreNS, 'escape-xml')) != null) {
            node.removeAttributeNS(coreNS, 'escape-xml');
            node.setEscapeXmlBodyText(escapeXmlAttr !== 'false');
        }
        if ((parseBodyTextAttr = node.getAttributeNS(coreNS, 'parse-body-text')) != null) {
            node.removeAttributeNS(coreNS, 'parse-body-text');
            node.parseBodyText = parseBodyTextAttr !== 'false';
        }
        if ((whenAttr = node.getAttributeNS(coreNS, 'when')) != null) {
            node.removeAttributeNS(coreNS, 'when');
            var whenNode = new WhenNode({
                    test: new Expression(whenAttr),
                    pos: node.getPosition()
                });
            node.parentNode.replaceChild(whenNode, node);
            whenNode.appendChild(node);
        }
        if (node.getAttributeNS(coreNS, 'otherwise') != null) {
            node.removeAttributeNS(coreNS, 'otherwise');
            var otherwiseNode = new OtherwiseNode({ pos: node.getPosition() });
            node.parentNode.replaceChild(otherwiseNode, node);
            otherwiseNode.appendChild(node);
        }
        if ((attrsAttr = node.getAttributeNS(coreNS, 'attrs')) != null) {
            node.removeAttributeNS(coreNS, 'attrs');
            node.dynamicAttributesExpression = attrsAttr;
        }
        if (((forEachAttr = node.getAttributeNS(coreNS, 'for')) || (forEachAttr = node.getAttributeNS(coreNS, 'for-each'))) != null) {
            node.removeAttributeNS(coreNS, 'for');
            node.removeAttributeNS(coreNS, 'for-each');
            var forEachProps = AttributeSplitter.parse(forEachAttr, {
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
                        node.addError('Invalid c:for attribute of "' + forEachAttr + '". Error: ' + message);
                    }
                });
            forEachProps.pos = node.getPosition();
            //Copy the position property
            forEachNode = new ForNode(forEachProps);
            //Surround the existing node with an "forEach" node by replacing the current
            //node with the new "forEach" node and then adding the current node as a child
            node.parentNode.replaceChild(forEachNode, node);
            forEachNode.appendChild(node);
        }
        if ((ifAttr = node.getAttributeNS(coreNS, 'if')) != null) {
            node.removeAttributeNS(coreNS, 'if');
            var ifNode = new IfNode({
                    test: new Expression(ifAttr),
                    pos: node.getPosition()
                });
            //Surround the existing node with an "if" node by replacing the current
            //node with the new "if" node and then adding the current node as a child
            node.parentNode.replaceChild(ifNode, node);
            ifNode.appendChild(node);
        }
        if ((elseIfAttr = node.getAttributeNS(coreNS, 'else-if')) != null) {
            node.removeAttributeNS(coreNS, 'else-if');
            var elseIfNode = new ElseIfNode({
                    test: new Expression(elseIfAttr),
                    pos: node.getPosition()
                });
            //Surround the existing node with an "if" node by replacing the current
            //node with the new "if" node and then adding the current node as a child
            node.parentNode.replaceChild(elseIfNode, node);
            elseIfNode.appendChild(node);
        }
        if (node.getAttributeNS(coreNS, 'else') != null) {
            node.removeAttributeNS(coreNS, 'else');
            var elseNode = new ElseNode({ pos: node.getPosition() });
            //Surround the existing node with an "if" node by replacing the current
            //node with the new "if" node and then adding the current node as a child
            node.parentNode.replaceChild(elseNode, node);
            elseNode.appendChild(node);
        }
        if ((withAttr = node.getAttributeNS(coreNS, 'with')) != null) {
            node.removeAttributeNS(coreNS, 'with');
            var withNode = new WithNode({
                    vars: withAttr,
                    pos: node.getPosition()
                });
            node.parentNode.replaceChild(withNode, node);
            withNode.appendChild(node);
        }
        if ((contentAttr = node.getAttributeNS(coreNS, 'bodyContent') || node.getAttributeNS(coreNS, 'content')) != null) {
            node.removeAttributeNS(coreNS, 'bodyContent');
            node.removeAttributeNS(coreNS, 'content');
            var newChild = new WriteNode({
                    expression: contentAttr,
                    pos: node.getPosition()
                });
            node.removeChildren();
            node.appendChild(newChild);
        }
        if (node.getAttributeNS(coreNS, 'trim-body-indent') === 'true') {
            node.removeAttributeNS(coreNS, 'trim-body-indent');
            node.trimBodyIndent = true;
        }
        if (node.getAttributeNS && (stripAttr = node.getAttributeNS(coreNS, 'strip')) != null) {
            node.removeAttributeNS(coreNS, 'strip');
            if (!node.setStripExpression) {
                node.addError('The c:strip directive is not allowed for target node');
            }
            node.setStripExpression(stripAttr);
        }
        if (node.getAttributeNS && (replaceAttr = node.getAttributeNS(coreNS, 'replace')) != null) {
            node.removeAttributeNS(coreNS, 'replace');
            var replaceWriteNode = new WriteNode({
                    expression: replaceAttr,
                    pos: node.getPosition()
                });
            //Replace the existing node with an node that only has children
            node.parentNode.replaceChild(replaceWriteNode, node);
            node = replaceWriteNode;
        }
        if (tag) {
            if (tag.preserveWhitespace) {
                node.setPreserveWhitespace(true);
            }
            if (tag.handlerClass || tag.template) {
                if (tag.handlerClass) {
                    //Instead of compiling as a static XML element, we'll
                    //make the node render as a tag handler node so that
                    //writes code that invokes the handler
                    TagHandlerNode.convertNode(node, tag);
                    if ((inputAttr = node.getAttributeNS(coreNS, 'input')) != null) {
                        node.removeAttributeNS(coreNS, 'input');
                        node.setInputExpression(template.makeExpression(inputAttr));
                    }
                } else {
                    // The tag is mapped to a template that will be used to perform
                    // the rendering so convert the node into a "IncludeNode" that can
                    // be used to include the output of rendering a template
                    IncludeNode.convertNode(node, tag.template);
                }
                forEachProp(function (uri, name, value, prefix, attrDef) {
                    if (attrDef) {
                        node.setPropertyNS(uri, name, value);
                    } else {
                        if (tag.dynamicAttributesRemoveDashes === true) {
                            name = removeDashes(name);
                        }
                        node.addDynamicAttribute(prefix ? prefix + ':' + name : name, value);
                    }
                });
            } else if (tag.nodeClass) {
                var NodeCompilerClass = require(tag.nodeClass);
                extend(node, NodeCompilerClass.prototype);
                NodeCompilerClass.call(node);
                node.setNodeClass(NodeCompilerClass);
                forEachProp(function (uri, name, value) {
                    node.setPropertyNS(uri, name, value);
                });
            }
        } else if (uri && template.isTaglib(uri)) {
            node.addError('Tag ' + node.toString() + ' is not allowed for taglib "' + uri + '"');
        }
    },
    findNestedAttrs: function (node, compiler, template) {
        node.forEachChild(function (child) {
            if (child.uri === coreNS && child.localName === 'attr') {
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
        var attrUri = node.getAttribute('uri') || '';
        var attrPrefix = node.getAttribute('prefix') || '';
        if (parentNode.hasAttributeNS(attrUri, attrName)) {
            node.addError(node.toString() + ' tag adds duplicate attribute with name "' + attrName + '"' + (attrUri ? ' and URI "' + attrUri + '"' : ''));
            return;
        }
        node.removeAttribute('name');
        node.removeAttribute('value');
        node.removeAttribute('uri');
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
            node.setEscapeXmlContext(require('../../compiler/EscapeXmlContext').Attribute);
            //Escape body text and expressions as attributes
            parentNode.setAttributeNS(attrUri, attrName, node.getBodyContentExpression(template), attrPrefix, false);
        }
    }
};
module.exports = CoreTagTransformer;