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
function TemplateNode(props) {
    TemplateNode.$super.call(this, 'c-template');
    if (props) {
        this.setProperties(props);
    }
}

TemplateNode.nodeType = 'element';

TemplateNode.prototype = {
    doGenerateCode: function (template) {
        var params = this.getProperty('params');
        if (params) {
            params = params.split(/(?:\s*,\s*)|(?:\s+)/g);
            params.forEach(function (param) {
                param = param.trim();
                if (param.length) {
                    template.addVar(param, 'data.' + param);
                }
            }, this);
        } else {
            params = null;
        }
        
        this.generateCodeForChildren(template);
    }
};

module.exports = TemplateNode;