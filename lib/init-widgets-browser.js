require('raptor-polyfill/array/forEach');
require('raptor-polyfill/string/endsWith');

var logger = require('raptor-logging').logger(module);
var raptorPubsub = require('raptor-pubsub');
var ready = require('raptor-dom').ready;
var _addEventListener = require('./addEventListener');
var registry = require('./registry');
var Widget = require('./Widget');

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
        // widget[targetMethodName](event, el);
    });
}

function parseJSON(config) {
    return eval('(' + config + ')');
}

function getNestedEl(widget, nestedId) {
    if (nestedId == null) {
        return null;

    }
    if (nestedId === '') {
        return widget.getEl();
    }

    if (typeof nestedId === 'string' && nestedId.charAt(0) === '#') {
        return document.getElementById(nestedId.substring(1));
    } else {
        return widget.getEl(nestedId);
    }
}


function initWidget(
    modulePath,
    id,
    config,
    state,
    scope,
    domEvents,
    customEvents,
    extendList,
    bodyElId,
    existingWidget,
    el) {

    var i;
    var len;
    var eventType;
    var targetMethodName;
    var widget;

    if (!el) {
        el = document.getElementById(id);
    }

    if (!existingWidget) {
        existingWidget = el.__widget;
    }

    if (existingWidget) {
        widget = existingWidget;

        var oldCustomEvents = widget.__customEvents;
        var oldScope = widget.__scope;
        // var oldState = widget.state; // Merge in the new state to the old state

        // We then call the Widget constructor to add
        // back the initial properties
        Widget.call(widget, id);

        widget.__customEvents = oldCustomEvents;
        widget.__scope = oldScope;
        // widget.state = state ? extend(oldState, state) : oldState;
    } else {
        widget = registry.createWidget(modulePath, id);
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
        logger.debug('Creating widget: ' + modulePath + ' (' + id + ')');
    }

    if (!config) {
        config = {};
    }

    el.__widget = widget;

    if (widget._isWidget) {
        widget.el = el;
        widget.bodyEl = getNestedEl(widget, bodyElId);

        if (domEvents) {
            var eventListenerHandles = [];

            for (i=0, len=domEvents.length; i<len; i+=3) {
                eventType = domEvents[i];
                targetMethodName = domEvents[i+1];
                var eventElId = domEvents[i+2];
                var eventEl = getNestedEl(widget, eventElId);

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
                var extendPath = extendList[i];

                if (!existingWidget) {
                    // Only extend a widget the first time the widget is created. If we are updating
                    // an existing widget then we don't re-extend it
                    var extendModule = registry.load(extendPath);
                    var extendFunc = extendModule.extendWidget || extendModule.extend;

                    if (typeof extendFunc !== 'function') {
                        throw new Error('extendWidget(widget, cfg) method missing: ' + extendPath);
                    }

                    extendFunc(widget);
                }
            }
        }
    } else {
        config.elId = id;
        config.el = el;
    }

    var initEventArgs = {
        widget: widget,
        config: config
    };

    raptorPubsub.emit('marko-widgets/initWidget', initEventArgs);

    widget.emit('beforeInit', initEventArgs);
    widget.initWidget(config);
    widget.emit('afterInit', initEventArgs);

    return widget;
}

function initWidgetFromEl(el) {
    if (el.__widget != null) {
        // A widget is already bound to this element. Nothing to do...
        return;
    }

    var scope;
    var id = el.id;
    var modulePath = el.getAttribute('data-widget');
    el.removeAttribute('data-widget');

    var config = el.getAttribute('data-w-config');
    if (config) {
        config = parseJSON(config);
        el.removeAttribute('data-w-config');
    }

    var state = el.getAttribute('data-w-state');
    if (state) {
        state = parseJSON(state);
        el.removeAttribute('data-w-state');
    }

    var domEvents = el.getAttribute('data-w-on');
    if (domEvents) {
        domEvents = domEvents.split(',');
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
        modulePath,
        id,
        config,
        state,
        scope,
        domEvents,
        customEvents,
        extendList,
        bodyElId,
        null,
        el);
}

function walkChildren(parent) {
    var curNode = parent.firstChild;
    while(curNode) {
        if (curNode.nodeType === 1) {
            var rwidgetAttr = curNode.getAttribute('data-widget');
            if (rwidgetAttr) {
                initWidgetFromEl(curNode);
            }

            if (curNode.firstChild) {
                walkChildren(curNode);
            }
        }
        curNode = curNode.nextSibling;
    }
}

function initAllWidgetsInDOM() {
    if (document.querySelectorAll) {
        var matches = document.querySelectorAll('[data-w]');
        for (var i = matches.length; i--;) {
            initWidgetFromEl(matches[i]);
        }
    } else {
        walkChildren(document.body);
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
exports.initClientRendered = function(widgetDefs) {
    // The initialization context is used to add named
    // widgets to their containing scope widget

    // Create a helper function handle recursion
    function initWidgetDefs(widgetDefs) {
        for (var i=0,len=widgetDefs.length; i<len; i++) {
            var widgetDef = widgetDefs[i];

            if (widgetDef.children.length) {
                initWidgetDefs(widgetDef.children);
            }

            var widget = initWidget(
                widgetDef.module,
                widgetDef.id,
                widgetDef.config,
                widgetDef.state,
                widgetDef.scope,
                widgetDef.domEvents,
                widgetDef.customEvents,
                widgetDef.extend,
                widgetDef.bodyElId,
                widgetDef.existingWidget);

            widgetDef.widget = widget;
        }
    }

    initWidgetDefs(widgetDefs);
};

/**
 * This method initializes all widgets that were rendered on the server.
 * Widgets rendered on the server are not initialized until the "document ready"
 * event is fired. Nested widgets are initialized before their parents.
 *
 * This method supports two modes:
 * 1) Initialized widgets based on an index of widget IDs
 * 2) Initalize widgets by scanning the DOM to find widget elements
 *
 * @param  {boolean} If the
 */
exports.initServerRendered = function(scanDOM) {
    function doInit() {
        var dataIds;

        if (typeof scanDOM === 'string') {
            dataIds = scanDOM;
            scanDOM = false;
        } else {
            var idsEl = document.getElementById('rwidgets');
            if (!idsEl && !scanDOM) { // If there is no index and "scan DOM" is not set to true then do nothing
                return;
            }

            // Make sure widgets are only initialized once by checking a flag
            if (document.rwidgetsInitialized === true) {
                return;
            }

            // Set flag to avoid trying to do this multiple times
            document.rwidgetsInitialized = true;

            dataIds = idsEl ? idsEl.getAttribute('data-ids') : null;
        }

        if (dataIds == null || dataIds === '*') { // If the data-ids attribute is * then server is tell us we need to scan the DOM
            initAllWidgetsInDOM();
        } else {
            // Otherwise we have a comma-separated of widget element IDs that need to be initialized
            var ids = dataIds.split(',');
            var len = ids.length;
            for (var i=0; i<len; i++) {
                var id = ids[i];
                var el = document.getElementById(id);
                if (!el) {
                    logger.error('DOM node for widget with ID "' + id + '" not found');
                    continue;
                }
                initWidgetFromEl(el);
            }
        }
    }

    if (typeof scanDOM === 'string') {
        doInit();
    } else {
        ready(doInit);
    }


};