var WidgetDef = require('./WidgetDef');
var uniqueId = require('./uniqueId');
var initWidgets = require('./init-widgets');
var EventEmitter = require('events').EventEmitter;
var inherit = require('raptor-util/inherit');
var helpers = require('../taglib/helpers');
var raptorRenderer = require('raptor-renderer');

var PRESERVE_EL = 1;
var PRESERVE_EL_BODY = 2;

function widgetBodyRenderer(input, out) {
    var widget = input.widget;

    var widgetDef = new WidgetDef({
        id: widget.id
    }, null, out);

    helpers.widgetBody(out, null, input.widgetBody, widgetDef);
}

function WidgetsContext(out) {
    EventEmitter.call(this);
    this.out = out;
    this.widgets = [];
    this.widgetStack = [];
    this.preserved = null;
    this.reusableWidgets = null;
    this.reusableWidgetsById = null;
}

WidgetsContext.prototype = {
    getWidgets: function () {
        return this.widgets;
    },

    getWidgetStack: function() {
        return this.widgetStack;
    },

    getWidget: function() {
        return this.widgetStack.length ? this.widgetStack[this.widgetStack.length - 1] : undefined;
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

    isPreservedEl: function(id) {
        var preserved = this.preserved;
        return preserved && preserved[id] === PRESERVE_EL;
    },

    isPreservedBodyEl: function(id) {
        var preserved = this.preserved;
        return preserved && preserved[id] === PRESERVE_EL_BODY;
    },

    isReusedWidget: function(id) {
        return this.reusableWidgetsById && this.reusableWidgetsById.hasOwnProperty(id);
    },

    addPreservedDOMNode: function(existingEl, bodyOnly) {
        var preserved = this.preserved || (this.preserved = {});
        preserved[existingEl.id] = bodyOnly ?
            PRESERVE_EL_BODY :
            PRESERVE_EL;
    },

    addReusableWidget: function(existingWidget, newState, newProps) {
        var reusableWidgets = this.reusableWidgets || (this.reusableWidgets = []);
        var reusableWidgetsById = this.reusableWidgetsById || (this.reusableWidgetsById = []);

        reusableWidgetsById[existingWidget.id] = existingWidget;

        reusableWidgets.push({
            widget: existingWidget,
            state: newState,
            props: newProps
        });
    },

    reuseWidgets: function() {
        var reusableWidgets = this.reusableWidgets;
        if (reusableWidgets) {
            for (var i=0, len=reusableWidgets.length; i<len; i++) {
                var reusableWidgetInfo = reusableWidgets[i];

                var existingWidget = reusableWidgetInfo.widget;

                // Widget is no longer destroyed
                existingWidget.__lifecycleState = null;

                var newState = reusableWidgetInfo.state;
                var newProps = reusableWidgetInfo.props;

                if (newState) {
                    existingWidget.replaceState(newState);

                    var bodyEl = existingWidget.getBodyEl();

                    if (bodyEl) {
                        var newWidgetBody = existingWidget.getInitialBody ?
                            existingWidget.getInitialBody(newProps) :
                            newProps.renderBody;

                        if (newWidgetBody) {
                            raptorRenderer.render(widgetBodyRenderer, {
                                    widget: existingWidget,
                                    widgetBody: newWidgetBody
                                })
                                .replaceChildrenOf(bodyEl);
                        }
                    }

                } else {
                    // We are a stateless widget... the props have already been
                    // normalized
                    existingWidget._rerender(newProps, true /* isReuse */);
                }
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