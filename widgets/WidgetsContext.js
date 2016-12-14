'use strict';

var WidgetDef = require('./WidgetDef');
var uniqueId = require('./uniqueId');
var initWidgets = require('./init-widgets');
var EMPTY_OBJECT = {};

function WidgetsContext(out) {
    this.out = out;
    this.widgets = [];
    this.widgetStack = [];
    this.preserved = EMPTY_OBJECT;
    this.reusableWidgets = null;
    this.reusableWidgetsById = null;
    this.widgetsById = {};
}

WidgetsContext.prototype = {
    getWidgets: function () {
        return this.widgets;
    },

    getWidgetStack: function() {
        return this.widgetStack;
    },

    getCurrentWidget: function() {
        return this.widgetStack.length ? this.widgetStack[this.widgetStack.length - 1] : undefined;
    },

    beginWidget: function (widgetInfo, callback) {
        var self = this;
        var widgetStack = self.widgetStack;
        var origLength = widgetStack.length;
        var parent = origLength ? widgetStack[origLength - 1] : null;

        var widgetId = widgetInfo.id;

        if (!widgetId) {
            widgetId = self._nextWidgetId();
            widgetInfo.id = widgetId;
        }

        widgetInfo.parent = parent;

        function end() {
            widgetStack.length = origLength;
        }

        var widgetDef = new WidgetDef(widgetInfo, end, this.out);

        this.widgetsById[widgetId] = widgetDef;

        if (parent) {
            //Check if it is a top-level widget
            parent.addChild(widgetDef);
        } else {
            self.widgets.push(widgetDef);
        }
        widgetStack.push(widgetDef);

        return widgetDef;
    },
    getWidget: function(id) {
        return this.widgetsById[id];
    },
    hasWidgets: function () {
        return this.widgets.length !== 0;
    },
    clearWidgets: function () {
        this.widgets = [];
        this.widgetStack = [];
    },
    _nextWidgetId: function () {
        return uniqueId(this.out);
    },
    initWidgets: function (document) {
        var widgetDefs = this.widgets;
        initWidgets.initClientRendered(widgetDefs, document);
        this.clearWidgets();
    },

    preservedDOMNode: function(existingEl, bodyOnly, bodyEl) {
        var preserved = this.preserved ;
        if (preserved === EMPTY_OBJECT) {
            preserved = this.preserved = {};
        }
        preserved[existingEl.id] = { bodyOnly: bodyOnly, bodyEl: bodyEl};
    }
};

WidgetsContext.getWidgetsContext = function (out) {
    var global = out.global;

    return out.data.widgets ||
        global.widgets ||
        (global.widgets = new WidgetsContext(out));
};


module.exports = WidgetsContext;