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
    "raptor/templating/taglibs/core/TagHandlerNode",
    'raptor/templating/compiler/Node',
    ['raptor'],
    function(raptor, require) {
        "use strict";
        
        var extend = raptor.extend,
            objects = require('raptor/objects'),
            forEach = raptor.forEach,
            forEachEntry = raptor.forEachEntry,
            stringify = require('raptor/json/stringify'),
            Expression = require('raptor/templating/compiler/Expression'),
            addHandlerVar = function(template, handlerClass) {
                var handlerVars = template._handlerVars || (template._handlerVars = {});
                
                var handlerVar = handlerVars[handlerClass];
                if (!handlerVar) {
                    handlerVars[handlerClass] = handlerVar = handlerClass.replace(/[.\-\/]/g, '_');
                    template.addStaticVar(handlerVar, template.getStaticHelperFunction("getTagHandler", "t") + "(" + stringify(handlerClass) + ")");
                }
                
                return handlerVar;
                
            },
            getPropsStr = function(props, template) {
                var propsArray = [];
            
                if (props) {
                    forEachEntry(props, function(name, value) {
                        if (value instanceof Expression) {
                            var expressionStr;
                            template.indent(function() {
                                expressionStr = value.expression.toString();
                            });
                            
                            propsArray.push(template.indentStr(1) + stringify(name) + ": " + expressionStr);
                        }
                        else if (typeof value === 'string' || typeof value === 'object') {
                            propsArray.push(template.indentStr(1) + stringify(name) + ": " + stringify(value));
                        }
                        else {
                            propsArray.push(template.indentStr(1) + stringify(name) + ": " + value);
                        }
                    });
                    
                    if (propsArray.length) {
                        return "{\n" + propsArray.join(',\n') + "\n" + template.indentStr() + "}";
                    }
                    else {
                        return "{}";
                    }
                }
                else {
                    return "{}";
                }
            };
        
        var TagHandlerNode = function(tag) {
            if (!this.nodeType) {
                TagHandlerNode.superclass.constructor.call(this);
            }
            this.tag = tag;
            this.dynamicAttributes = null;
            this.preInvokeCode = [];
            this.postInvokeCode = [];
            this.inputExpression = null;
        };
        
        TagHandlerNode.convertNode = function(node, tag) {
            extend(node, TagHandlerNode.prototype);
            TagHandlerNode.call(node, tag);
        };
        
        TagHandlerNode.prototype = {
            
            addDynamicAttribute: function(name, value) {
                if (!this.dynamicAttributes) {
                    this.dynamicAttributes = {};
                }
                
                this.dynamicAttributes[name] = value;
            },

            addPreInvokeCode: function(code) {
                this.preInvokeCode.push(code);
            },

            addPostInvokeCode: function(code) {
                this.postInvokeCode.push(code);
            },

            setInputExpression: function(expression) {
                this.inputExpression = expression;
            },
            
            doGenerateCode: function(template) {
                
                /*
                    context.t(
                        handler,
                        props,
                        bodyFunc,
                        dynamicAttributes,
                        namespacedProps)
                */
                
                ///////////////////
                
                
                var handlerVar = addHandlerVar(template, this.tag.handlerClass);
                
                this.tag.forEachImportedVariable(function(importedVariable) {
                    this.setProperty(importedVariable.targetProperty, new Expression(importedVariable.expression));
                }, this);
                
                
                var namespacedProps = raptor.extend({}, this.getPropertiesByNS());
                delete namespacedProps[''];
                var hasNamespacedProps = !objects.isEmpty(namespacedProps);
                
                ///////////
                
                var _this = this;

                var variableNames = [];

                _this.tag.forEachVariable(function(v) {
                    var varName;

                    if (v.nameFromAttribute) {
                        

                        var possibleNameAttributes = v.nameFromAttribute.split(/\s+or\s+|\s*,\s*/i);
                        for (var i=0,len=possibleNameAttributes.length; i<len; i++) {
                            var attrName = possibleNameAttributes[i],
                                keep = false;
                            if (attrName.endsWith('|keep')) {
                                keep = true;
                                attrName = attrName.slice(0, 0-'|keep'.length);
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
                            this.addError('Attribute ' + possibleNameAttributes.join(" or ") + ' is required');
                            varName = "_var"; // Let it continue with errors
                        }
                        
                    }
                    else {
                        varName = v.name;
                        if (!varName) {
                            this.addError('Variable name is required');
                            varName = "_var"; // Let it continue with errors
                        }
                    }

                    variableNames.push(varName);

                }, this);

                if (_this.preInvokeCode.length) {
                    _this.preInvokeCode.forEach(function(code) {
                        template
                            .indent()
                            .code(code)
                            .code("\n");
                    });
                }

                template.contextMethodCall("t", function() {
                    template
                        .code("\n")
                        .indent(function() {
                            template
                                .line(handlerVar + ',')
                                .indent();

                            if (_this.inputExpression) {
                                template.code(_this.inputExpression);
                            }
                            else {
                                template.code(getPropsStr(_this.getProperties(), template));
                            }
                                
                            
                            if (_this.hasChildren()) {
                                var bodyParams = [];
                                
                                forEach(variableNames, function(varName) {
                                    bodyParams.push(varName);
                                });
                                
                                template
                                    .code(',\n')
                                    .line("function(" + bodyParams.join(",") + ") {")
                                    .indent(function() {
                                        _this.generateCodeForChildren(template);
                                    })
                                    .indent()
                                    .code('}');
                            }
                            else {
                                if (hasNamespacedProps || _this.dynamicAttributes) {
                                    template
                                        .code(",\n")
                                        .indent().code("null");
                                }
                            }
                            
                            if (_this.dynamicAttributes) {
                                template
                                    .code(",\n")
                                    .indent().code(getPropsStr(_this.dynamicAttributes, template));
                            }
                            else {
                                if (hasNamespacedProps) {
                                    template
                                        .code(",\n")
                                        .indent().code("null");
                                }
                            }
                            
                            if (hasNamespacedProps) {
                                template
                                    .code(",\n")
                                    .line("{")
                                    .indent(function() {
                                        var first = true;
                                        forEachEntry(namespacedProps, function(uri, props) {
                                            if (!first) {
                                                template.code(',\n');
                                            }
                                            template.code(template.indentStr() + '"' + uri + '": ' + getPropsStr(props, template));
                                            first = false;
                                            
                                        });
                                    })
                                    .indent()
                                    .code("}");
                            }
                            
                        });
                });

                if (_this.postInvokeCode.length) {
                    _this.postInvokeCode.forEach(function(code) {
                        template
                            .indent()
                            .code(code)
                            .code("\n");
                    });
                }
            }
        };
        
        
        
        return TagHandlerNode;
    });