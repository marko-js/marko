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
var raptorModulesResolver = require('raptor-modules/resolver');

function addHandlerVar(template, renderer) {
    var handlerVars = template._handlerVars || (template._handlerVars = {});
    var handlerVar = handlerVars[renderer];
    if (!handlerVar) {
        handlerVars[renderer] = handlerVar = renderer.replace(/[.\-\/]/g, '_').replace(/^[_]+/g, '');
        template.addStaticVar(handlerVar, 'require(' + stringify(renderer) + ')');
    }
    return handlerVar;
}
function getPropsStr(props, template) {
    var propsArray = [];
    if (props) {
        template.indent(function () {
            forEachEntry(props, function (name, value) {
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
function TagHandlerNode(tag) {
    if (!this.nodeType) {
        TagHandlerNode.$super.call(this);
    }
    this.tag = tag;
    this.dynamicAttributes = null;
    this.preInvokeCode = [];
    this.postInvokeCode = [];
    this.inputExpression = null;
}
TagHandlerNode.convertNode = function (node, tag) {
    extend(node, TagHandlerNode.prototype);
    TagHandlerNode.call(node, tag);
};
TagHandlerNode.prototype = {
    addDynamicAttribute: function (name, value) {
        if (!this.dynamicAttributes) {
            this.dynamicAttributes = {};
        }
        this.dynamicAttributes[name] = value;
    },
    setDynamicAttributesProperty: function(name) {
        this.dynamicAttributesProperty = name;
    },
    addPreInvokeCode: function (code) {
        this.preInvokeCode.push(code);
    },
    addPostInvokeCode: function (code) {
        this.postInvokeCode.push(code);
    },
    setInputExpression: function (expression) {
        this.inputExpression = expression;
    },
    doGenerateCode: function (template) {
        var rendererPath = raptorModulesResolver.deresolve(this.tag.renderer, template.dirname);
        var handlerVar = addHandlerVar(template, rendererPath);

        this.tag.forEachImportedVariable(function (importedVariable) {
            this.setProperty(importedVariable.targetProperty, template.makeExpression(importedVariable.expression));
        }, this);
        
        var _this = this;
        var variableNames = [];
        _this.tag.forEachVariable(function (nestedVar) {
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
        if (_this.preInvokeCode.length) {
            _this.preInvokeCode.forEach(function (code) {
                template.indent().code(code).code('\n');
            });
        }

        

        template.contextHelperMethodCall('t', function () {
            template.code('\n').indent(function () {
                template.line(handlerVar + ',').indent();
                if (_this.inputExpression) {
                    template.code(_this.inputExpression);
                } else {
                    if (_this.dynamicAttributes) {
                        template.indent(function() {
                            _this.setProperty(_this.dynamicAttributesProperty, template.makeExpression(getPropsStr(_this.dynamicAttributes, template)));
                        });
                    }

                    template.code(getPropsStr(_this.getProperties(), template));
                }
                if (_this.hasChildren()) {
                    var bodyParams = [];
                    variableNames.forEach(function (varName) {
                        bodyParams.push(varName);
                    });
                    template.code(',\n').line('function(' + bodyParams.join(',') + ') {').indent(function () {
                        _this.generateCodeForChildren(template);
                    }).indent().code('}');
                }
            });
        });

        if (_this.postInvokeCode.length) {
            _this.postInvokeCode.forEach(function (code) {
                template.indent().code(code).code('\n');
            });
        }
    }
};

module.exports = TagHandlerNode;