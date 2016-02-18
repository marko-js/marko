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

module.exports = function assignWidgetId(isRepeated) {
    // First check if we have already assigned an ID to thie element
    var widgetIdInfo = this.widgetIdInfo;

    if (widgetIdInfo) {
        return this.widgetIdInfo;
    }

    var el = this.el;
    var context = this.context;
    var builder = this.builder;

    var nestedIdExpression;
    var idExpression;

    var containingWidgetNode = this.getContainingWidgetNode();
    if (!containingWidgetNode) {
        // We are assigning a widget ID to a nested widget in a template that does not have a widget.
        // That means we do not have access to the parent widget variable as part of a closure. We
        // need to look it up out of the `out.data` map
        if (!context.isFlagSet('hasWidgetVar')) {
            context.setFlag('hasWidgetVar');

            var getCurrentWidgetVar = context.importModule('__getCurrentWidget',
                this.getMarkoWidgetsRequirePath('marko-widgets/taglib/helpers/getCurrentWidget'));

            context.addVar('widget', builder.functionCall(getCurrentWidgetVar, [builder.identifierOut()]));
        }
    }

    // In order to attach a DOM event listener directly we need to make sure
    // the target HTML element has an ID that we can use to get a reference
    // to the element during initialization. We generate this unique ID
    // at compile-time to allow consistent IDs during rendering.
    // We need to handle the following scenarios:
    //
    // 1) The HTML element already has an "id" attribute
    // 2) The HTML element has a "w-id" attribute (we already converted this
    //    to an "id" attribute above)
    // 3) The HTML does not have an "id" or "w-el-id" attribute. We must add
    //    an "id" attribute with a unique ID.

    var isCustomTag = el.type !== 'HtmlElement';

    if (el.hasAttribute('w-id')) {
        let widgetId = el.getAttributeValue('w-id');

        el.removeAttribute('w-id');

        idExpression = this.buildWidgetElIdFunctionCall(widgetId);

        nestedIdExpression = widgetId;


        if (isCustomTag) {
            // The element is a custom tag
            this.getWidgetArgs().setId(nestedIdExpression);
        } else {
            if (el.hasAttribute('id')) {
                this.addError('The "w-id" attribute cannot be used in conjuction with the "id" attribute');
                return;
            }
            el.setAttributeValue('id', idExpression);
        }
    } else if (el.hasAttribute('id')) {
        idExpression = el.getAttributeValue('id');

        if (el.isFlagSet('hasWidgetBind') || el.isFlagSet('hasWidgetExtend')) {
            // We have to attach a listener to the root element of the widget
            // We will use an empty string as an indicator that it is the root widget
            // element.
            nestedIdExpression = builder.literal('');
        } else {
            // Convert the raw String to a JavaScript expression. we need to prefix
            // with '#' to make it clear this is a fully resolved element ID
            nestedIdExpression = builder.concat(
                builder.literal('#'),
                idExpression);
        }
    } else {
        // Case 3 - We need to add a unique "id" attribute
        let uniqueElId = this.nextUniqueId();

        nestedIdExpression = isRepeated ? builder.literal(uniqueElId + '[]') : builder.literal(uniqueElId);

        idExpression = this.buildWidgetElIdFunctionCall(nestedIdExpression);

        if (isCustomTag) {
            this.getWidgetArgs().setId(nestedIdExpression);
        } else {
            el.setAttributeValue('id', idExpression);
        }
    }

    var transformHelper = this;

    this.widgetIdInfo = {
        idExpression: idExpression,
        nestedIdExpression: nestedIdExpression,
        idVarNode: null,
        createIdVarNode: function() {
            if (this.idVarNode) {
                return this.idVarNode;
            }

            let uniqueElId = transformHelper.nextUniqueId();
            let idVarName = '__widgetId' + uniqueElId;
            let idVar = builder.identifier(idVarName);

            this.idVarNode = builder.vars([
                {
                    id: idVarName,
                    init: idExpression
                }
            ]);

            this.idExpression = idExpression = idVar;

            this.nestedIdExpression = nestedIdExpression = builder.concat(
                builder.literal('!'),
                idVar);

            if (isCustomTag) {
                transformHelper.getWidgetArgs().setId(nestedIdExpression);
            } else {

                el.setAttributeValue('id', idExpression);
            }

            return this.idVarNode;
        }
    };

    return this.widgetIdInfo;
};