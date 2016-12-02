'use strict';

var WidgetDef = require('./WidgetDef');
var uniqueId = require('./uniqueId');
var initWidgets = require('./init-widgets');

var PRESERVE_EL = 1;
var PRESERVE_EL_BODY = 2;
var PRESERVE_EL_UNPRESERVED_BODY = 4;

function WidgetsContext(out) {
    this.out = out;
    this.widgets = [];
    this.widgetStack = [];
    this.preserved = null;
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
        var _this = this;
        var widgetStack = _this.widgetStack;
        var origLength = widgetStack.length;
        var parent = origLength ? widgetStack[origLength - 1] : null;

        var widgetId = widgetInfo.id;

        if (!widgetId) {
            widgetId = _this._nextWidgetId();
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
            _this.widgets.push(widgetDef);
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

    isPreservedEl: function(id) {
        var preserved = this.preserved;
        return preserved && (preserved[id] & PRESERVE_EL);
    },

    isPreservedBodyEl: function(id) {
        var preserved = this.preserved;
        return preserved && (preserved[id] & PRESERVE_EL_BODY);
    },

    hasUnpreservedBody: function(id) {
        var preserved = this.preserved;
        return preserved && (preserved[id] & PRESERVE_EL_UNPRESERVED_BODY);
    },

    addPreservedDOMNode: function(existingEl, bodyOnly, hasUnppreservedBody) {
        var preserved = this.preserved || (this.preserved = {});

        var value = bodyOnly ?
            PRESERVE_EL_BODY :
            PRESERVE_EL;

        if (hasUnppreservedBody) {
            value |= PRESERVE_EL_UNPRESERVED_BODY;
        }

        preserved[existingEl.id] = value;
    }
};

WidgetsContext.getWidgetsContext = function (out) {
    var global = out.global;

    return out.data.widgets ||
        global.widgets ||
        (global.widgets = new WidgetsContext(out));
};


module.exports = WidgetsContext;