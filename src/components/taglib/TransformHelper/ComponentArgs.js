'use strict';
class ComponentArgs {

    constructor() {
        this.key = null;
        this.customEvents = null;
    }

    setKey(key) {
        this.key = key;
    }

    addCustomEvent(eventType, targetMethod, extraArgs) {
        if (!this.customEvents) {
            this.customEvents = [];
        }

        this.customEvents.push([eventType, targetMethod, extraArgs]);
    }

    compile(transformHelper) {
        if (!this.key && !this.customEvents) {
            return;
        }

        var el = transformHelper.el;

        var builder = transformHelper.builder;

        var args;

        if (this.key && this.customEvents) {
            args = builder.literal([ this.key, builder.literal(this.customEvents) ]);
        } else if (this.customEvents) {
            args = builder.literal([ builder.literalNull(), builder.literal(this.customEvents) ]);
        } else {
            args = this.key;
        }

        if (el.type === 'CustomTag') {
            var renderComponentHelper = transformHelper.context.helper('renderComponent');

            el.generateRenderTagCode = function(codegen, tagVar, tagArgs) {
                tagArgs = [tagVar].concat(tagArgs);

                tagArgs.push(args);

                return codegen.builder.functionCall(
                    renderComponentHelper,
                    tagArgs);
            };
        } else {
            el.onBeforeGenerateCode((event) => {
                let funcTarget = builder.memberExpression(builder.identifierOut(), builder.identifier('c'));
                let funcArgs = [args];

                event.insertCode(builder.functionCall(funcTarget, funcArgs));
            });

            el.onAfterGenerateCode((event) => {
                let funcTarget = builder.memberExpression(builder.identifierOut(), builder.identifier('c'));
                let funcArgs = [builder.literalNull()];

                event.insertCode(builder.functionCall(funcTarget, funcArgs));
            });
        }
    }
}

module.exports = ComponentArgs;
