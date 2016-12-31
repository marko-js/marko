var events = require('../runtime/events');
var Widget = require('./Widget');
var widgetsUtil = require('./util');

function onInitWidget(listener) {
    events.on('initWidget', listener);
}

exports.onInitWidget = onInitWidget;
exports.Widget = Widget;
exports.getWidgetForEl = widgetsUtil.$__getWidgetForEl;
exports.initWidgets = require('./init-widgets').$__initServerRendered;

exports.w = require('./defineWidget'); // Referenced by compiled templates
exports.r = require('./renderer'); // Referenced by compiled templates
exports.rw = require('./registry').$__register;  // Referenced by compiled templates

window.$__MARKO_WIDGETS = exports; // Helpful when debugging... WARNING: DO NOT USE IN REAL CODE!