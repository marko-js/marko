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
function RequireNode(props) {
    RequireNode.$super.call(this);
    if (props) {
        this.setProperties(props);
    }
}
RequireNode.prototype = {
    javaScriptOnly: true,
    
    doGenerateCode: function (template) {
        var module = this.getProperty('module');
        var varName = this.getProperty('var');

        if (!module) {
            this.addError('"module" attribute is required');
            return;
        }
        if (varName) {
            template.addStaticVar(varName, 'require(' + module + ')');
        } else {
            template.functionCall('require', module);
        }
    }
};

module.exports = RequireNode;