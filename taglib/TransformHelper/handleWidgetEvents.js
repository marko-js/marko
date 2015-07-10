var markoWidgets = require('../../');

function isUpperCase(c) {
    return c == c.toUpperCase();
}

function addBubblingEventListener(transformHelper, eventType, targetMethod) {

    var containingWidgetNode = transformHelper.getContainingWidgetNode();
    var node = transformHelper.node;

    if (!containingWidgetNode) {
        node.addError('Unable to handle event "' + eventType + '". HTML element is not nested within a widget.');
        return;
    }

    node.setAttribute('data-w-on' + eventType,
        transformHelper.compiler.makeExpression(targetMethod + '+' + '"|"' +
        '+widget.id'));
}

function addDirectEventListener(transformHelper, eventType, targetMethod) {

    // The event does not support bubbling, so the widget
    // must attach the listeners directly to the target
    // elements when the widget is initialized.
    var containingWidgetNode = transformHelper.getContainingWidgetNode();

    if (!containingWidgetNode) {
        transformHelper.node.addError('Unable to handle event "' + eventType + '". HTML element is not nested within a widget.');
        return;
    }


    if (!containingWidgetNode.data.widgetEvents) {
        // Add a new input property to the widget tag that will contain
        // enough information to allow the DOM event listeners to
        // be attached directly to the DOM elements.
        containingWidgetNode.data.widgetEvents = [];
        containingWidgetNode.setProperty('domEvents', function() {
            return transformHelper.compiler.makeExpression(
                '[' + containingWidgetNode.data.widgetEvents.join(',') + ']');
        });
    }

    // Add a 3-tuple consisting of <event-type><target-method>(<DOM element ID>|<widget ID>)
    containingWidgetNode.data.widgetEvents.push(JSON.stringify(eventType));
    containingWidgetNode.data.widgetEvents.push(targetMethod);
    containingWidgetNode.data.widgetEvents.push(transformHelper.getNestedIdExpression().toString());
}

function addCustomEventListener(transformHelper, eventType, targetMethod) {
    // Make sure the widget has an assigned scope ID so that we can bind the custom event listener
    var widgetArgs = transformHelper.getWidgetArgs();
    widgetArgs.addCustomEvent(eventType, targetMethod);
}

function handleWidgetEvents() {

    // We configured the Marko compiler to attach a flag to nodes that
    // have one or more attributes that match the "w-on*" pattern.
    // We still need to loop over the properties to find and handle
    // the properties corresponding to those attributes.
    var hasWidgetEvents = this.node.hasFlag('hasWidgetEvents') === true;

    if (hasWidgetEvents) {
        var widgetArgs = this.getWidgetArgs();

        if (widgetArgs.getId() == null) {
            widgetArgs.setId(this.nextUniqueId());
        }

        var props = this.nodeProps;
        var node = this.node;


        for (var propName in props) {
            if (props.hasOwnProperty(propName) && propName.startsWith('w-on')) {
                var eventType = propName.substring(4); // Chop off "w-on"
                var targetMethod = props[propName];

                if (node.tag) {
                    node.removeProperty(propName);
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

                    // Node is for a custom tag
                    addCustomEventListener(this, eventType, targetMethod);
                } else {
                    // We are adding an event listener for a DOM event (not a custom event)
                    //
                    if (eventType.startsWith('-')) {
                        // Remove the leading dash.
                        // Example: w-on-before-show → before-show
                        eventType = eventType.substring(1);
                    }

                    // Normalize DOM event types to be all lower case
                    eventType = eventType.toLowerCase();

                    // Node is for an HTML element so treat the event as a DOM event
                    var isBubbleEvent = markoWidgets.isBubbleEvent(eventType);

                    if (isBubbleEvent) {
                        // The event is white listed for bubbling so we know that
                        // we have already attached a listener on document.body
                        // that can be used to handle the event. We will add
                        // a "data-w-on{eventType}" attribute to the output HTML
                        // for this element that will be used to map the event
                        // to a method on the containing widget.
                        addBubblingEventListener(this, eventType, targetMethod);
                    } else {
                        // The event does not bubble so we must attach a DOM
                        // event listener directly to the target element.
                        addDirectEventListener(this, eventType, targetMethod);
                    }
                }
            }
        }
    }
}

module.exports = handleWidgetEvents;