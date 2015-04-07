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
var varNameRegExp = /^[A-Za-z_][A-Za-z0-9_]*$/;
function VarNode(props) {
    VarNode.$super.call(this);
    if (props) {
        this.setProperties(props);
    }
}
VarNode.prototype = {
    javaScriptOnly: true,
    doGenerateCode: function (template) {
        var varName = this.getProperty('name');
        var value = this.getProperty('value') || this.getProperty('string-value');
        if (!varName) {
            this.addError('"name" attribute is required');
        } else if (!varNameRegExp.test(varName)) {
            this.addError('Invalid variable name of "' + varName + '"');
            varName = null;
        }

        var isStatic = this.getProperty('static');

        if (varName) {
            if (isStatic) {
                template.addStaticVar(varName, value);
            } else {
                template.statement('var ' + varName + (value ? ' = ' + value : '') + ';');    
            }
        }
    }
};
module.exports = VarNode;