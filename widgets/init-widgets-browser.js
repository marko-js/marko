'use strict';
require('raptor-polyfill/string/endsWith');

var logger = require('raptor-logging').logger(module);
var _addEventListener = require('./addEventListener');
var warp10Finalize = require('warp10/finalize');
var eventDelegation = require('./event-delegation');
var defaultDocument = typeof document != 'undefined' && document;
var events = require('../runtime/events');

var registry; // We initialize this later to avoid issues with circular dependencies

function invokeWidgetEventHandler(widget, targetMethodName, args) {
    var method = widget[targetMethodName];
    if (!method) {
        throw new Error('Widget ' + widget.id + ' does not have method named "' + targetMethodName + '"');
    }

    method.apply(widget, args);
}

function addDOMEventListener(widget, el, eventType, targetMethodName) {
    return _addEventListener(el, eventType, function(event) {
        invokeWidgetEventHandler(widget, targetMethodName, [event, el]);
    });
}

function getNestedEl(widget, nestedId, doc) {
    if (nestedId == null) {
        return null;

    }
    if (nestedId === '') {
        return widget.getEl();
    }

    if (typeof nestedId === 'string' && nestedId.charAt(0) === '#') {
        return doc.getElementById(nestedId.substring(1));
    } else {
        return widget.getEl(nestedId);
    }
}

function initWidget(
    type,
    id,
    config,
    state,
    scope,
    domEvents,
    customEvents,
    extendList,
    bodyElId,
    existingWidget,
    el,
    doc) {

    var i;
    var len;
    var eventType;
    var targetMethodName;
    var widget;

    if (!el) {
        el = doc.getElementById(id);
    }

    if (!existingWidget) {
        existingWidget = el.__widget;
    }

    if (existingWidget && existingWidget.__type !== type) {
        existingWidget = null;
    }

    if (existingWidget) {
        existingWidget._removeDOMEventListeners();
        existingWidget._reset();
        widget = existingWidget;
    } else {
        widget = registry.createWidget(type, id, doc);
    }

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

    // The user-provided constructor function
    if (logger.isDebugEnabled()) {
        logger.debug('Creating widget: ' + type + ' (' + id + ')');
    }

    if (!config) {
        config = {};
    }

    el.__widget = widget;

    if (widget._isWidget) {
        widget.el = el;
        widget.bodyEl = getNestedEl(widget, bodyElId, doc);

        if (domEvents) {
            var eventListenerHandles = [];

            for (i=0, len=domEvents.length; i<len; i+=3) {
                eventType = domEvents[i];
                targetMethodName = domEvents[i+1];
                var eventElId = domEvents[i+2];
                var eventEl = getNestedEl(widget, eventElId, doc);

                // The event mapping is for a DOM event (not a custom event)
                var eventListenerHandle = addDOMEventListener(widget, eventEl, eventType, targetMethodName);
                eventListenerHandles.push(eventListenerHandle);
            }

            if (eventListenerHandles.length) {
                widget.__evHandles = eventListenerHandles;
            }
        }

        if (customEvents) {
            widget.__customEvents = {};
            widget.__scope = scope;

            for (i=0, len=customEvents.length; i<len; i+=2) {
                eventType = customEvents[i];
                targetMethodName = customEvents[i+1];
                widget.__customEvents[eventType] = targetMethodName;
            }
        }

        if (extendList) {
            // If one or more "w-extend" attributes were used for this
            // widget then call those modules to now extend the widget
            // that we created
            for (i=0, len=extendList.length; i<len; i++) {
                var extendType = extendList[i];

                if (!existingWidget) {
                    // Only extend a widget the first time the widget is created. If we are updating
                    // an existing widget then we don't re-extend it
                    var extendModule = registry.load(extendType);
                    var extendFunc = extendModule.extendWidget || extendModule.extend;

                    if (typeof extendFunc !== 'function') {
                        throw new Error('extendWidget(widget, cfg) method missing: ' + extendType);
                    }

                    extendFunc(widget);
                }
            }
        }
    } else {
        config.elId = id;
        config.el = el;
    }

    if (existingWidget) {
        widget._emitLifecycleEvent('update');
        widget._emitLifecycleEvent('render', {});
    } else {
        var initEventArgs = {
            widget: widget,
            config: config
        };

        events.emit('initWidget', initEventArgs);

        widget._emitLifecycleEvent('beforeInit', initEventArgs);
        copyConfigToWidget(widget, config);
        widget.initWidget(config);
        widget._emitLifecycleEvent('afterInit', initEventArgs);

        widget._emitLifecycleEvent('render', { firstRender: true });

        widget._emitLifecycleEvent('mount');
    }

    return widget;
}

function copyConfigToWidget(widget, config) {
    for(var key in config) {
        widget[key] = config[key];
    }
}

function initWidgetFromEl(el, state, config) {
    if (el.__widget != null) {
        // A widget is already bound to this element. Nothing to do...
        return;
    }

    var doc = el.ownerDocument;
    var scope;
    var id = el.id;
    var type = el.getAttribute('data-widget');
    el.removeAttribute('data-widget');

    var domEvents;
    var hasDomEvents = el.getAttribute('data-w-on');
    if (hasDomEvents) {
        var domEventsEl = doc.getElementById(id + '-$on');
        if (domEventsEl) {
            domEventsEl.parentNode.removeChild(domEventsEl);
            domEvents = (domEventsEl.getAttribute('data-on') || '').split(',');
        }

        el.removeAttribute('data-w-on');
    }

    var customEvents = el.getAttribute('data-w-events');
    if (customEvents) {
        customEvents = customEvents.split(',');
        scope = customEvents[0];
        customEvents = customEvents.slice(1);
        el.removeAttribute('data-w-events');
    }

    var extendList = el.getAttribute('data-w-extend');
    if (extendList) {
        extendList = extendList.split(',');
        el.removeAttribute('data-w-extend');
    }

    var bodyElId = el.getAttribute('data-w-body');

    initWidget(
        type,
        id,
        config,
        state,
        scope,
        domEvents,
        customEvents,
        extendList,
        bodyElId,
        null,
        el,
        doc);
}


// Create a helper function handle recursion
function initClientRendered(widgetDefs, doc) {
    // Ensure that event handlers to handle delegating events are
    // always attached before initializing any widgets
    eventDelegation.init();

    doc = doc || window.doc;
    for (var i=0,len=widgetDefs.length; i<len; i++) {
        var widgetDef = widgetDefs[i];

        if (widgetDef.children.length) {
            initClientRendered(widgetDef.children, doc);
        }

        var widget = initWidget(
            widgetDef.type,
            widgetDef.id,
            widgetDef.config,
            widgetDef.state,
            widgetDef.scope,
            widgetDef.domEvents,
            widgetDef.customEvents,
            widgetDef.extend,
            widgetDef.bodyElId,
            widgetDef.existingWidget,
            null,
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
 * of the widget IDs. This method supports two signatures:
 *
 * initServerRendered(dataIds : String) - dataIds is a comma separated list of widget IDs. The state and config come
 *                                        from the following globals:
 *                                        - window.$markoWidgetsState
 *                                        - window.$markoWidgetsConfig
 * initServerRendered(renderedWidgets : Object) - dataIds is an object rendered by getRenderedWidgets with the following
 *                                                structure:
 *   {
 *   	ids: "w0,w1,w2",
 *   	state: { w0: {...}, ... }
 *   	config: { w0: {...}, ... }
 *   }
 */
function initServerRendered(dataIds, doc) {
    var stateStore;
    var configStore;
    if (!doc) {
        doc = defaultDocument;
    }

    if (typeof dataIds === 'object') {
        stateStore = dataIds.state ? warp10Finalize(dataIds.state) : null;
        configStore = dataIds.config ? warp10Finalize(dataIds.config) : null;
        dataIds = dataIds.ids;
    }

    // Ensure that event handlers to handle delegating events are
    // always attached before initializing any widgets
    eventDelegation.init();

    if (dataIds) {

        stateStore = stateStore || window.$markoWidgetsState;
        configStore = configStore || window.$markoWidgetsConfig;

        // W have a comma-separated of widget element IDs that need to be initialized
        var ids = dataIds.split(',');
        var len = ids.length;
        var state;
        var config;
        for (var i=0; i<len; i++) {
            var id = ids[i];
            var el = doc.getElementById(id);
            if (!el) {
                throw new Error('DOM node for widget with ID "' + id + '" not found');
            }

            if (stateStore) {
                state = stateStore[id];
                delete stateStore[id];
            } else {
                state = undefined;
            }

            if (configStore) {
                config = configStore[id];
                delete configStore[id];
            } else {
                config = undefined;
            }

            initWidgetFromEl(el, state, config);
        }
    }
}

exports.initServerRendered = initServerRendered;

registry = require('./registry');

if (window.$widgets) {
    window.$widgets.forEach(initServerRendered);
}

window.$widgets = {
    push: initServerRendered
};