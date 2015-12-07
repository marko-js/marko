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
var extend = require('raptor-util').extend;
var forEachEntry = require('raptor-util').forEachEntry;
var stringify = require('raptor-json/stringify');
var isObjectEmpty = require('raptor-util/isObjectEmpty');
var requireVarName = require('./requireVarName');

function addHandlerVar(template, renderer) {
    var handlerVars = template._handlerVars || (template._handlerVars = {});
    var handlerVar = handlerVars[renderer];
    if (!handlerVar) {
        handlerVar = requireVarName(renderer, template.dirname);
        handlerVar = template.addStaticVar(handlerVar, '__renderer(require(' + stringify(renderer) + '))');
        handlerVars[renderer] = handlerVar;
    }
    return handlerVar;
}
function getPropsStr(props, template) {
    var propsArray = [];
    if (props) {
        template.indent(function () {
            forEachEntry(props, function (name, value) {
                if (typeof value === 'function') {
                    value = template.captureCode(function() {
                        return value(template);
                    });

                    if (!value) {
                        throw new Error('Invalid value for property "' + name + '"');
                    }

                    value = template.makeExpression(value, false);
                }

                if (template.isExpression(value)) {
                    var expressionStr;
                    template.indent(function () {
                        expressionStr = value.expression.toString();
                    });
                    propsArray.push(template.indentStr() + stringify(name) + ': ' + expressionStr);
                } else if (typeof value === 'string' || typeof value === 'object') {
                    propsArray.push(template.indentStr() + stringify(name) + ': ' + stringify(value));
                } else {
                    propsArray.push(template.indentStr() + stringify(name) + ': ' + value);
                }
            });
        });

        if (propsArray.length) {
            return '{\n' + propsArray.join(',\n') + '\n' + template.indentStr() + '}';
        } else {
            return '{}';
        }
    } else {
        return '{}';
    }
}

function getNextNestedTagVarName(template) {
    if (template.data.nextNestedTagId == null) {
        template.data.nextNestedTagId = 0;
    }

    return '__nestedTagInput' + (template.data.nextNestedTagId++);
}

function getNestedTagParentNode(nestedTagNode, tag) {
    var parentTagName = tag.parentTagName;

    var currentNode = nestedTagNode.parentNode;
    while (currentNode) {
        if (currentNode.localName === parentTagName) {
            return currentNode;
        }

        currentNode = currentNode.parentNode;
    }
}

function TagHandlerNode(tag) {
    if (!this.nodeType) {
        TagHandlerNode.$super.call(this);
    }
    this.tag = tag;
    this.dynamicAttributes = null;
    this.inputExpression = null;
    this.additionalVars = [];
}
TagHandlerNode.nodeType = 'element';

TagHandlerNode.convertNode = function (node, tag) {
    if (node._TagHandlerNode) {
        return;
    }

    extend(node, TagHandlerNode.prototype);
    TagHandlerNode.call(node, tag);
};

TagHandlerNode.prototype = {

    _TagHandlerNode: true,

    addNestedVariable: function(name) {
        this.additionalVars.push(name);
    },
    addDynamicAttribute: function (name, value) {
        if (!this.dynamicAttributes) {
            this.dynamicAttributes = {};
        }
        this.dynamicAttributes[name] = value;
    },
    setDynamicAttributesProperty: function(name) {
        this.dynamicAttributesProperty = name;
    },
    setInputExpression: function (expression) {
        this.inputExpression = expression;
    },
    doGenerateCode: function (template) {
        template.addStaticVar('__renderer', '__helpers.r');
        var _this = this;
        var tag = this.tag;

        var rendererPath;
        var handlerVar;

        if (tag.renderer) {
            rendererPath = template.getRequirePath(this.tag.renderer); // Resolve a path to the renderer relative to the directory of the template
            handlerVar = addHandlerVar(template, rendererPath);
        }


        var bodyFunction = tag.bodyFunction;
        var bodyProperty = tag.bodyProperty;
        var isNestedTag = tag.isNestedTag === true;
        var hasNestedTags = tag.hasNestedTags();
        var tagHelperVar = template.addStaticVar('__tag', '__helpers.t');

        var nestedTagVar;
        var nestedTagParentNode = null;
        var parentNestedTagVar;

        if (isNestedTag) {
            nestedTagParentNode = getNestedTagParentNode(this, tag);
            if (nestedTagParentNode == null) {
                this.addError('Invalid usage of the ' + this + ' nested tag. Tag not nested within a <' + tag.parentTagName + '> tag.');
                return;
            }

            parentNestedTagVar = nestedTagParentNode.data.nestedTagVar;
        }

        if (hasNestedTags) {
            nestedTagVar = this.data.nestedTagVar = getNextNestedTagVarName(template);
        }

        tag.forEachImportedVariable(function (importedVariable) {
            this.setProperty(importedVariable.targetProperty, template.makeExpression(importedVariable.expression));
        }, this);

        if (this.hasChildren()) {
            if (bodyFunction) {
                this.setProperty(bodyFunction.name, function(template) {
                    template.code('function(' + bodyFunction.params + ') {\n').indent(function () {
                        _this.generateCodeForChildren(template);
                    }).indent().code('}');
                });
            } else if (bodyProperty) {
                this.setProperty(bodyProperty, function(template) {
                    return _this.getBodyContentExpression(template);
                });
            }
        }


        var variableNames = [];
        tag.forEachVariable(function (nestedVar) {
            var varName;
            if (nestedVar.nameFromAttribute) {
                var possibleNameAttributes = nestedVar.nameFromAttribute.split(/\s+or\s+|\s*,\s*/i);
                for (var i = 0, len = possibleNameAttributes.length; i < len; i++) {
                    var attrName = possibleNameAttributes[i];
                    var keep = false;
                    if (attrName.endsWith('|keep')) {
                        keep = true;
                        attrName = attrName.slice(0, 0 - '|keep'.length);
                        possibleNameAttributes[i] = attrName;
                    }
                    varName = this.getAttribute(attrName);
                    if (varName) {
                        if (!keep) {
                            this.removeProperty(attrName);
                        }
                        break;
                    }
                }
                if (!varName) {
                    this.addError('Attribute ' + possibleNameAttributes.join(' or ') + ' is required');
                    varName = '_var';    // Let it continue with errors
                }
            } else {
                varName = nestedVar.name;
                if (!varName) {
                    this.addError('Variable name is required');
                    varName = '_var';    // Let it continue with errors
                }
            }
            variableNames.push(varName);
        }, this);

        if (this.additionalVars.length) {
            variableNames = variableNames.concat(this.additionalVars);
        }

        template.functionCall(tagHelperVar, function () {
            template.code('out,\n').indent(function () {
                template.line((handlerVar ? handlerVar : 'null') + ',').indent();

                if (_this.dynamicAttributes) {
                    template.indent(function() {
                        _this.setProperty(_this.dynamicAttributesProperty, template.makeExpression(getPropsStr(_this.dynamicAttributes, template)));
                    });
                }

                var props = _this.getProperties();

                var propsCode = getPropsStr(props, template);

                if (_this.inputExpression) {
                    if (isObjectEmpty(props)) {
                        propsCode = _this.inputExpression;
                    } else {
                        // We need to generate code that merges in the attribute properties with
                        // the provided data object. We don't want to modify the existing
                        // data object provided by the user so first need to create a new
                        // empty object and then merge in the existing properties from the
                        // provided object. When then extend that object with the properties
                        // that came from the attributes.
                        //
                        // The generated code will be similar to the following:
                        //
                        // extend(extend({}, <input_expression>), <attr_props>);
                        var extendVar = template.addStaticVar('__extend', '__helpers.xt');
                        propsCode = extendVar + '(' +
                                    extendVar + '({}, ' + _this.inputExpression + '), ' +
                                    propsCode +
                                ')';
                    }

                }

                template.code(propsCode);

                var hasOutParam = false;

                var hasBodyFunc = false;

                if (_this.hasChildren() && !tag.bodyFunction) {
                    hasBodyFunc = true;
                    var bodyParams = [];


                    if (hasNestedTags) {
                        bodyParams.push(nestedTagVar);
                    } else {
                        variableNames.forEach(function (varName) {
                            if (varName === 'out') {
                                hasOutParam = true;
                            }
                            bodyParams.push(varName);
                        });
                    }

                    var params;

                    if (hasOutParam) {
                        params = bodyParams.join(',');
                    } else {
                        params = 'out' + (bodyParams.length ? ', ' + bodyParams.join(', ') : '');
                    }

                    template.code(',\n').line('function(' + params + ') {').indent(function () {
                        _this.generateCodeForChildren(template);
                    }).indent().code('}');
                }

                if (hasNestedTags || isNestedTag || hasOutParam) {
                    if (!hasBodyFunc) {
                        template.code(',null');
                    }
                    var options = [];

                    if (hasNestedTags) {
                        options.push('hasNestedTags: 1');
                    }

                    if (hasOutParam) {
                        options.push('hasOutParam: 1');
                    }

                    if (isNestedTag) {
                        options.push('targetProperty: ' + JSON.stringify(tag.targetProperty));
                        options.push('parent: ' + parentNestedTagVar);
                        if (tag.isRepeated) {
                            options.push('isRepeated: 1');
                        }
                    }

                    template.code(',\n').code(template.indentStr() + '{ ' + options.join(', ') + ' }');
                }
            });
        });
    }
};

module.exports = TagHandlerNode;
