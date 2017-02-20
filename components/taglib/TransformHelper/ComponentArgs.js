'use strict';

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

        var builder = transformHelper.builder;

        var id = this.id;
        var customEvents = this.customEvents;

        // Make sure the nested widget has access to the ID of the containing
        // widget if it is needed
        var shouldProvideScope = id || customEvents;

        var args = [];

        if (shouldProvideScope) {
            args.push(builder.identifier('widget'));
        } else {
            args.push(builder.literalNull());
        }

        if (id != null) {
            args.push(id);
        } else {
            args.push(builder.literalNull());
        }

        if (customEvents) {
            args.push(builder.literal(customEvents));
        }

        if (el.tagDef && el.tagDef.template) {
            el.setAttributeValue('$w', builder.literal(args));
        } else {
            let widgetArgsVar = transformHelper.context.addStaticVar('marko_widgetArgs',
                builder.require(builder.literal('marko/widgets/taglib/helpers/widgetArgs')));

            let widgetArgsFunctionCall = builder.functionCall(widgetArgsVar, [
                builder.identifierOut(),
                builder.literal(args)
            ]);
            let cleanupWidgetArgsFunctionCall = this.buildCleanupWidgetArgsFunctionCall(transformHelper);

            el.onBeforeGenerateCode((event) => {
                event.insertCode(widgetArgsFunctionCall);
            });

            el.onAfterGenerateCode((event) => {
                event.insertCode(cleanupWidgetArgsFunctionCall);
            });
        }
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