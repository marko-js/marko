"use strict";

var ATTACH_DETACH_KEY = Symbol("attach-detach");

function isUpperCase(c) {
    return c == c.toUpperCase();
}

function addDelegatedEventListener(transformHelper, options) {
    var el = transformHelper.el;

    if (transformHelper.hasBoundComponentForTemplate() === false) {
        transformHelper.addError(
            "Unable to handle event " +
                options.eventType +
                ". HTML element is not nested within a component."
        );
        return;
    }

    var builder = transformHelper.builder;

    var addDelegatedEventMethod = builder.memberExpression(
        builder.identifier("__component"),
        builder.identifier("d")
    );

    var addDelegatedEventArgs = [options.eventType, options.targetMethod];

    addDelegatedEventArgs.push(options.isOnce);

    if (options.extraArgs) {
        addDelegatedEventArgs.push(builder.arrayExpression(options.extraArgs));
    }

    var propValue = builder.functionCall(
        addDelegatedEventMethod,
        addDelegatedEventArgs
    );
    var propName = "on" + options.eventType.value;
    el.setPropertyValue(propName, propValue, false);

    if (
        options.eventType.value === "attach" ||
        options.eventType.value === "detach"
    ) {
        if (
            !transformHelper.context.data[ATTACH_DETACH_KEY] &&
            transformHelper.context.outputType === "vdom"
        ) {
            transformHelper.context.data[ATTACH_DETACH_KEY] = true;
            transformHelper.context.importModule(
                null,
                "marko/components/attach-detach"
            );
        }
    }
}

function addCustomEventListener(transformHelper, options) {
    var builder = transformHelper.builder;

    // Make sure the component has an assigned scope ID so that we can bind the custom event listener
    var componentArgs = transformHelper.getComponentArgs();

    if (options.extraArgs) {
        options.extraArgs = builder.arrayExpression(options.extraArgs);
    }

    componentArgs.addCustomEvent(options);
}

module.exports = function handleComponentEvents() {
    var el = this.el;
    var builder = this.builder;
    var context = this.context;
    var isCustomTag = el.type !== "HtmlElement";
    // We configured the Marko compiler to attach a flag to nodes that
    // have one or more attributes that match the "w-on*" pattern.
    // We still need to loop over the properties to find and handle
    // the properties corresponding to those attributes.
    var hasComponentEvents = this.el.isFlagSet("hasComponentEvents") === true;

    if (hasComponentEvents) {
        var attrs = el.getAttributes().concat([]);

        attrs.forEach(attr => {
            var eventType;
            var targetMethod;
            var attrName = attr.name;
            var argument = attr.argument;
            var parsedArgs;
            var extraArgs;
            var isOnce = false;

            if (!attrName) {
                return;
            }

            // handles on-* and once-*
            if (attrName.startsWith("on") && argument) {
                isOnce = attrName.startsWith("once");

                if (isOnce) {
                    eventType = attrName.substring(4); // Chop off "once"
                } else {
                    eventType = attrName.substring(2); // Chop off "on"
                }
                try {
                    parsedArgs = builder.parseJavaScriptArgs(argument);
                } catch (err) {
                    this.addError(
                        'Invalid Javascript Expression for "' +
                            attrName +
                            '": ' +
                            err
                    );
                    return;
                }

                targetMethod = builder.replacePlaceholderEscapeFuncs(
                    parsedArgs[0],
                    context
                );

                if (parsedArgs.length > 1) {
                    extraArgs = parsedArgs.slice(1);
                }
            } else if (attrName.startsWith("w-on")) {
                context.deprecate(
                    '"w-on*" attributes are deprecated. Please use "on*()" instead.'
                );
                eventType = attrName.substring(4); // Chop off "w-on"
                targetMethod = attr.value;
            }

            if (!eventType || !targetMethod) {
                return;
            }

            el.removeAttribute(attrName);
            isOnce = builder.literal(isOnce);

            if (isCustomTag) {
                this.assignComponentId(true /* repeated */);

                // We are adding an event listener for a custom event (not a DOM event)
                if (eventType.startsWith("-")) {
                    // Remove the leading dash.
                    // Example: w-on-before-show → before-show
                    eventType = eventType.substring(1);
                } else if (isUpperCase(eventType.charAt(0))) {
                    // Convert first character to lower case:
                    // Example: w-onBeforeShow → beforeShow
                    eventType =
                        eventType.charAt(0).toLowerCase() +
                        eventType.substring(1);
                }

                eventType = builder.literal(eventType);

                // Node is for a custom tag
                addCustomEventListener(this, {
                    eventType,
                    targetMethod,
                    extraArgs,
                    isOnce
                });
            } else {
                // We are adding an event listener for a DOM event (not a custom event)
                if (eventType.startsWith("-")) {
                    // Remove the leading dash. Preserve casing.
                    // Example: on-before-show → before-show
                    // Example: on-CAPS-event → CAPS-event
                    eventType = eventType.substring(1);
                } else {
                    // Lowercase the string
                    // Example: onMouseOver → mouseover
                    eventType = eventType.toLowerCase();
                }

                eventType = builder.literal(eventType);

                addDelegatedEventListener(this, {
                    eventType,
                    targetMethod,
                    extraArgs,
                    isOnce
                });
            }
        });
    }
};
