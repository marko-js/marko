'use strict';

class ComponentArgs {

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

        // Make sure the nested component has access to the ID of the containing
        // component if it is needed
        var shouldProvideScope = id || customEvents;

        var args = [];

        if (shouldProvideScope) {
            args.push(builder.identifier('__component'));
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
            let componentArgsVar = transformHelper.context.addStaticVar('marko_componentArgs',
                builder.require(builder.literal('marko/components/taglib/helpers/componentArgs')));

            let componentArgsFunctionCall = builder.functionCall(componentArgsVar, [
                builder.identifierOut(),
                builder.literal(args)
            ]);
            let cleanupComponentArgsFunctionCall = this.buildCleanupComponentArgsFunctionCall(transformHelper);

            el.onBeforeGenerateCode((event) => {
                event.insertCode(componentArgsFunctionCall);
            });

            el.onAfterGenerateCode((event) => {
                event.insertCode(cleanupComponentArgsFunctionCall);
            });
        }
    }

    buildCleanupComponentArgsFunctionCall(transformHelper) {
        var context = transformHelper.context;
        var builder = transformHelper.builder;

        var cleanupComponentArgsVar = context.addStaticVar('marko_cleanupComponentArgs',
            'marko_componentArgs.cleanup');

        return builder.functionCall(cleanupComponentArgsVar, [builder.identifierOut()]);
    }
}

module.exports = ComponentArgs;