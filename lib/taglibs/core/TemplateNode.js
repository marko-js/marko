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
    "raptor/templating/taglibs/core/TemplateNode",
    'raptor/templating/compiler/Node',
    ['raptor'],
    function(raptor, require) {
        "use strict";

        var forEach = raptor.forEach;
        
        var TemplateNode = function(props) {
            TemplateNode.superclass.constructor.call(this);
            if (props) {
                this.setProperties(props);
            }
        };
        
        TemplateNode.prototype = {
        
            doGenerateCode: function(template) {
                var name = this.getProperty("name"),
                    params = this.getProperty("params");
                
                if (params) {
                    params = params.split(/(?:\s*,\s*)|(?:\s+)/g);
                    
                    forEach(params, function(param) {
                        param = param.trim();
                        if (param.length) {
                            template.addVar(param, "data." + param);
                        }
                    }, this);
                }
                else {
                    params = null;
                }
                
                this.forEachProperty(function(uri, name, value) {
                    if (!uri) {
                        uri = this.uri;
                    }
                    
                    if (name === 'functions' || name === 'importFunctions' || name === 'importHelperFunctions') {
                        forEach(value.split(/\s*[,;]\s*/g), function(funcName) {
                            var func = template.compiler.taglibs.getFunction(uri, funcName);
                            if (!func) {
                                this.addError('Function with name "' + funcName + '" not found in taglib "' + uri + '"');
                            }
                            else {
                                template.addHelperFunction(func.functionClass, funcName, func.bindToContext === true);
                            }
                        }, this);
                    }
                    else if (name === 'importHelperObject') {
                        var varName = value;
                        if (!template.compiler.taglibs.isTaglib(uri)) {
                            this.addError('Helper object not found for taglib "' + uri + '". Taglib with URI "' + uri + '" not found.');
                        }
                        else {
                            var helperObject = template.compiler.taglibs.getHelperObject(uri);
                            if (!helperObject) {
                                this.addError('Helper object not found for taglib "' + uri + '"');
                            }
                            else {
                                if (helperObject.className) {
                                    template.addVar(varName, "context.o(" + JSON.stringify(helperObject.className) + ")");
                                }
                                else if (helperObject.moduleName) {
                                    template.addStaticVar(varName, "require(" + JSON.stringify(helperObject.moduleName) + ")");
                                }
                            }
                        }
                            
                    }
                }, this);

                if (name) {
                    template.setTemplateName(name);
                }
                else if (!template.getTemplateName()) {
                    this.addError('The "name" attribute is required for the ' + this.toString() + ' tag or it must be passed in as a compiler option.');
                }
                
                
                
                this.generateCodeForChildren(template);
            }
        };
        
        return TemplateNode;
    });