'use strict';
var WidgetDef = require('./WidgetDef');
var uniqueId = require('./uniqueId');
var WIDGET_CONTEXT_KEY = 'widgets';
var initWidgets = require('./init-widgets');
var EventEmitter = require('events').EventEmitter;
var inherit = require('raptor-util/inherit');

function WidgetsContext(context) {
    EventEmitter.call(this);
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
        var assignedId = config.assignedId;

        if (assignedId && !config.scope) {
            var firstDash = assignedId.indexOf('-');
            if (firstDash === -1) {
                throw new Error('Widget with an assigned ID "' + assignedId + '" is not scoped within another widget.');    
            }
            config.assignedId = assignedId.substring(firstDash+1);
            config.scope = assignedId.substring(0, firstDash);
        }
        config.parent = parent;

        function end() {
            widgetStack.splice(lastWidgetIndex, 1);    
        }

        var widgetDef = new WidgetDef(config, end);
        if (parent) {
            //Check if it is a top-level widget
            parent.addChild(widgetDef);
        } else {
            _this.widgets.push(widgetDef);
        }
        widgetStack.push(widgetDef);
        
        this.emit('beginWidget', widgetDef);

        return widgetDef;
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
        initWidgets.initClientRendered(widgetDefs);
        this.clearWidgets();
    },
    onBeginWidget: function(listener) {
        this.on('beginWidget', listener);
    }
};

inherit(WidgetsContext, EventEmitter);

WidgetsContext.getWidgetsContext = function (context) {
    var attributes = context.attributes;

    return attributes[WIDGET_CONTEXT_KEY] ||
        (attributes[WIDGET_CONTEXT_KEY] = new WidgetsContext(context));
};


module.exports = WidgetsContext;