'use strict';

var ATTACH_DETACH_KEY = Symbol('attach-detach');

var bubbleEventsLookup = {};

require('../../bubble').forEach(function(eventType) {
    bubbleEventsLookup[eventType] = true;
});

function isBubbleEvent(eventType) {
    return bubbleEventsLookup.hasOwnProperty(eventType);
}

function isUpperCase(c) {
    return c == c.toUpperCase();
}

function addBubblingEventListener(transformHelper, options) {
    var el = transformHelper.el;

    if (transformHelper.hasBoundComponentForTemplate() === false) {
        transformHelper.addError('Unable to handle event ' + options.eventType + '. HTML element is not nested within a component.');
        return;
    }

    var builder = transformHelper.builder;

    var addBubblingEventMethod = builder.memberExpression(
        builder.identifier('__component'),
        builder.identifier('d'));

    var addBubblingEventArgs = [
            options.targetMethod
        ];

    addBubblingEventArgs.push(options.isOnce);

    if (options.extraArgs) {
        addBubblingEventArgs.push(builder.arrayExpression(options.extraArgs));
    }

    var propValue = builder.functionCall(addBubblingEventMethod, addBubblingEventArgs);
    var propName = 'on' + options.eventType.value;
    el.setPropertyValue(propName, propValue, false);

    if (options.eventType.value === 'attach' || options.eventType.value === 'detach') {
        if (!transformHelper.context.data[ATTACH_DETACH_KEY] && transformHelper.context.outputType === 'vdom') {
            transformHelper.context.data[ATTACH_DETACH_KEY] = true;
            transformHelper.context.importModule(null, 'marko/components/attach-detach');
        }
    }
}

function addDirectEventListener(transformHelper, options) {
    var builder = transformHelper.builder;
    var el = transformHelper.el;

    var addDomEvent = builder.memberExpression(
        builder.identifier('__component'),
        builder.identifier('e'));

    let componentIdInfo = transformHelper.assignComponentId(true /* repeated */);
    let idVarNode = componentIdInfo.idVarNode ? null : componentIdInfo.createIdVarNode();

    var helperArgs = [
        options.eventType,
        options.targetMethod,
        componentIdInfo.idExpression,
        options.isOnce
    ];

    if (options.extraArgs) {
        helperArgs.push(builder.arrayExpression(options.extraArgs));
    }

    var addDomEventFunctionCall = builder.functionCall(addDomEvent, helperArgs);

    el.onBeforeGenerateCode((event) => {
        event.insertCode([
            idVarNode,
            addDomEventFunctionCall
        ]);
    });

    transformHelper.serializeKey();
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
    var isCustomTag = el.type !== 'HtmlElement';
    // We configured the Marko compiler to attach a flag to nodes that
    // have one or more attributes that match the "w-on*" pattern.
    // We still need to loop over the properties to find and handle
    // the properties corresponding to those attributes.
    var hasComponentEvents = this.el.isFlagSet('hasComponentEvents') === true;

    if (hasComponentEvents) {
        var attrs = el.getAttributes().concat([]);

        attrs.forEach((attr) => {
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
            if (attrName.startsWith('on') && argument) {
                isOnce = attrName.startsWith('once');

                if (isOnce) {
                    eventType = attrName.substring(4); // Chop off "once"
                } else {
                    eventType = attrName.substring(2); // Chop off "on"
                }
                try {
                    parsedArgs = builder.parseJavaScriptArgs(argument);
                } catch (err) {
                    this.addError('Invalid Javascript Expression for "' + attrName + '": ' + err);
                    return;
                }

                targetMethod = builder.replacePlaceholderEscapeFuncs(parsedArgs[0], context);



                if (parsedArgs.length > 1) {
                    extraArgs = parsedArgs.slice(1);
                }
            } else if (attrName.startsWith('w-on')) {
                context.deprecate('"w-on*" attributes are deprecated. Please use "on*()" instead.');
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
                if (eventType.startsWith('-')) {
                    // Remove the leading dash.
                    // Example: w-on-before-show → before-show
                    eventType = eventType.substring(1);
                } else if (isUpperCase(eventType.charAt(0))) {
                    // Convert first character to lower case:
                    // Example: w-onBeforeShow → beforeShow
                    eventType = eventType.charAt(0).toLowerCase() + eventType.substring(1);
                }

                eventType = builder.literal(eventType);

                // Node is for a custom tag
                addCustomEventListener(this, { eventType,
                                               targetMethod,
                                               extraArgs,
                                               isOnce });
            } else {
                // We are adding an event listener for a DOM event (not a custom event)
                if (eventType.startsWith('-')) {
                    // Remove the leading dash. Preserve casing.
                    // Example: on-before-show → before-show
                    // Example: on-CAPS-event → CAPS-event
                    eventType = eventType.substring(1);
                } else {
                    // Lowercase the string
                    // Example: onMouseOver → mouseover
                    eventType = eventType.toLowerCase();
                }

                // Node is for an HTML element so treat the event as a DOM event
                var willBubble = isBubbleEvent(eventType);

                eventType = builder.literal(eventType);

                if (willBubble) {
                    // The event is white listed for bubbling so we know that
                    // we have already attached a listener on document.body
                    // that can be used to handle the event. We will add
                    // a "data-w-on{eventType}" attribute to the output HTML
                    // for this element that will be used to map the event
                    // to a method on the containing component.
                    addBubblingEventListener(this, { eventType,
                                                     targetMethod,
                                                     extraArgs,
                                                     isOnce });
                } else {
                    // The event does not bubble so we must attach a DOM
                    // event listener directly to the target element.
                    addDirectEventListener(this, { eventType,
                                                   targetMethod,
                                                   extraArgs,
                                                   isOnce });
                }
            }
        });

    }
};
