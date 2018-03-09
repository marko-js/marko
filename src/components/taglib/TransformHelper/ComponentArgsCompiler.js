"use strict";

function finalizeArgs(args, builder) {
    var lastArgIndex = 0;

    for (var i = 0; i < args.length; i++) {
        if (args[i] === undefined) {
            args[i] = builder.literalNull();
        } else {
            lastArgIndex = i;
        }
    }

    // Mutate the array to trim off the excess arguments
    args.length = lastArgIndex + 1;
    return args;
}

class ComponentArgs {
    constructor() {
        this.key = null;
        this.customEvents = null;
        this.isUserAssignedKey = false;
    }

    setKey(key, isUserAssignedKey) {
        this.key = key;
        this.isUserAssignedKey = isUserAssignedKey === true;
    }

    addCustomEvent(options) {
        if (!this.customEvents) {
            this.customEvents = [];
        }

        this.customEvents.push([
            options.eventType,
            options.targetMethod,
            options.isOnce,
            options.extraArgs
        ]);
    }

    compile(transformHelper) {
        if (!this.key && !this.customEvents) {
            return;
        }

        var el = transformHelper.el;

        var builder = transformHelper.builder;

        var args = new Array(4);
        args[0] = builder.identifier("__component");
        args[1] = this.key;

        if (this.customEvents) {
            args[2] = builder.literal(this.customEvents);
        }

        args = finalizeArgs(args, builder);

        if (el.type === "CustomTag") {
            el.generateRenderTagCode = function(codegen, tagVar, tagArgs) {
                tagArgs = tagArgs.concat(args);
                return codegen.builder.functionCall(tagVar, tagArgs);
            };
        } else {
            el.onBeforeGenerateCode(event => {
                let funcTarget = builder.memberExpression(
                    builder.identifierOut(),
                    builder.identifier("c")
                );
                let funcArgs = [args];

                event.insertCode(builder.functionCall(funcTarget, funcArgs));
            });

            el.onAfterGenerateCode(event => {
                let funcTarget = builder.memberExpression(
                    builder.identifierOut(),
                    builder.identifier("c")
                );
                let funcArgs = [builder.literalNull()];

                event.insertCode(builder.functionCall(funcTarget, funcArgs));
            });
        }
    }
}

module.exports = ComponentArgs;
