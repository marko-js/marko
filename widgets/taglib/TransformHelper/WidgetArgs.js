'use strict';

var getRequirePath = require('../getRequirePath');

class WidgetArgs {

    constructor() {
        this.id = null;
        this.customEvents = null;
        this.empty = true;
    }

    setId(id) {
        this.empty = false;

        this.id = id;
    }

    getId() {
        return this.id;
    }

    addCustomEvent(eventType, targetMethod, extraArgs) {
        this.empty = false;

        if (!this.customEvents) {
            this.customEvents = [];
        }

        this.customEvents.push(eventType);
        this.customEvents.push(targetMethod);
        this.customEvents.push(extraArgs);
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

        // Make sure the nested widget has access to the ID of the containing
        // widget if it is needed
        var shouldProvideScope = id || customEvents;

        let widgetArgsVar = context.addStaticVar('marko_widgetArgs',
            'require("' + getRequirePath('marko/widgets/taglib/helpers/widgetArgs', context) + '")');

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

        return builder.functionCall(widgetArgsVar, functionCallArgs);
    }

    buildCleanupWidgetArgsFunctionCall(transformHelper) {
        var context = transformHelper.context;
        var builder = transformHelper.builder;

        var cleanupWidgetArgsVar = context.addStaticVar('marko_cleanupWidgetArgs',
            'marko_widgetArgs.cleanup');

        return builder.functionCall(cleanupWidgetArgsVar, [builder.identifierOut()]);
    }
}

module.exports = WidgetArgs;