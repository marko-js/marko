'use strict';

var WidgetDef = require('./WidgetDef');
var initWidgets = require('./init-widgets');
var EMPTY_OBJECT = {};

function WidgetsContext(out, root) {
    if (!root) {
        root = new WidgetDef(null, null, out);
    }

    this.$__out = out;
    this.$__widgetStack = [root];
    this.$__preserved = EMPTY_OBJECT;
    this.$__widgetsById = {};
}

WidgetsContext.prototype = {
    get $__widgets() {
        return this.$__widgetStack[0].$__children;
    },

    $__beginWidget: function(widget) {
        var self = this;
        var widgetStack = self.$__widgetStack;
        var origLength = widgetStack.length;
        var parent = widgetStack[origLength - 1];

        var widgetId = widget.id;

        if (!widgetId) {
            widgetId = widget.id = parent.$__nextId();
        }

        var widgetDef = new WidgetDef(widget, widgetId, this.$__out, widgetStack, origLength);
        this.$__widgetsById[widgetId] = widgetDef;
        parent.$__addChild(widgetDef);
        widgetStack.push(widgetDef);

        return widgetDef;
    },
    $__clearWidgets: function () {
        this.$__widgetStack = [new WidgetDef(null /* id */, this.$__out)];
    },
    $__initWidgets: function (doc) {
        var widgetDefs = this.$__widgets;
        if (widgetDefs) {
            initWidgets.$__initClientRendered(widgetDefs, doc);
            this.$__clearWidgets();
        }
    },
    $__nextWidgetId: function() {
        var widgetStack = this.$__widgetStack;
        var parent = widgetStack[widgetStack.length - 1];
        return parent.$__nextId();
    },
    $__preserveDOMNode: function(elId, bodyOnly) {
        var preserved = this.$__preserved ;
        if (preserved === EMPTY_OBJECT) {
            preserved = this.$__preserved = {};
        }
        preserved[elId] = { $__bodyOnly: bodyOnly };
    }
};

WidgetsContext.$__getWidgetsContext = function (out) {
    var global = out.global;

    return out.data.widgets ||
        global.widgets ||
        (global.widgets = new WidgetsContext(out));
};

module.exports = WidgetsContext;