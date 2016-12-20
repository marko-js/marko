var events = require('../runtime/events');

function onInitWidget(listener) {
    events.on('initWidget', listener);
}

function getWidgetForEl(el, doc) {
    if (el) {
        var node = typeof el === 'string' ? (doc || window.document).getElementById(el) : el;
        if (node) {
            var widget = node.__widget;

            while(widget) {
                var rootFor = widget.$__rootFor;
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
            widgetsContext.$__initWidgets(eventArgs.document);
        }
    });

exports.onInitWidget = onInitWidget;
exports.Widget = require('./Widget');
exports.getWidgetForEl = getWidgetForEl;
exports.initWidgets = require('./init-widgets').$__initServerRendered;

exports.w = require('./defineWidget');
exports.r = require('./renderer');
exports.rw = require('./registry').$__register;

window.$MARKO_WIDGETS = exports; // Helpful when debugging... WARNING: DO NOT USE IN REAL CODE!