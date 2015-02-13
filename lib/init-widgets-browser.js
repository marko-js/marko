require('raptor-polyfill/array/forEach');
require('raptor-polyfill/string/endsWith');

var logger = require('raptor-logging').logger(module);
var raptorPubsub = require('raptor-pubsub');
var ready = require('raptor-dom').ready;
var _addEventListener = require('./addEventListener');
var registry = require('./registry');
var WidgetCollection = require('./WidgetCollection');

var widgetCollectionsByWidgetId = {};

function getWidgetCollection(widgetId) {
    var widgetEl = document.getElementById(widgetId);
    var widgetCollection;

    if (widgetEl && widgetEl.__widget) {
        widgetCollection = widgetEl.__widget.widgets;
    } else {
        widgetCollection = widgetCollectionsByWidgetId[widgetId] || (widgetCollectionsByWidgetId[widgetId] = new WidgetCollection());
    }

    return widgetCollection;
}

function attachDOMEventListener(widget, el, eventType, targetMethod) {
    return _addEventListener(el, eventType, function(event) {
        widget[targetMethod](event, el);
    });
}

function parseConfig(config) {
    return eval('(' + config + ')');
}

function initWidget(modulePath, id, assignedId, config, scope, events, extendList, el) {
    var i;
    var len;

    var widget = registry.createWidget(modulePath, id);

    // The user-provided constructor function
    if (logger.isDebugEnabled()) {
        logger.debug('Creating widget: ' + modulePath + ' (' + id + ')');
    }

    if (!config) {
        config = {};
    }

    if (!el) {
        el = document.getElementById(id);
    }

    var widgetCollection = getWidgetCollection(id);

    el.__widget = widget;

    if (widget._isWidget) {
        widget.el = el;
        widget.widgets = widgetCollection;

        if (events) {
            var eventListenerHandles = [];

            for (i=0, len=events.length; i<len; i+=3) {
                var eventType = events[i];
                var targetMethod = events[i+1];
                var eventElId = events[i+2];
                var eventEl;

                if (eventElId.charAt(0) === '!') {
                    eventEl = widget.getEl(eventElId.substring(1));
                } else {
                    eventEl = document.getElementById(eventElId);
                }

                var eventListenerHandle = attachDOMEventListener(widget, eventEl, eventType, targetMethod);
                eventListenerHandles.push(eventListenerHandle);
            }

            widget.__evHandles = eventListenerHandles;
        }

        if (extendList) {
            for (i=0, len=extendList.length; i<len; i+=2) {
                var extendPath = extendList[i];
                var extendConfig = extendList[i+1];
                if (typeof extendConfig === 'string') {
                    extendConfig = parseConfig(extendConfig);
                }

                var extendModule = registry.load(extendPath);

                if (typeof extendModule.extend !== 'function') {
                    throw new Error('extend(widget,cfg) method missing: ' + extendPath);
                }
                extendModule.extend(widget, extendConfig);
            }
        }

    } else {
        config.elId = id;
        config.el = el;
        config.widgets = widgetCollection;
    }

    // Register the widget in a global lookup
    if (assignedId && scope) {
        var isTargetArray;
        if (assignedId.endsWith('[]')) {
            // When adding the widgets to a collection, an array can be forced by using a [] suffix for the assigned widget ID
            assignedId = assignedId.slice(0, -2);
            isTargetArray = true;
        }
        widget.__assignedId = assignedId;
        widget.__scope = scope;
        getWidgetCollection(scope)._add(widget, assignedId, isTargetArray);
    }

    raptorPubsub.emit('marko-widgets/initWidget', {
        widget: widget,
        config: config
    });

    widget.initWidget(config);

    // Once we have initialized a widget, we store the widget collection
    // with the widget instance so we remove the widget collection
    // from the singleton lookup
    delete widgetCollectionsByWidgetId[id];

    return widget;
}

function initWidgetFromEl(el) {
    // We'll use expando properties since we are only setting simple booleans
    if (el.rwidgetInitialized === true) {
        return;
    }

    el.rwidgetInitialized = true;

    var id = el.id;
    var modulePath = el.getAttribute('data-widget');
    el.removeAttribute('data-widget');
    var config = el.getAttribute('data-w-config');

    if (config) {
        config = parseConfig(config);
        el.removeAttribute('data-w-config');
    }

    var assignedId = el.getAttribute('data-w-id');
    var scope;

    if (assignedId) {
        var separatorPos = assignedId.indexOf('|');
        if (separatorPos !== -1) {
            scope = assignedId.substring(0, separatorPos);
            assignedId = assignedId.substring(separatorPos+1);
        }
        el.removeAttribute('data-w-id');
    }

    var events = el.getAttribute('data-w-on');
    if (events) {
        events = events.split('|');
        el.removeAttribute('data-w-on');
    }

    var extendList = el.getAttribute('data-w-extend');
    if (extendList) {
        extendList = extendList.split('%');
    }

    initWidget(
        modulePath,
        id,
        assignedId,
        config,
        scope,
        events,
        extendList,
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
                widgetDef.assignedId,
                widgetDef.config,
                widgetDef.scope ? widgetDef.scope.id : null,
                widgetDef.events,
                widgetDef.extend);

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