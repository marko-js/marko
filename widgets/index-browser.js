var ready = require('../runtime/ready');
var Widget = require('./Widget');
var initServerRendered = require('./init-widgets').initServerRendered;
var updateManager = require('./update-manager');
var events = require('../runtime/events');

var WidgetsContext = exports.WidgetsContext = require('./WidgetsContext');
exports.getWidgetsContext = WidgetsContext.getWidgetsContext;
exports.Widget = Widget;
exports.ready = ready;
exports.onInitWidget = function(listener) {
    events.on('initWidget', listener);
};

exports.writeDomEventsEl = function() {
    /* Intentionally empty in the browser */
};

function getWidgetForEl(el, doc) {
    if (el) {
        var node = typeof el === 'string' ? (doc || window.document).getElementById(el) : el;
        if (node) {
            var widget = node.__widget;

            while(widget) {
                var rootFor = widget.__rootFor;
                if (rootFor)  {
                    widget = rootFor;
                } else {
                    break;
                }
            }

            return widget;
        }
    }
}

exports.get = exports.getWidgetForEl = getWidgetForEl;

// Subscribe to DOM manipulate events to handle creating and destroying widgets

events.on('dom/beforeRemove', function(eventArgs) {
        var el = eventArgs.el;
        var widget = el.id ? getWidgetForEl(el) : null;
        if (widget) {
            widget.destroy({
                removeNode: false,
                recursive: true
            });
        }
    })
    .on('mountNode', function(eventArgs) {
        var out = eventArgs.out;
        var widgetsContext = out.global.widgets;
        if (widgetsContext) {
            widgetsContext.initWidgets(eventArgs.document);
        }
    });

exports.initWidgets = initServerRendered;

var jquery = window.$;

exports.$ = jquery;

exports.registerWidget = require('./registry').register;
exports.defineComponent = require('./defineComponent');
exports.defineWidget = require('./defineWidget');
exports.defineRenderer = require('./defineRenderer');
exports.makeRenderable = exports.renderable = require('../runtime/renderable');

exports.c = function(component, template) {
    component.template = template;
    return exports.defineComponent(component);
};

exports.r = function(renderer, template) {
    renderer.template = template;
    return exports.defineRenderer(renderer);
};

exports.batchUpdate = updateManager.batchUpdate;
exports.onAfterUpdate = updateManager.onAfterUpdate;

window.$MARKO_WIDGETS = exports; // Helpful when debugging... WARNING: DO NOT USE IN REAL CODE!