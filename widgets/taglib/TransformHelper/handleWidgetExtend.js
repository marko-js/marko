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

module.exports = function handleWidgetExtend() {
    var el = this.el;

    if (!el.hasAttribute('w-extend')) {
        return;
    }

    var extendAttr = el.getAttribute('w-extend');

    var modulePath;
    var widgetArgs = this.getWidgetArgs();
    var context = this.context;
    var builder = this.builder;

    if (extendAttr.value == null) {
        modulePath = this.getDefaultWidgetModule();
        if (!modulePath) {
            this.addError('Unable to find default widget module when using w-extend without a value');
            return;
        }
    } else if (extendAttr.isLiteralValue()) {
        modulePath = extendAttr.literalValue; // The value of the literal value
        if (typeof modulePath !== 'string') {
            this.addError('The value for the "w-extend" attribute should be a string.');
            return;
        }
    } else {
        throw new Error('Not yet implemented');
    }

    this.widgetStack.push({
        el: el,
        extend: true
    });

    el.addNestedVariable('widget');

    var extendConfig = el.getAttributeValue('w-config');

    if (!extendConfig) {
        // extendConfig = data.widgetConfig
        extendConfig = builder.memberExpression(
            builder.identifier('data'),
            builder.identifier('widgetConfig'));
    }

    var extendState = el.getAttributeValue('w-state');

    if (!extendState) {
        // extendState = data.widgetState
        extendState = builder.memberExpression(
            builder.identifier('data'),
            builder.identifier('widgetState'));
    }

    var widgetTypeVar = context.addStaticVar('__widgetType', this.buildWidgetTypeNode(modulePath));

    widgetArgs.setExtend(
            widgetTypeVar,
            extendConfig,
            extendState);

    // Do some cleanup
    el.removeAttribute('w-extend');
    el.removeAttribute('w-config');
    el.removeAttribute('w-state');
};