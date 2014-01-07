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
    'raptor/templating/taglibs/core/ForNode',
    'raptor/templating/compiler/Node',
    ['raptor'],
    function(raptor, require) {
        "use strict";
        
        var forEachRegEx = /^\s*([A-Za-z_][A-Za-z0-9_]*)\s+in\s+(.+)$/,
            forEachPropRegEx = /^\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*,\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)\s+in\s+(.+)$/,
            stringify = require("raptor/json/stringify").stringify,
            parseForEach = function(value) {
                var match = value.match(forEachRegEx);
                if (match) {
                    return {
                        "var": match[1],
                        "in": match[2]
                    };
                }
                else {
                    match = value.match(forEachPropRegEx);
                    if (!match) {
                        throw new Error('Invalid each attribute of "' + value + '"');
                    }

                    return {
                        "nameVar": match[1],
                        "valueVar": match[2],
                        "in": match[3]
                    }; 
                }

                


                
            };
        
        var ForNode = function(props) {
            ForNode.superclass.constructor.call(this);
            if (props) {
                this.setProperties(props);    
            }
        };

        ForNode.prototype = {
            doGenerateCode: function(template) {
                var each = this.getProperty("each"),
                    eachProp = false,
                    separator = this.getProperty("separator"),
                    statusVar = this.getProperty("statusVar") || this.getProperty("varStatus");
                
                if (!each) {
                    this.addError('"each" attribute is required');
                    this.generateCodeForChildren(template);
                    return;
                }
                
                var parts;
                try
                {
                    parts = parseForEach(each);
                }
                catch(e) {
                    this.addError(e.message);
                    this.generateCodeForChildren(template);
                    return;
                }
                
                var items = template.makeExpression(parts["in"]),
                    varName = parts["var"],
                    nameVarName = parts.nameVar,
                    valueVarName = parts.valueVar;

                if (nameVarName) {
                    if (separator) {
                        this.addError('Separator is not supported when looping over properties');
                        this.generateCodeForChildren(template);
                        return;
                    }

                    if (statusVar) {
                        this.addError('Loop status variable not supported when looping over properties');
                        this.generateCodeForChildren(template);
                        return;
                    }
                }
                
                if (separator && !statusVar) {
                    statusVar = "__loop";
                }


                var funcName;

                var forEachParams;
                if (statusVar) {
                    forEachParams = [varName, statusVar];
                    
                    funcName = template.getStaticHelperFunction("forEachWithStatusVar", "fv");

                    template
                        .statement(funcName + '(' + items + ', function(' + forEachParams.join(",") + ') {') 
                        .indent(function() {
                            this.generateCodeForChildren(template);
                            if (separator) {
                                template
                                    .statement("if (!" + statusVar + ".isLast()) {")
                                    .indent(function() {
                                        template.write(template.isExpression(separator) ? separator.getExpression() : stringify(separator));    
                                    }, this)
                                    .line('}');
                            }
                        }, this)
                        .line('});');
                }
                else {
                    if (this.getProperty('forLoop') === true) {
                        forEachParams = ["__array", "__index", "__length", varName];
                        
                        template
                            .statement(template.getStaticHelperFunction("forLoop", "fl") + '(' + items + ', function(' + forEachParams.join(",") + ') {')
                            .indent(function() {
                                template
                                    .statement('for (;__index<__length;__index++) {') 
                                    .indent(function() {
                                        template.statement(varName + '=__array[__index];');
                                        this.generateCodeForChildren(template);    
                                    }, this)
                                    .line('}');
                                
                                this.generateCodeForChildren(template);
                            }, this)
                            .line('});');
                    }
                    else {
                        forEachParams = nameVarName ? [nameVarName, valueVarName] : [varName];
                        funcName = nameVarName ? template.getStaticHelperFunction("forEachProp", "fp") : 
                                              template.getStaticHelperFunction("forEach", "f");

                        template
                            .statement(funcName + '(' + items + ', function(' + forEachParams.join(",") + ') {') 
                            .indent(function() {
                                this.generateCodeForChildren(template);    
                            }, this)
                            .line('});');
                    }
                }
                
                
            }
        
        };
        
        return ForNode;
    });