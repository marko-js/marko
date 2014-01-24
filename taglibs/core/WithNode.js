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
var AttributeSplitter = require('../../compiler').AttributeSplitter;
var varNameRegExp = /^[A-Za-z_][A-Za-z0-9_]*$/;
function WithNode(props) {
    WithNode.$super.call(this);
    if (props) {
        this.setProperties(props);
    }
}
WithNode.prototype = {
    doGenerateCode: function (template) {
        var vars = this.getProperty('vars');
        var _this = this;
        if (!vars) {
            this.addError('"vars" attribute is required');
        }
        var withVars = AttributeSplitter.parse(vars, { '*': { type: 'expression' } }, {
                ordered: true,
                errorHandler: function (message) {
                    _this.addError('Invalid variable declarations of "' + vars + '". Error: ' + message);
                }
            });
        var varDefs = [];
        raptor.forEach(withVars, function (withVar, i) {
            if (!varNameRegExp.test(withVar.name)) {
                this.addError('Invalid variable name of "' + withVar.name + '" in "' + vars + '"');
            }
            varDefs.push((i > 0 ? template.indentStr(1) + '    ' : '') + withVar.name + (withVar.value ? '=' + withVar.value : '') + (i < withVars.length - 1 ? ',\n' : ';'));
        }, this);
        template.statement('(function() {').indent(function () {
            template.statement('var ' + varDefs.join(''));
            this.generateCodeForChildren(template);
        }, this).line('}());');
    }
};
require('raptor-util').inherit(WithNode, require('../../compiler').Node);
module.exports = WithNode;