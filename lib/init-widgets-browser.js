var Widget = require('./Widget');
var logger = require('raptor-logging').logger(module);
var raptorPubsub = require('raptor-pubsub');
var inherit = require('raptor-util/inherit');
var ready = require('raptor-dom').ready;
var isArray = Array.isArray;

function _convertEvents(events) {
    var convertedEvents = {};
    for (var i=0,len=events.lengts; i<len; i++) {
        var event = events[i];
        convertedEvents[event[0]] = {
            target: event[1],
            props: event[2]
        };
    }

    return convertedEvents;
}

function Scope() {
}
/**
 *
 */
Scope.prototype = {
    _remove: function (widget, id) {
        var existing = this[id];
        if (isArray(existing)) {
            this[id] = existing.filter(function (cur) {
                return cur !== widget;
            });
            if (!existing.length) {
                delete this[id];
            }
        } else {
            delete this[id];
        }
    },
    _add: function (widget, id, isTargetArray) {
        var existing = this[id];
        if (!existing) {
            this[id] = isTargetArray ? [widget] : widget;
        } else {
            if (isArray(existing)) {
                existing.push(widget);
            } else {
                this[id] = [
                    existing,
                    widget
                ];
            }
        }
    },
    forEach: function (id, callback, thisObj) {
        if (typeof id === 'function') {
            callback = id;
            id = null;
        }

        var widgets;

        if (id) {
            widgets = this[id];
            if (widgets) {
                if (!isArray(widgets)) {
                    widgets = [widgets];
                }
                widgets.forEach(callback, thisObj);
            }
        } else {
            for (var curId in this) {
                if (this.hasOwnProperty(curId)) {
                    this.forEach(curId, callback, thisObj);
                }
            }
        }
    }
};

function InitContext() {
    this.scopes = {};
}

InitContext.prototype = {
    getScope: function(id) {
        var scopes = this.scopes;
        return scopes[id] || (scopes[id] = new Scope());
    }
};

function initWidget(modulePath, id, assignedId, config, scope, events, initContext) {
    var widget;
    var OriginalWidgetClass = require(modulePath);
    // The user-provided constructor function
    if (logger.isDebugEnabled()) {
        logger.debug('Creating widget: ' + modulePath + ' (' + id + ')');
    }
    
    if (OriginalWidgetClass.initWidget) {
        //Check if the Widget has an "initWidget" function that will do the initialization
        /*
         * Update the config with the information that
         * the user "initWidget" function by need:
         */
        config.elId = id;
        config.events = events;
        widget = OriginalWidgetClass;
        //Use the provided object as the widget
    } else if (typeof OriginalWidgetClass === 'function') {
        var WidgetClass = function() {
            Widget.call(this, id);
            this.widgets = initContext.getScope(id);

            if (events) {
                widget._events = _convertEvents(events);
            }
        };

        var proto;

        if (!OriginalWidgetClass.prototype._isWidget) {
            // original widget class does not extend Widget
            if (OriginalWidgetClass.$super) {
                // the widget class already has its own super class

                // find the base class
                var cur = OriginalWidgetClass.$super;
                while(cur.$super) {
                    cur = cur.$super;
                }

                // copy Widget prototype methods to prototype of base class
                // NOTE: We're not using hasOwnProperty because we also want
                // properties from prototype that Widget extends
                for (var key in Widget.prototype) {
                    cur.prototype[key] = Widget.prototype[key];
                }
            } else {
                inherit(OriginalWidgetClass, Widget);
            }
        }

        //This will be a reference to the original prorotype
        WidgetClass.prototype = proto = OriginalWidgetClass.prototype;
        widget = new WidgetClass();
        
        // Register the widget in a global lookup
        if (assignedId && scope) {
            var isTargetArray;
            if (assignedId.endsWith('[]')) {
                // When adding the widgets to a collection, an array can be forced by using a [] suffix for the assigned widget ID
                assignedId = assignedId.slice(0, -2);
                isTargetArray = true;
            }
            widget._assignedId = assignedId;
            widget._scope = scope;
            initContext.getScope(scope)._add(widget, assignedId, isTargetArray);
        }
    } else {
        throw new Error('Invalid widget: ' + modulePath);
    }
    
    raptorPubsub.emit('raptor-widgets/initWidget', {
        widget: widget,
        config: config
    });

    if (widget.initWidget) {
        widget.initWidget(config);
    } else {
        OriginalWidgetClass.call(widget, config);
    }

    return widget;
}

function initWidgetFromEl(el, initContext) {
    // We'll use expando properties since we are only setting simple booleans
    if (el.rwidgetInitialized === true) {
        return;
    }

    el.rwidgetInitialized = true;

    var id = el.id;
    var modulePath = el.getAttribute('data-rwidget');
    el.removeAttribute('data-rwidget');
    var config = el.getAttribute('data-rwidget-config');

    if (config) {
        config = JSON.parse(config);
        el.removeAttribute('data-rwidget-config');
    }

    var assignedId = el.getAttribute('data-rwidget-id');
    var scope;

    if (assignedId) {
        var separatorPos = assignedId.indexOf('|');
        if (separatorPos !== -1) {
            scope = assignedId.substring(0, separatorPos);
            assignedId = assignedId.substring(separatorPos+1);
        }
        el.removeAttribute('data-rwidget-id');
    }

    var events = el.getAttribute('data-rwidget-events');
    if (events) {
        events = JSON.parse(events);
    }

    initWidget(
        modulePath,
        id,
        assignedId,
        config,
        scope,
        events,
        initContext);
}

function walkChildren(parent, initContext) {
    var curNode = parent.firstChild;
    while(curNode) {
        if (curNode.nodeType === 1) {
            var rwidgetAttr = curNode.getAttribute('data-rwidget');
            if (rwidgetAttr) {
                initWidgetFromEl(curNode, initContext);
            }

            if (curNode.firstChild) {
                walkChildren(curNode, initContext);
            }
        }
        curNode = curNode.nextSibling;
    }
}

function initAllWidgetsInDOM(initContext) {
    if (document.querySelectorAll) {
        var matches = document.querySelectorAll('[data-rwidget]');
        for (var i = matches.length; i--;) {
            initWidgetFromEl(matches[i], initContext);
        }
    } else {
        walkChildren(document.body, initContext);
    }
}

/**
 * This method is used to initialized widgets associated with UI components
 * rendered in the browser. While rendering UI components a "widgets context"
 * is added to the rendering context to keep up with which widgets are rendered.
 * When ready, the widgets can then be initialized by walking the widget tree
 * in the widgets context (nested widgets are initialized before ancestor widgets).
 * @param  {Array<raptor-widgets/lib/WidgetDef>} widgetDefs An array of WidgetDef instances
 */
exports.initClientRendered = function(widgetDefs) {
    // The initialization context is used to add named
    // widgets to their containing scope widget
    var initContext = new InitContext();

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
                initContext);

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
    ready(function() {
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

        var dataIds = idsEl ? idsEl.getAttribute('data-ids') : null;
        var initContext = new InitContext();
        if (dataIds == null || dataIds === '*') { // If the data-ids attribute is * then server is tell us we need to scan the DOM
            initAllWidgetsInDOM(initContext);
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
                initWidgetFromEl(el, initContext);
            }
        }
    });
};