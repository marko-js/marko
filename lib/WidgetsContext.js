'use strict';
var WidgetDef = require('./WidgetDef');
var uniqueId = require('./uniqueId');
var WIDGET_CONTEXT_KEY = 'widgets';

function WidgetsContext(context) {
    this.context = context;
    this.widgets = [];
    this.widgetStack = [];
}

WidgetsContext.prototype = {
    getWidgets: function () {
        return this.widgets;
    },

    getWidgetStack: function() {
        return this.widgetStack;
    },

    beginWidget: function (config, callback) {
        var _this = this;
        var widgetStack = _this.widgetStack;
        var lastWidgetIndex = widgetStack.length;
        var parent = lastWidgetIndex ? widgetStack[lastWidgetIndex - 1] : null;
        if (!config.id) {
            config.id = _this._nextWidgetId();
        }
        if (config.assignedId && !config.scope) {
            throw new Error('Widget with an assigned ID "' + config.assignedId + '" is not scoped within another widget.');
        }
        config.parent = parent;
        var widgetDef = new WidgetDef(config);
        if (parent) {
            //Check if it is a top-level widget
            parent.addChild(widgetDef);
        } else {
            _this.widgets.push(widgetDef);
        }
        widgetStack.push(widgetDef);
        
        this.notifyBeginWidget(widgetDef);

        try {
            callback(widgetDef);
        } finally {
            widgetStack.length = lastWidgetIndex;
        }
    },
    hasWidgets: function () {
        return this.widgets.length !== 0;
    },
    clearWidgets: function () {
        this.widgets = [];
        this.widgetStack = [];
    },
    _nextWidgetId: function () {
        return 'w' + uniqueId(this.context);
    },
    initWidgets: function () {
        var widgetDefs = this.widgets;
        var widgets = require('./');
        widgetDefs.forEach(function (widgetDef) {
            widgets.initWidget(widgetDef);
        });
        this.clearWidgets();
    },

    notifyBeginWidget: function(widgetDef) {
        var listeners = this.beginWidgetListeners;
        if (listeners !== undefined) {
            for (var i = 0; i < listeners.length; i++) {
                var listener = listeners[i];
                listener.callback.call(listener.thisObj, widgetDef);
            }
        }
    },

    subscribeToBeginWidget: function(listener, thisObj) {
        if (this.beginWidgetListeners === undefined) {
            this.beginWidgetListeners = [];
        }

        this.beginWidgetListeners.push({
            callback: listener,
            thisObj: thisObj || this
        });
    }
};

WidgetsContext.getWidgetsContext = function (context) {
    var attributes = context.attributes;

    return attributes[WIDGET_CONTEXT_KEY] ||
        (attributes[WIDGET_CONTEXT_KEY] = new WidgetsContext(context));
};


module.exports = WidgetsContext;