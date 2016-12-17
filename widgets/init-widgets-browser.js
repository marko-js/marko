'use strict';
var _addEventListener = require('./addEventListener');
var warp10Finalize = require('warp10/finalize');
var eventDelegation = require('./event-delegation');
var defaultDocument = typeof document != 'undefined' && document;
var events = require('../runtime/events');
var widgetLookup = require('./lookup').widgets;

var registry; // We initialize this later to avoid issues with circular dependencies

function invokeWidgetEventHandler(widget, targetMethodName, args) {
    var method = widget[targetMethodName];
    if (!method) {
        throw new Error('Widget ' + widget.id + ' does not have method named "' + targetMethodName + '"');
    }

    method.apply(widget, args);
}

function addDOMEventListeners(widget, el, eventType, targetMethodName, extraArgs, handles) {
    var handle = _addEventListener(el, eventType, function(event) {
        var args = [event, el];
        if (extraArgs) {
            args = extraArgs.concat(args);
        }

        invokeWidgetEventHandler(widget, targetMethodName, args);
    });
    handles.push(handle);
}

function getNestedEl(widget, nestedId, document) {
    if (nestedId == null) {
        return null;

    }
    if (nestedId === '') {
        return widget.getEl();
    }

    if (typeof nestedId === 'string') {
        if (nestedId.charAt(0) === '#') {
            return document.getElementById(nestedId.substring(1));
        }
    }

    return widget.getEl(nestedId);
}

function initWidget(widgetDef, doc) {
    var type = widgetDef.type;
    var id = widgetDef.id;
    var config = widgetDef.config;
    var state = widgetDef.state;
    var scope = widgetDef.scope;
    var domEvents = widgetDef.domEvents;
    var customEvents = widgetDef.customEvents;
    var bodyElId = widgetDef.bodyElId;
    var existingWidget = widgetDef.existingWidget;

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
        existingWidget._reset(true /* shouldRemoveDOMEventListeners */);
        widget = existingWidget;
    } else {
        widget = registry.createWidget(type, id, doc);
    }

    var els;
    var rootIds = widgetDef.roots;
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
                    rootEl.__widget = widget;
                    els.push(rootEl);
                }
            }
        }

        el = els[0];
    } else {
        el = doc.getElementById(id);
        el.__widget = widget;
        els = [el];
    }

    widgetLookup[id] = widget;

    if (state) {
        for (var k in state) {
            if (state.hasOwnProperty(k)) {
                var v = state[k];
                if (typeof v === 'function' || v == null) {
                    delete state[k];
                }
            }
        }
    }

    widget.state = state || {}; // First time rendering so use the provided state or an empty state object

    if (!config) {
        config = {};
    }

    if (widget.$__isWidget) {
        widget.el = el;
        widget.els = els;
        widget.$__rootWidgets = rootWidgets;
        widget.bodyEl = getNestedEl(widget, bodyElId, doc);

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
        copyConfigToWidget(widget, config);
        widget.initWidget(config);
        widget.$__emitLifecycleEvent('afterInit', initEventArgs);

        widget.$__emitLifecycleEvent('render', { firstRender: true });

        widget.$__emitLifecycleEvent('mount');
    }

    return widget;
}

function copyConfigToWidget(widget, config) {
    for(var key in config) {
        widget[key] = config[key];
    }
}

// Create a helper function handle recursion
function initClientRendered(widgetDefs, doc) {
    // Ensure that event handlers to handle delegating events are
    // always attached before initializing any widgets
    eventDelegation.init();

    doc = doc || window.doc;
    for (var i=0,len=widgetDefs.length; i<len; i++) {
        var widgetDef = widgetDefs[i];

        if (widgetDef.children) {
            initClientRendered(widgetDef.children, doc);
        }

        if (!widgetDef.type) {
            continue;
        }

        var widget = initWidget(
            widgetDef,
            doc);

        widgetDef.widget = widget;
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
exports.initClientRendered = initClientRendered;

/**
 * This method initializes all widgets that were rendered on the server by iterating over all
 * of the widget IDs.
 */
function initServerRendered(widgetDefs, doc) {
    // Ensure that event handlers to handle delegating events are
    // always attached before initializing any widgets
    eventDelegation.init();

    widgetDefs = warp10Finalize(widgetDefs);

    if (!doc) {
        doc = defaultDocument;
    }

    for (var i=0, len=widgetDefs.length; i<len; i++) {
        var widgetDef = widgetDefs[i];
        initWidget(widgetDef, doc);
    }
}

exports.initServerRendered = initServerRendered;

registry = require('./registry');

if (window.$widgets) {
    initServerRendered(window.$widgets);
}

window.$widgets = {
    concat: initServerRendered
};