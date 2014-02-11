'use strict';

var WidgetDef = require('./WidgetDef');

function WidgetsContext(context) {
    this.context = context;
    this.widgets = [];
    this.widgetStack = [];
}

WidgetsContext.prototype = {
    getWidgets: function () {
        return this.widgets;
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
        try {
            callback(widgetDef);
        } finally {
            widgetStack.splice(lastWidgetIndex, 1);
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
        return 'w' + this.context.uniqueId();
    }
};

module.exports = WidgetsContext;