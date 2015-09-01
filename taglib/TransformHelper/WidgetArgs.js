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

function WidgetArgs() {
    this.id = null;
    this.customEvents = null;
    this.extend = null;
    this.extendConfig = null;
    this.extendState = null;

    this.empty = true;
}

WidgetArgs.prototype = {
    setId: function(id) {
        this.empty = false;

        this.id = id;
    },

    getId: function() {
        return this.id;
    },

    addCustomEvent: function(eventType, targetMethod) {
        this.empty = false;

        if (!this.customEvents) {
            this.customEvents = [];
        }

        this.customEvents.push(JSON.stringify(eventType));
        this.customEvents.push(targetMethod);
    },

    setExtend: function(extendType, extendConfig, extendState) {
        this.empty = false;

        this.extend = extendType;
        this.extendConfig = extendConfig;
        this.extendState = extendState;
    },

    compileWidgetArgs: function(node, template) {
        if (this.empty) {
            return;
        }

        var id = this.id;
        var customEvents = this.customEvents;
        var extend = this.extend;
        var extendConfig = this.extendConfig;
        var extendState = this.extendState;

        template.addStaticVar('__widgetArgs',
            'require("marko-widgets/taglib/helpers/widgetArgs")');

        template.addStaticVar('_cleanupWidgetArgs',
            '__widgetArgs.cleanup');

        node.addBeforeCode(function() {

            // Make sure the nested widget has access to the ID of the containing
            // widget if it is needed
            var shouldProvideScope = id || customEvents;

            var widgetArgsParts = [shouldProvideScope ? 'widget.id' : 'null'];

            if (id != null) {
                widgetArgsParts.push(id.toString());
            } else {
                widgetArgsParts.push('null');
            }

            if (customEvents) {
                widgetArgsParts.push('[' + customEvents.join(',') + ']');
            }

            if (extend) {
                if (!customEvents) {
                    widgetArgsParts.push('null');
                }

                widgetArgsParts.push(extend);
                widgetArgsParts.push(extendConfig);
                widgetArgsParts.push(extendState);
            }

            return template.makeExpression('__widgetArgs(out, ' + widgetArgsParts.join(', ') + ');');
        });

        node.addAfterCode(template.makeExpression('_cleanupWidgetArgs(out);'));
    }
};

module.exports = WidgetArgs;