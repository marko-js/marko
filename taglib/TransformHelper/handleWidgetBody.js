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

module.exports = function handleWidgetBody() {
    let el = this.el;

    if (!el.hasAttribute('w-body')) {
        return;
    }

    let context = this.context;
    let builder = this.builder;

    let widgetTagNode = this.getContainingWidgetNode();

    if (!widgetTagNode) {
        this.addError('w-body can only be used within the scope of w-bind');
        return;
    }


    let widgetBodyExpression = el.getAttributeValue('w-body');
    el.removeAttribute('w-body');

    if (widgetBodyExpression) {
        var widgetIdInfo = this.assignWidgetId(true /* repeated */);
        if (!widgetIdInfo.idVarNode) {
            let idVarNode = widgetIdInfo.createIdVarNode();
            el.onBeforeGenerateCode((event) => {
                event.insertCode(idVarNode);
            });
        }
    } else {
        this.assignWidgetId(false /* not repeated */);
        widgetBodyExpression = builder.memberExpression(
            builder.identifier('data'),
            builder.identifier('widgetBody')
        );

        widgetTagNode.setAttributeValue('body', this.getNestedIdExpression());
    }

    let widgetBodyVar = context.importModule('__widgetBody', this.getMarkoWidgetsRequirePath('marko-widgets/taglib/helpers/widgetBody'));

    let widgetBodyFunctionCall = builder.functionCall(widgetBodyVar, [
        builder.identifierOut(),
        this.getIdExpression(),
        widgetBodyExpression,
        builder.identifier('widget')
    ]);

    el.appendChild(widgetBodyFunctionCall);
};