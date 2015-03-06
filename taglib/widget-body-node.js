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
function BodyNode(props) {
    BodyNode.$super.call(this);
    if (props) {
        this.setProperties(props);
    }
}
BodyNode.prototype = {
    doGenerateCode: function (template) {
        template.addStaticVar('__widgetBody',
            'require("marko-widgets/taglib/helpers").widgetBody');

        var escapeXml = template.getEscapeXmlFunction();

        var widgetBodyArgs = this.getProperty('widgetBodyArgs');

        // console.log(module.id, this);
        template.statement('__widgetBody(out, ' +
            this.getProperty('body') +
            ', ' +
            escapeXml +
            (widgetBodyArgs ? ', ' + widgetBodyArgs : '') + 
            ');');
    }
};

module.exports = BodyNode;
