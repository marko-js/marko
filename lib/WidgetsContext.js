'use strict';
var WidgetDef = require('./WidgetDef');
var uniqueId = require('./uniqueId');
var initWidgets = require('./init-widgets');
var EventEmitter = require('events').EventEmitter;
var inherit = require('raptor-util/inherit');

function WidgetsContext(out) {
    EventEmitter.call(this);
    this.out = out;
    this.widgets = [];
    this.widgetStack = [];
    this.reusableNodes = null;
    this.reusableWidgets = null;
}

WidgetsContext.prototype = {
    getWidgets: function () {
        return this.widgets;
    },

    getWidgetStack: function() {
        return this.widgetStack;
    },

    beginWidget: function (widgetInfo, callback) {
        var _this = this;
        var widgetStack = _this.widgetStack;
        var origLength = widgetStack.length;
        var parent = origLength ? widgetStack[origLength - 1] : null;
        if (!widgetInfo.id) {
            widgetInfo.id = _this._nextWidgetId();
        }

        widgetInfo.parent = parent;

        function end() {
            widgetStack.length = origLength;
        }

        var widgetDef = new WidgetDef(widgetInfo, end, this.out);
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
        return uniqueId(this.out);
    },
    initWidgets: function () {
        var widgetDefs = this.widgets;
        initWidgets.initClientRendered(widgetDefs);
        this.clearWidgets();
    },
    onBeginWidget: function(listener) {
        this.on('beginWidget', listener);
    },

    addReusableDOMNode: function(existingEl, bodyOnly) {
        var reusableNodes = this.reusableNodes || (this.reusableNodes = []);
        reusableNodes.push(existingEl);
        reusableNodes.push(bodyOnly);

        // Remove it out of the DOM so that it does not get destroyed
        existingEl.parentNode.removeChild(existingEl);
    },

    addReusableWidget: function(existingWidget, newState) {
        var reusableWidgets = this.reusableWidgets || (this.reusableWidgets = []);

        // Remove this widget out of the DOM so that it does not get destroyed
        existingWidget.detach();

        reusableWidgets.push(existingWidget);
        reusableWidgets.push(newState);
    },

    reuseDOMNodes: function() {
        var reusableNodes = this.reusableNodes;
        if (reusableNodes) {
            for (var i=0, len=reusableNodes.length; i<len; i+=2) {
                var oldEl = reusableNodes[i];
                var bodyOnly = reusableNodes[i+1];
                var id = oldEl.id;
                var newEl = document.getElementById(id);

                if (bodyOnly) {
                    var fragment = document.createDocumentFragment();
                    var curChild = oldEl.firstChild;
                    while(curChild) {
                        fragment.appendChild(curChild);
                        curChild = curChild.nextSibling;
                    }

                    newEl.appendChild(fragment);
                } else {
                    newEl.parentNode.replaceChild(oldEl, newEl);
                }
            }
        }
    },

    reuseWidgets: function() {
        var reusableWidgets = this.reusableWidgets;
        if (reusableWidgets) {
            for (var i=0, len=reusableWidgets.length; i<len; i+=2) {
                var existingWidget = reusableWidgets[i];
                var newState = reusableWidgets[i+1];
                var id = existingWidget.id;
                var placeholderEl = document.getElementById(id);

                // console.log('Reusing existing widget ', id, 'New state: ', newState);
                placeholderEl.parentNode.replaceChild(existingWidget.el, placeholderEl);
                existingWidget.replaceState(newState);
                // existingWidget.update();
            }
        }
    }
};

inherit(WidgetsContext, EventEmitter);

WidgetsContext.getWidgetsContext = function (out) {
    var global = out.global;

    return out.data.widgets ||
        global.widgets ||
        (global.widgets = new WidgetsContext(out));
};


module.exports = WidgetsContext;