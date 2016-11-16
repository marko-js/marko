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

function addBubblingEventListener(transformHelper, eventType, targetMethod) {
    var containingWidgetNode = transformHelper.getContainingWidgetNode();
    var el = transformHelper.el;

    if (!containingWidgetNode) {
        transformHelper.addError('Unable to handle event "' + eventType + '". HTML element is not nested within a widget.');
        return;
    }

    var builder = transformHelper.builder;
    var attrValue;
    var widgetIdExpression = builder.memberExpression(
        builder.identifier('widget'),
        builder.identifier('id'));

    // The event handler method is conditional and it may resolve to a null method name. Therefore,
    // we need to use a runtime helper to set the value correctly.
    var markoWidgetsEventFuncId = transformHelper.context.importModule('markoWidgets_event',
        transformHelper.getMarkoWidgetsRequirePath('marko/widgets/taglib/helpers/event'));

    attrValue = builder.functionCall(markoWidgetsEventFuncId, [
            targetMethod,
            widgetIdExpression
        ]);

    el.setAttributeValue('data-_on' + eventType.value, attrValue);
}

function addDirectEventListener(transformHelper, eventType, targetMethod) {
    var builder = transformHelper.builder;
    var el = transformHelper.el;

    var addDomEvent = builder.memberExpression(
        builder.identifier('widget'),
        builder.identifier('addDomEvent'));

    var addDomEventFunctionCall = builder.functionCall(
        addDomEvent,
        [
            eventType,
            targetMethod,
            transformHelper.getNestedIdExpression()
        ]);

    el.onBeforeGenerateCode((event) => {
        event.insertCode(addDomEventFunctionCall);
    });

    // Also add another DOM element that will be used to
    var containingWidgetNode = transformHelper.getContainingWidgetNode();
    containingWidgetNode.setAttributeValue('hasDomEvents', builder.literal(1));
}

function addCustomEventListener(transformHelper, eventType, targetMethod) {
    // Make sure the widget has an assigned scope ID so that we can bind the custom event listener
    var widgetArgs = transformHelper.getWidgetArgs();
    widgetArgs.addCustomEvent(eventType, targetMethod);
}

module.exports = function handleWidgetEvents() {
    var el = this.el;
    var builder = this.builder;
    var context = this.context;
    var isCustomTag = el.type !== 'HtmlElement';
    // We configured the Marko compiler to attach a flag to nodes that
    // have one or more attributes that match the "w-on*" pattern.
    // We still need to loop over the properties to find and handle
    // the properties corresponding to those attributes.
    var hasWidgetEvents = this.el.isFlagSet('hasWidgetEvents') === true;

    if (hasWidgetEvents) {
        var attrs = el.getAttributes().concat([]);

        attrs.forEach((attr) => {
            var eventType;
            var targetMethod;
            var attrName = attr.name;
            var args = attr.argument;

            if (!attrName) {
                return;
            }

            if (attrName.startsWith('on') && args) {
                eventType = attrName.substring(2); // Chop off "on"
                try {
                    var parsedArgs = builder.parseExpression(args);
                    targetMethod = builder.replacePlaceholderEscapeFuncs(parsedArgs, context);
                } catch (err) {
                    this.addError('Invalid Javascript Expression for "' + attrName + '": ' + err);
                }
            } else if (attrName.startsWith('w-on')) {
                console.warn('"w-on*" attributes are deprecated. Please use "on*()" instead. (' + (el.pos ? context.getPosInfo(el.pos) : context.filename) + ')');
                eventType = attrName.substring(4); // Chop off "w-on"
                targetMethod = attr.value;
            }

            if (!eventType || !targetMethod) {
                return;
            }

            el.removeAttribute(attrName);

            if (isCustomTag) {
                var widgetArgs = this.getWidgetArgs();
                if (widgetArgs.getId() == null) {
                    widgetArgs.setId(builder.literal(this.nextUniqueId()));
                }

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
                var willBubble = isBubbleEvent(eventType);

                eventType = builder.literal(eventType);

                if (willBubble) {
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
        });

    }
};
