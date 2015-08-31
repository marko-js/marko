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
    var props = this.nodeProps;

    var widgetExtend = props['w-extend'];
    if (widgetExtend == null) {
        return;
    }

    var node = this.node;

    var widgetArgs = this.getWidgetArgs();
    var template = this.template;

    if (widgetExtend === '') {
        widgetExtend = this.getDefaultWidgetModule();
        if (!widgetExtend) {
            node.addError('Unable to find default widget module when using w-extend without a value');
            return;
        }
    }

    node.data.widgetExtend = true;

    node.addNestedVariable('widget');

    var extendConfig = props['w-config'];

    if (extendConfig) {
        extendConfig = template.makeExpression(extendConfig);
    } else {
        extendConfig = template.makeExpression('data.widgetConfig');
    }

    var extendState = props['w-state'];

    if (extendState) {
        extendState = template.makeExpression(extendState);
    } else {
        extendState = template.makeExpression('data.widgetState');
    }

    widgetArgs.setExtend(
            this.registerWidgetType(widgetExtend),
            extendConfig,
            extendState);

    // Do some cleanup
    delete props['w-extend'];
    delete props['w-config'];
    delete props['w-state'];
};