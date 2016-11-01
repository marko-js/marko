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

var getRequirePath = require('../getRequirePath');

class WidgetArgs {

    constructor() {
        this.id = null;
        this.customEvents = null;
        this.extend = null;
        this.extendConfig = null;
        this.extendState = null;

        this.empty = true;
    }

    setId(id) {
        this.empty = false;

        this.id = id;
    }

    getId() {
        return this.id;
    }

    addCustomEvent(eventType, targetMethod) {
        this.empty = false;

        if (!this.customEvents) {
            this.customEvents = [];
        }

        this.customEvents.push(eventType);
        this.customEvents.push(targetMethod);
    }

    setExtend(extendType, extendConfig, extendState) {
        this.empty = false;

        this.extend = extendType;
        this.extendConfig = extendConfig;
        this.extendState = extendState;
    }

    compile(transformHelper) {
        if (this.empty) {
            return;
        }

        var el = transformHelper.el;

        let widgetArgsFunctionCall = this.buildWidgetArgsFunctionCall(transformHelper);
        let cleanupWidgetArgsFunctionCall = this.buildCleanupWidgetArgsFunctionCall(transformHelper);

        el.onBeforeGenerateCode((event) => {
            event.insertCode(widgetArgsFunctionCall);
        });

        el.onAfterGenerateCode((event) => {
            event.insertCode(cleanupWidgetArgsFunctionCall);
        });
    }

    buildWidgetArgsFunctionCall(transformHelper) {
        var context = transformHelper.context;
        var builder = transformHelper.builder;

        var id = this.id;
        var customEvents = this.customEvents;
        var extend = this.extend;
        var extendConfig = this.extendConfig;
        var extendState = this.extendState;

        // Make sure the nested widget has access to the ID of the containing
        // widget if it is needed
        var shouldProvideScope = id || customEvents;

        let widgetArgsVar = context.addStaticVar('__widgetArgs',
            'require("' + getRequirePath('marko-widgets/taglib/helpers/widgetArgs', context) + '")');

        var functionCallArgs = [
            builder.identifier('out')
        ];

        if (shouldProvideScope) {
            functionCallArgs.push(builder.memberExpression(
                builder.identifier('widget'),
                builder.identifier('id')
            ));
        } else {
            functionCallArgs.push(builder.literalNull());
        }

        if (id != null) {
            functionCallArgs.push(id);
        } else {
            functionCallArgs.push(builder.literalNull());
        }

        if (customEvents) {
            functionCallArgs.push(builder.literal(customEvents));
        }

        if (extend) {
            if (!customEvents) {
                functionCallArgs.push(builder.literalNull());
            }

            functionCallArgs.push(extend);
            functionCallArgs.push(extendConfig || builder.literalNull());
            functionCallArgs.push(extendState || builder.literalNull());
        }
        return builder.functionCall(widgetArgsVar, functionCallArgs);
    }

    buildCleanupWidgetArgsFunctionCall(transformHelper) {
        var context = transformHelper.context;
        var builder = transformHelper.builder;

        var cleanupWidgetArgsVar = context.addStaticVar('_cleanupWidgetArgs',
            '__widgetArgs.cleanup');

        return builder.functionCall(cleanupWidgetArgsVar, [builder.identifierOut()]);
    }
}

module.exports = WidgetArgs;