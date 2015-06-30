var WidgetDef = require('./WidgetDef');
var uniqueId = require('./uniqueId');
var initWidgets = require('./init-widgets');
var EventEmitter = require('events').EventEmitter;
var inherit = require('raptor-util/inherit');
var helpers = require('../taglib/helpers');
var raptorRenderer = require('raptor-renderer');

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

    addPreservedDOMNode: function(existingEl, bodyOnly) {
        var reusableNodes = this.reusableNodes || (this.reusableNodes = []);
        reusableNodes.push(existingEl);
        reusableNodes.push(bodyOnly);

        if (existingEl !== this.out.global.__rerenderEl) {
            // Remove it out of the DOM so that it does not get destroyed
            existingEl.parentNode.removeChild(existingEl);
        }
    },

    addReusableWidget: function(existingWidget, newState, newProps) {
        var reusableWidgets = this.reusableWidgets || (this.reusableWidgets = []);

        // Remove this widget out of the DOM so that it does not get destroyed
        existingWidget.detach();
        reusableWidgets.push({
            widget: existingWidget,
            state: newState,
            props: newProps
        });
    },

    reuseDOMNodes: function() {
        var reusableNodes = this.reusableNodes;
        if (reusableNodes) {
            for (var i=0, len=reusableNodes.length; i<len; i+=2) {
                var oldEl = reusableNodes[i];
                var bodyOnly = reusableNodes[i+1];
                var id = oldEl.id;
                var newEl = document.getElementById(id);

                // console.log('Reusing DOM node ', id, 'bodyOnly: ', bodyOnly);

                if (bodyOnly) {

                    var fragment = document.createDocumentFragment();
                    var curChild = oldEl.firstChild;
                    while(curChild) {
                        var nextChild = curChild.nextSibling;
                        fragment.appendChild(curChild);
                        curChild = nextChild;
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
            for (var i=0, len=reusableWidgets.length; i<len; i++) {
                var reusableWidgetInfo = reusableWidgets[i];

                var existingWidget = reusableWidgetInfo.widget;
                var newState = reusableWidgetInfo.state;
                var newProps = reusableWidgetInfo.props;
                var id = existingWidget.id;
                var placeholderEl = document.getElementById(id);

                // console.log('Reusing existing widget ', id, 'new state: ', newState);
                placeholderEl.parentNode.replaceChild(existingWidget.el, placeholderEl);

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