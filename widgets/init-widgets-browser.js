'use strict';
var warp10Finalize = require('warp10/finalize');
var eventDelegation = require('./event-delegation');
var win = window;
var defaultDocument = document;
var events = require('../runtime/events');
var widgetLookup = require('./lookup').$__widgets;
var WidgetDef = require('./WidgetDef');
var extend = require('raptor-util/extend');

var registry; // We initialize this later to avoid issues with circular dependencies

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
    var handle = addEventListenerHelper(el, eventType, function(event) {
        var args = [event, el];
        if (extraArgs) {
            args = extraArgs.concat(args);
        }

        invokeWidgetEventHandler(widget, targetMethodName, args);
    });
    handles.push(handle);
}

function initWidget(widgetDef, doc) {
    var type = widgetDef.$__type;
    var id = widgetDef.id;
    var config = widgetDef.$__config;
    var state = widgetDef.$__state;
    var scope = widgetDef.$__scope;
    var domEvents = widgetDef.$__domEvents;
    var customEvents = widgetDef.$__customEvents;
    var existingWidget = widgetDef.$__existingWidget;

    var el;
    var i;
    var len;
    var eventType;
    var targetMethodName;
    var widget;
    var extraArgs;

    if (!existingWidget) {
        existingWidget = widgetLookup[id];
    }

    if (existingWidget && existingWidget.$__type !== type) {
        existingWidget = null;
    }

    if (existingWidget) {
        existingWidget.$__reset(true /* shouldRemoveDOMEventListeners */);
        widget = existingWidget;
    } else {
        widget = registry.$__createWidget(type, id, doc);
    }

    var els;
    var rootIds = widgetDef.$__roots;
    var rootWidgets;

    if (rootIds) {
        els = [];
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
                var rootEl = doc.getElementById(nestedId);
                if (rootEl) {
                    rootEl._w = widget;
                    els.push(rootEl);
                }
            }
        }

        el = els[0];
    } else {
        el = doc.getElementById(id);
        el._w = widget;
        els = [el];
    }

    widgetLookup[id] = widget;

    widget.state = state || {}; // First time rendering so use the provided state or an empty state object

    if (!config) {
        config = {};
    }

    if (widget.$__isWidget) {
        widget.el = el;
        widget.els = els;
        widget.$__rootWidgets = rootWidgets;

        if (domEvents) {
            var eventListenerHandles = [];

            for (i=0, len=domEvents.length; i<len; i+=4) {
                eventType = domEvents[i];
                targetMethodName = domEvents[i+1];
                var eventEl = document.getElementById(domEvents[i+2]);
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
    } else {
        config.elId = id;
        config.el = el;
        config.els = els;
    }

    if (existingWidget) {
        widget.$__emitLifecycleEvent('update');
        widget.$__emitLifecycleEvent('render', {});
    } else {
        var initEventArgs = {
            widget: widget,
            config: config
        };

        events.emit('initWidget', initEventArgs);

        widget.$__emitLifecycleEvent('beforeInit', initEventArgs);
        extend(widget, config);
        widget.$__initWidget(config);
        widget.$__emitLifecycleEvent('afterInit', initEventArgs);

        widget.$__emitLifecycleEvent('render', { firstRender: true });

        widget.$__emitLifecycleEvent('mount');
    }

    return widget;
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
    eventDelegation.$__init();

    doc = doc || defaultDocument;
    for (var i=0,len=widgetDefs.length; i<len; i++) {
        var widgetDef = widgetDefs[i];

        if (widgetDef.$__children) {
            initClientRendered(widgetDef.$__children, doc);
        }

        if (!widgetDef.$__type) {
            continue;
        }

        var widget = initWidget(
            widgetDef,
            doc);

        widgetDef.$__widget = widget;
    }
}

/**
 * This method initializes all widgets that were rendered on the server by iterating over all
 * of the widget IDs.
 */
function initServerRendered(renderedWidgets, doc) {
    // Ensure that event handlers to handle delegating events are
    // always attached before initializing any widgets
    eventDelegation.$__init();

    renderedWidgets = warp10Finalize(renderedWidgets);

    var widgetDefs = renderedWidgets[0];
    var typesArray = renderedWidgets[1];

    if (!doc) {
        doc = defaultDocument;
    }

    for (var i=0, len=widgetDefs.length; i<len; i++) {
        var widgetDef = WidgetDef.$__deserialize(widgetDefs[i], typesArray);
        initWidget(widgetDef, doc);
    }
}

exports.$__initClientRendered = initClientRendered;
exports.$__initServerRendered = initServerRendered;

registry = require('./registry');

if (win.$widgets) {
    initServerRendered(window.$widgets);
}

win.$widgets = {
    concat: initServerRendered
};