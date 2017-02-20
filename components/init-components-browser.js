'use strict';
var warp10Finalize = require('warp10/finalize');
var eventDelegation = require('./event-delegation');
var win = window;
var defaultDocument = document;
var events = require('../runtime/events');
var widgetsUtil = require('./util');
var widgetLookup = widgetsUtil.$__widgetLookup;
var getElementById = widgetsUtil.$__getElementById;
var WidgetDef = require('./WidgetDef');
// var extend = require('raptor-util/extend');
// var registry = require('./registry');

function invokeWidgetEventHandler(widget, targetMethodName, args) {
    var method = widget[targetMethodName];
    if (!method) {
        throw Error('Method not found: ' + targetMethodName);
    }

    method.apply(widget, args);
}

function addEventListenerHelper(el, eventType, listener) {
    el.addEventListener(eventType, listener, false);
    return function remove() {
        el.removeEventListener(eventType, listener);
    };
}

function addDOMEventListeners(widget, el, eventType, targetMethodName, extraArgs, handles) {
    var removeListener = addEventListenerHelper(el, eventType, function(event) {
        var args = [event, el];
        if (extraArgs) {
            args = extraArgs.concat(args);
        }

        invokeWidgetEventHandler(widget, targetMethodName, args);
    });
    handles.push(removeListener);
}

function initWidget(widgetDef, doc) {
    var widget = widgetDef.$__widget;

    if (!widget || !widget.$__isWidget) {
        return; // legacy
    }

    var scope = widgetDef.$__scope;
    var domEvents = widgetDef.$__domEvents;
    var customEvents = widgetDef.$__customEvents;

    widget.$__reset();
    widget.$__document = doc;

    var isExisting = widgetDef.$__isExisting;
    var i;
    var len;
    var eventType;
    var targetMethodName;
    var extraArgs;
    var id = widget.id;

    var rootIds = widgetDef.$__roots;

    if (rootIds) {
        var rootWidgets;

        var els = [];
        for (i=0, len=rootIds.length; i<len; i++) {
            var rootId = rootIds[i];
            var nestedId = id + '-' + rootId;
            var rootWidget = widgetLookup[nestedId];
            if (rootWidget) {
                rootWidget.$__rootFor = widget;
                if (rootWidgets) {
                    rootWidgets.push(rootWidget);
                } else {
                    rootWidgets = widget.$__rootWidgets = [rootWidget];
                }
            } else {
                var rootEl = getElementById(doc, nestedId);
                if (rootEl) {
                    rootEl._w = widget;
                    els.push(rootEl);
                }
            }
        }

        widget.el = els[0];
        widget.els = els;
        widgetLookup[id] = widget;
    } else if (!isExisting) {
        var el = getElementById(doc, id);
        el._w = widget;
        widget.el = el;
        widget.els = [el];
        widgetLookup[id] = widget;
    }

    if (isExisting) {
        widget.$__removeDOMEventListeners();
    }

    if (domEvents) {
        var eventListenerHandles = [];

        for (i=0, len=domEvents.length; i<len; i+=4) {
            eventType = domEvents[i];
            targetMethodName = domEvents[i+1];
            var eventEl = getElementById(doc, domEvents[i+2]);
            extraArgs = domEvents[i+3];

            // The event mapping is for a DOM event (not a custom event)
            addDOMEventListeners(widget, eventEl, eventType, targetMethodName, extraArgs, eventListenerHandles);
        }

        if (eventListenerHandles.length) {
            widget.$__domEventListenerHandles = eventListenerHandles;
        }
    }

    if (customEvents) {
        widget.$__customEvents = {};
        widget.$__scope = scope;

        for (i=0, len=customEvents.length; i<len; i+=3) {
            eventType = customEvents[i];
            targetMethodName = customEvents[i+1];
            extraArgs = customEvents[i+2];

            widget.$__customEvents[eventType] = [targetMethodName, extraArgs];
        }
    }

    if (isExisting) {
        widget.$__emitLifecycleEvent('update');
    } else {
        events.emit('mountWidget', widget);
        widget.$__emitLifecycleEvent('mount');
    }
}

/**
 * This method is used to initialized widgets associated with UI components
 * rendered in the browser. While rendering UI components a "widgets context"
 * is added to the rendering context to keep up with which widgets are rendered.
 * When ready, the widgets can then be initialized by walking the widget tree
 * in the widgets context (nested widgets are initialized before ancestor widgets).
 * @param  {Array<marko-widgets/lib/WidgetDef>} widgetDefs An array of WidgetDef instances
 */
function initClientRendered(widgetDefs, doc) {
    // Ensure that event handlers to handle delegating events are
    // always attached before initializing any widgets
    eventDelegation.$__init(doc);

    doc = doc || defaultDocument;
    for (var i=0,len=widgetDefs.length; i<len; i++) {
        var widgetDef = widgetDefs[i];

        if (widgetDef.$__children) {
            initClientRendered(widgetDef.$__children, doc);
        }

        initWidget(
            widgetDef,
            doc);
    }
}

/**
 * This method initializes all widgets that were rendered on the server by iterating over all
 * of the widget IDs.
 */
function initServerRendered(renderedWidgets, doc) {
    var i=0, len;
    if (!arguments.length) {
        renderedWidgets = win.$widgets;

        win.$widgets = {
            concat: initServerRendered
        };

        if (renderedWidgets && (len=renderedWidgets.length)) {
            for (; i<len; i++) {
                initServerRendered(renderedWidgets[i], doc);
            }
        }
        return;
    }
    // Ensure that event handlers to handle delegating events are
    // always attached before initializing any widgets
    eventDelegation.$__init(doc || defaultDocument);

    renderedWidgets = warp10Finalize(renderedWidgets);

    var widgetDefs = renderedWidgets.w;
    var typesArray = renderedWidgets.t;

    if (!doc) {
        doc = defaultDocument;
    }

    for (len=widgetDefs.length; i<len; i++) {
        var widgetDef = WidgetDef.$__deserialize(widgetDefs[i], typesArray);
        initWidget(widgetDef, doc);
    }
}

exports.$__initClientRendered = initClientRendered;
exports.$__initServerRendered = initServerRendered;