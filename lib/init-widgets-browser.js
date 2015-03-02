require('raptor-polyfill/array/forEach');
require('raptor-polyfill/string/endsWith');

var logger = require('raptor-logging').logger(module);
var raptorPubsub = require('raptor-pubsub');
var ready = require('raptor-dom').ready;
var _addEventListener = require('./addEventListener');
var registry = require('./registry');


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

function parseConfig(config) {
    return eval('(' + config + ')');
}

function initWidget(modulePath, id, config, scope, domEvents, customEvents, extendList, el) {
    var i;
    var len;
    var eventType;
    var targetMethodName;

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

    el.__widget = widget;

    if (widget._isWidget) {
        widget.el = el;


        if (domEvents) {
            var eventListenerHandles = [];

            for (i=0, len=domEvents.length; i<len; i+=3) {
                eventType = domEvents[i];
                targetMethodName = domEvents[i+1];
                var eventElId = domEvents[i+2];
                var eventEl;

                if (eventElId === '') {
                    eventElId = null;
                }

                if (typeof eventElId === 'string' && eventElId.charAt(0) === '#') {
                    eventEl = document.getElementById(eventElId.substring(1));
                } else {
                    eventEl = widget.getEl(eventElId);
                }

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
            for (i=0, len=extendList.length; i<len; i+=2) {
                var extendPath = extendList[i];
                var extendConfig = extendList[i+1];
                if (extendConfig && typeof extendConfig === 'string') {
                    extendConfig = parseConfig(extendConfig);
                }

                var extendModule = registry.load(extendPath);
                var extendFunc = extendModule.extendWidget || extendModule.extend;

                if (typeof extendFunc !== 'function') {
                    throw new Error('extendWidget(widget, cfg) method missing: ' + extendPath);
                }

                extendFunc(widget, extendConfig);
            }
        }

    } else {
        config.elId = id;
        config.el = el;
    }

    raptorPubsub.emit('marko-widgets/initWidget', {
        widget: widget,
        config: config
    });

    widget.initWidget(config);

    return widget;
}

function initWidgetFromEl(el) {
    // We'll use expando properties since we are only setting simple booleans
    if (el.rwidgetInitialized === true) {
        return;
    }

    el.rwidgetInitialized = true;

    var scope;
    var id = el.id;
    var modulePath = el.getAttribute('data-widget');
    el.removeAttribute('data-widget');
    var config = el.getAttribute('data-w-config');


    if (config) {
        config = parseConfig(config);
        el.removeAttribute('data-w-config');
    }

    var domEvents = el.getAttribute('data-w-on');
    if (domEvents) {
        domEvents = domEvents.split('|');
        el.removeAttribute('data-w-on');
    }

    var customEvents = el.getAttribute('data-w-events');
    if (customEvents) {
        customEvents = customEvents.split('|');
        scope = customEvents[0];
        customEvents = customEvents.slice(1);
        el.removeAttribute('data-w-events');
    }

    var extendList = el.getAttribute('data-w-extend');
    if (extendList) {
        extendList = extendList.split('%');
        el.removeAttribute('data-w-extend');
    }

    initWidget(
        modulePath,
        id,
        config,
        scope,
        domEvents,
        customEvents,
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
                widgetDef.config,
                widgetDef.scope,
                widgetDef.domEvents,
                widgetDef.customEvents,
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