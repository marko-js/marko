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
var ForNode = require('./ForNode');
var IfNode = require('./IfNode');
var UnlessNode = require('./UnlessNode');
var ElseIfNode = require('./ElseIfNode');
var ElseNode = require('./ElseNode');
var WithNode = require('./WithNode');
var TagHandlerNode = require('./TagHandlerNode');
var IncludeNode = require('./IncludeNode');
var path = require('path');

function getTaglibPath(taglibPath) {
    if (typeof window === 'undefined') {
        return path.relative(process.cwd(), taglibPath);
    } else {
        return taglibPath;
    }
}

var coreAttrHandlers = [
    [
        'c-space', function(attr, node) {
            this['c-whitespace'](attr, node);
        }
    ],
    [
        'c-whitespace', function(attr, node) {
            if (attr === 'preserve') {
                node.setPreserveWhitespace(true);
            }
        }
    ],
    [
        'c-escape-xml', function(attr, node) {
            node.setEscapeXmlBodyText(attr !== 'false');
        }
    ],
    [
        'c-parse-body-text', function(attr, node) {
            node.parseBodyText = attr !== 'false';
        }
    ],
    [
        'attrs', function(attr, node) {
            if (this.tag) {
                this.inputAttr = attr;
            } else {
                if (!node.addDynamicAttributes) {
                    node.addError('Node does not support the "attrs" attribute');
                } else {
                    node.addDynamicAttributes(attr);
                }
            }
        }
    ],
    [
        'for-each', function(attr, node) {
            this['for'](attr, node);
        }
    ],
    [
        'for', function(attr, node) {
            var forEachProps = this.compiler.parseAttribute(attr, {
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
                        node.addError('Invalid for attribute of "' + attr + '". Error: ' + message);
                    }
                });
            forEachProps.pos = node.getPosition();
            //Copy the position property
            var forEachNode = this.compiler.createNode(ForNode, forEachProps);
            //Surround the existing node with an "forEach" node by replacing the current
            //node with the new "forEach" node and then adding the current node as a child
            node.parentNode.replaceChild(forEachNode, node);
            forEachNode.appendChild(node);
        }
    ],
    [
        'if', function(attr, node) {
            var ifNode = this.compiler.createNode(IfNode, {
                    test: this.template.makeExpression(attr),
                    pos: node.getPosition()
                });
            //Surround the existing node with an "if" node by replacing the current
            //node with the new "if" node and then adding the current node as a child
            node.parentNode.replaceChild(ifNode, node);
            ifNode.appendChild(node);
        }
    ],
    [
        'unless', function(attr, node) {
            var unlessNode = this.compiler.createNode(UnlessNode, {
                    test: this.template.makeExpression(attr),
                    pos: node.getPosition()
                });
            //Surround the existing node with an "unlessNode" node by replacing the current
            //node with the new "unlessNode" node and then adding the current node as a child
            node.parentNode.replaceChild(unlessNode, node);
            unlessNode.appendChild(node);
        }
    ],
    [
        'else-if', function(attr, node) {
            var elseIfNode = this.compiler.createNode(ElseIfNode, {
                    test: this.template.makeExpression(attr),
                    pos: node.getPosition()
                });
            //Surround the existing node with an "if" node by replacing the current
            //node with the new "if" node and then adding the current node as a child
            node.parentNode.replaceChild(elseIfNode, node);
            elseIfNode.appendChild(node);
        }
    ],
    [
        'else', function(attr, node) {
            var elseNode = this.compiler.createNode(ElseNode, { pos: node.getPosition() });
            //Surround the existing node with an "if" node by replacing the current
            //node with the new "if" node and then adding the current node as a child
            node.parentNode.replaceChild(elseNode, node);
            elseNode.appendChild(node);
        }
    ],
    [
        'with', function(attr, node) {
            var withNode = this.compiler.createNode(WithNode, {
                    vars: attr,
                    pos: node.getPosition()
                });
            node.parentNode.replaceChild(withNode, node);
            withNode.appendChild(node);
        }
    ],
    [
        'c-trim-body-indent', function(attr, node) {
            if (attr === 'true') {
                node.trimBodyIndent = true;
            }
        }
    ],
    [
        'body-only-if', function(attr, node) {
            if (!node.setStripExpression) {
                node.addError('The c-strip directive is not allowed for target node');
            }
            node.setStripExpression(attr);
        }
    ],
    [
        'c-input', function(attr, node) {
            this.inputAttr = attr;
        }
    ],
    [
        'c-data', function(attr, node) {
            console.log('c-data', typeof attr);
            this.inputAttr = attr;
        }
    ]
];


function Transformer(template, compiler, tag) {
    this.template = template;
    this.compiler = compiler;
    this.tag = tag;
    this.inputAttr = null;
}

Transformer.prototype = {
    transformNode: function(node) {

        for (var i=0, len=coreAttrHandlers.length; i<len; i++) {
            var attrHandler = coreAttrHandlers[i];
            var name = attrHandler[0];
            if (name === 'for' && node.tagName === 'label') {
                continue;
            }
            var attr = node.getAttribute(name);
            if (attr != null) {
                node.removeAttribute(name);
                node = this[name](attr, node) || node;
            }
        }

        return node;
    }
};

coreAttrHandlers.forEach(function(attrHandler) {
    var name = attrHandler[0];
    var func = attrHandler[1];
    Transformer.prototype[name] = func;
});


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
    //Cleanup whitespace between <attr> tags
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
        if (child.qName === 'attr') {
            handleAttr(child, compiler, template);
        }
    });
}

module.exports = function transform(node, compiler, template) {
    //Find and handle nested <attrs> elements
    findNestedAttrs(node, compiler, template);

    var tag;
    tag = node.tag || compiler.taglibs.getTag(node);

    var transformer = new Transformer(template, compiler, tag);
    node = transformer.transformNode(node);
    var inputAttr = transformer.inputAttr;
    var shouldRemoveAttr = true;

    if (tag) {
        if (tag.renderer || tag.template) {
            node.tag = tag;
        }

        if (tag.preserveWhitespace) {
            node.setPreserveWhitespace(true);
        }

        if (tag.escapeXmlBody === false) {
            node.setEscapeXmlBodyText(false);
        }

        if (tag.renderer || tag.isNestedTag) {
            shouldRemoveAttr = false;

            //Instead of compiling as a static XML element, we'll
            //make the node render as a tag handler node so that
            //writes code that invokes the handler
            TagHandlerNode.convertNode(node, tag);
            if (inputAttr) {
                node.setInputExpression(template.makeExpression(inputAttr));
            }
        } else if (tag.template) {
            shouldRemoveAttr = false;
            var templatePath = compiler.getRequirePath(tag.template);
            // The tag is mapped to a template that will be used to perform
            // the rendering so convert the node into a "IncludeNode" that can
            // be used to include the output of rendering a template
            IncludeNode.convertNode(node, templatePath);
        } else if (tag.nodeClass) {
            shouldRemoveAttr = false;

            var NodeCompilerClass = require(tag.nodeClass);
            compiler.inheritNode(NodeCompilerClass);
            extend(node, NodeCompilerClass.prototype);
            NodeCompilerClass.call(node);
            node.setNodeClass(NodeCompilerClass);
        }
    }

    function handleProp(name, value, attrDef, attr) {
        if (attrDef.setFlag) {
            node.setFlag(attrDef.setFlag);
        }

        if (shouldRemoveAttr && attr) {
            // When an attribute is converted to a property we remove
            // the old attribute and only keep the resulting
            // property in the property map.
            node.removeAttributeNS(attr.namespace, attr.localName);
        }

        if (attrDef.dynamicAttribute) {
            if (attrDef.removeDashes === true) {
                name = removeDashes(name);
            }
            if (node.addDynamicAttribute && attrDef.targetProperty) {
                node.addDynamicAttribute(name, value);
                node.setDynamicAttributesProperty(attrDef.targetProperty);
            } else {
                node.setProperty(name, value);
            }
        } else {
            node.setProperty(name, value);
        }
    }

    function handleAttrs() {
        // Convert tag attributes to JavaScript expressions based on loaded
        // taglibs. Attributes are converted to properties and applied
        // to either the runtime render tag or a compile-time AST Node.

        function convertAttrValue(attr, type, attrDef) {
            type = type || (attrDef ? attrDef.type : 'string') || 'string';

            try {
                return compiler.convertType(attr.value, type, attrDef ? attrDef.allowExpressions !== false : true);
            } catch (e) {
                node.addError('Invalid attribute value of "' + attr.value + '" for attribute "' + attr.name + '": ' + e.message);
                return attr.value;
            }
        }

        var foundProps = {};

        node.forEachAttributeAnyNS(function (attr) {
            var attrDef = compiler.taglibs.getAttribute(node, attr);
            if (!attrDef) {
                if (tag) {
                    // var isAttrForTaglib = compiler.taglibs.isTaglib(attrUri);
                    //Tag doesn't allow dynamic attributes
                    node.addError('The tag "' + tag.name + '" in taglib "' + getTaglibPath(tag.taglibId) + '" does not support attribute "' + attr + '"');
                }
                return;
            }

            if (attrDef.ignore) {
                // Skip attributes that are marked as "ignore" by the
                // taglib author. They'll handle the attribute themselves
                // and we don't need to bother copying it into
                // the properties map
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
                        value = convertAttrValue(
                            attr,
                            'string',
                            attrDef);

                    } else {
                        // Resolve the static string to a full path only once
                        pathVar = template.addStaticVar(attr.value, 'require.resolve(' + compiler.convertType(attr.value, 'string', true) + ')');
                        value = compiler.makeExpression(pathVar);
                    }
                } else if (type === 'template') {
                    template.addStaticVar('__loadTemplate', '__helpers.l');
                    var templateVar;
                    if (compiler.hasExpression(attr.value)) {
                        value = compiler.makeExpression('__loadTemplate(' +
                            convertAttrValue(
                                attr,
                                'string',
                                attrDef) +
                                ', require' + // Include the "require" variable to allow relative paths to be resolved
                            ')');
                    } else {
                        // Resolve the static string to a full path only once
                        templateVar = template.addStaticVar(attr.value, '__loadTemplate(require.resolve(' + compiler.convertType(attr.value, 'string', true) + '), require)');
                        value = compiler.makeExpression(templateVar);
                    }
                } else {
                    value = convertAttrValue(attr, type, attrDef);
                }
            }
            var propName;
            if (attrDef.dynamicAttribute) {
                // Dynamic attributes are allowed attributes
                // that are not declared (i.e. "*" attributes)
                //
                if (attrDef.preserveName === false) {
                    propName = removeDashes(attr.localName);
                } else {
                    propName = attr.qName;
                }



            } else {
                // Attributes map to properties and we allow the taglib
                // author to control how an attribute name resolves
                // to a property name.
                if (attrDef.targetProperty) {
                    propName = attrDef.targetProperty;
                } else if (attrDef.preserveName) {
                    propName = attr.localName;
                } else {
                    propName = removeDashes(attr.localName);
                }
            }

            foundProps[propName] = true;
            handleProp(propName, value, attrDef, attr);
        });

        if (tag) {
            // Add default values for any attributes. If an attribute has a declared
            // default value and the attribute was not found on the element
            // then add the property with the specified default value
            tag.forEachAttribute(function (attrDef) {
                if (attrDef.hasOwnProperty('defaultValue') && !foundProps[attrDef.name]) {
                    handleProp(
                        attrDef.name,
                        template.makeExpression(JSON.stringify(attrDef.defaultValue)),
                        attrDef,
                        null);
                }
            });
        }
    }

    handleAttrs();
};
