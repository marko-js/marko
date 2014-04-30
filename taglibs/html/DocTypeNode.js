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

function DocTypeNode(props) {
    DocTypeNode.$super.call(this);
    if (props) {
        this.setProperties(props);
    }
}
DocTypeNode.nodeType = 'element';

DocTypeNode.prototype = {
    doGenerateCode: function (template) {
        var doctype = this.getAttribute('value') || this.getProperty('value');
        template.text('<!DOCTYPE ');
        template.parseExpression(doctype, {
            text: function (text, escapeXml) {
                template.text(text);
            },
            expression: function (expression) {
                template.write(expression);
            },
            error: function (message) {
                this.addError('Invalid doctype: "' + doctype + '". ' + message);
            }
        }, this);
        template.text('>');
    }
};

module.exports = DocTypeNode;