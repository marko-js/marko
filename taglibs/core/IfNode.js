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
function IfNode(props) {
    IfNode.$super.call(this, 'if');
    if (props) {
        this.setProperties(props);
    }
}

IfNode.nodeType = 'element';

IfNode.prototype = {
    doGenerateCode: function (template) {
        var test = this.getProperty('test');
        if (!test) {
            this.addError('"test" attribute is required');
        }
        template.statement('if (' + test + ') {').indent(function () {
            this.generateCodeForChildren(template);
        }, this).line('}');
    }
};

module.exports = IfNode;