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

function HtmlElementNode(props) {
    HtmlElementNode.$super.call(this);
    if (props) {
        this.setProperties(props);
    }
}
HtmlElementNode.nodeType = 'element';

HtmlElementNode.prototype = {
    doGenerateCode: function (template) {
        this.removeAttribute('tag-name');
        this.localName = this.getProperty('tagName');
        HtmlElementNode.$super.prototype.doGenerateCode.call(this, template);
    },

};

module.exports = HtmlElementNode;