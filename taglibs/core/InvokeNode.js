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
var forEach = require('raptor-util').forEach;

function InvokeNode(props) {
    InvokeNode.$super.call(this);
    if (props) {
        this.setProperties(props);
    }
}

InvokeNode.prototype = {
    doGenerateCode: function (template) {
        var func = this.getProperty('function');
        var funcDef;
        var bodyParam;
        var definedFunctions = template.getAttribute('core:definedFunctions');
        if (!func) {
            this.addError('"function" attribute is required');
            return;
        }
        if (func.indexOf('(') === -1) {
            funcDef = definedFunctions ? definedFunctions[func] : null;
            var argParts = [];
            var validParamsLookup = {};
            var params = [];
            if (funcDef) {
                params = funcDef.params || [];
                bodyParam = funcDef.bodyParam;
                /*
                 * Loop over the defined parameters to figure out the names of allowed parameters and add them to a lookup
                 */
                forEach(params, function (param) {
                    validParamsLookup[param] = true;
                }, this);
            }
            var bodyArg = null;
            if (this.hasChildren()) {
                if (!funcDef || !funcDef.bodyParam) {
                    this.addError('Nested content provided when invoking macro "' + func + '" but defined macro does not support nested content.');
                } else {
                    bodyArg = this.getBodyContentExpression(template, false);
                }
            }
            /*
             * VALIDATION:
             * Loop over all of the provided attributes and make sure they are allowed 
             */
            this.forEachProperty(function (name, value) {
                if (name === 'function') {
                    return;
                }
                if (!validParamsLookup[name]) {
                    this.addError('Parameter with name "' + name + '" not supported for function with name "' + func + '". Allowed parameters: ' + params.join(', '));
                }
            }, this);
            /*
             * One more pass to build the argument list
             */
            forEach(params, function (param) {
                validParamsLookup[param] = true;
                if (param === bodyParam) {
                    argParts.push(bodyArg ? bodyArg : 'undefined');
                } else {
                    var arg = this.getAttribute(param);
                    if (arg == null) {
                        argParts.push('undefined');
                    } else {
                        argParts.push(this.getProperty(param));
                    }
                }
            }, this);
            template.write(func + '(' + argParts.join(',') + ')');
        } else {
            var funcName = func.substring(0, func.indexOf('('));
            funcDef = definedFunctions ? definedFunctions[funcName] : null;
            if (funcDef) {
                template.write(func);
            } else {
                template.statement(func + ';\n');
            }
        }
    }
};

module.exports = InvokeNode;