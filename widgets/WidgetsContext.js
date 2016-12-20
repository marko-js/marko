'use strict';

var WidgetDef = require('./WidgetDef');
var initWidgets = require('./init-widgets');
var EMPTY_OBJECT = {};

function WidgetsContext(out, root) {
    if (!root) {
        root = new WidgetDef(EMPTY_OBJECT, null, out);
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

    $__beginWidget: function (widgetInfo, callback) {
        var self = this;
        var widgetStack = self.$__widgetStack;
        var origLength = widgetStack.length;
        var parent = widgetStack[origLength - 1];

        var widgetId = widgetInfo.id;

        if (!widgetId) {
            widgetInfo.id = widgetId = parent.$__nextId();
        }

        function end() {
            widgetStack.length = origLength;
        }

        var widgetDef = new WidgetDef(widgetInfo, end, this.$__out);
        this.$__widgetsById[widgetId] = widgetDef;
        parent.$__addChild(widgetDef);
        widgetStack.push(widgetDef);

        return widgetDef;
    },
    $__clearWidgets: function () {
        this.$__widgetStack = [new WidgetDef(EMPTY_OBJECT, null, this.$__out)];
    },
    $__initWidgets: function (document) {
        var widgetDefs = this.$__widgets;
        if (widgetDefs) {
            initWidgets.initClientRendered(widgetDefs, document);
            this.$__clearWidgets();
        }
    },
    $__nextWidgetId: function() {
        var widgetStack = this.$__widgetStack;
        var parent = widgetStack[widgetStack.length - 1];
        return parent.$__nextId();
    },
    $__preserveDOMNode: function(existingEl, bodyOnly, bodyEl) {
        var preserved = this.$__preserved ;
        if (preserved === EMPTY_OBJECT) {
            preserved = this.$__preserved = {};
        }
        preserved[existingEl.id] = { bodyOnly: bodyOnly, bodyEl: bodyEl };
    }
};

WidgetsContext.$__getWidgetsContext = function (out) {
    var global = out.global;

    return out.data.widgets ||
        global.widgets ||
        (global.widgets = new WidgetsContext(out));
};

module.exports = WidgetsContext;