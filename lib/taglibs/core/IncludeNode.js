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
    'raptor/templating/taglibs/core/IncludeNode',
    'raptor/templating/compiler/Node',
    ['raptor'],
    function(raptor, require) {
        "use strict";
        
        var stringify = require('raptor/json/stringify'),
            extend = raptor.extend;
        
        var IncludeNode = function(props) {
            IncludeNode.superclass.constructor.call(this);
            if (props) {
                this.setProperties(props);
            }
        };

        IncludeNode.convertNode = function(node, template) {
            extend(node, IncludeNode.prototype);
            IncludeNode.call(node);

            node.setProperty("template", stringify(template));
        };
        
        IncludeNode.prototype = {
            doGenerateCode: function(template) {
                var templateName = this.getProperty("template"),
                    templateData = this.getProperty("templateData") || this.getProperty("template-data"),
                    resourcePath,
                    _this = this;
                
                if (templateName) {
                    this.removeProperty("template");
                    var dataExpression;
                    
                    if (templateData) {
                        dataExpression = templateData;
                    }
                    else {


                        dataExpression = {
                            toString: function() {
                                var propParts = [];
                        
                                _this.forEachPropertyNS('', function(name, value) {
                                    name = name.replace(/-([a-z])/g, function(match, lower) {
                                        return lower.toUpperCase();
                                    });

                                    propParts.push(stringify(name) + ": " + value);
                                }, _this);
                                
                                if (_this.hasChildren()) {
                                    propParts.push(stringify("invokeBody") + ": " +  _this.getBodyContentFunctionExpression(template, false));
                                }

                                return "{" + propParts.join(", ") + "}";
                            }
                        };
                    }
                    
                    
                    template.include(templateName, dataExpression);
                    
                }
                else if ((resourcePath = this.getAttribute("resource"))) {
                    var isStatic = this.getProperty("static") !== false;
                    if (isStatic) {
                        var resource = require('raptor/resources').findResource(resourcePath);
                        if (!resource.exists()) {
                            this.addError('"each" attribute is required');
                            return;
                        }
                        
                        template.write(stringify(resource.readAsString()));
                    }
                }
                else {
                    this.addError('"template" or "resource" attribute is required');
                }
            }
            
        };
        
        return IncludeNode;
    });