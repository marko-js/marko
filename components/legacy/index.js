var modern = require('../index');

// legacy api
exports.defineComponent = require('./defineComponent-legacy');
exports.defineWidget = require('./defineWidget-legacy');
exports.defineRenderer = require('./defineRenderer-legacy');
exports.makeRenderable = exports.renderable = require('../../runtime/renderable');

// referenced by compiled templates
exports.w = require('./defineWidget-legacy');
exports.rw = modern.rw;
exports.r = require('./renderer-legacy');

// server only
exports.writeInitWidgetsCode = modern.writeInitWidgetsCode;
exports.getRenderedWidgets = modern.getRenderedWidgets;

// browser only
var Widget = exports.Widget = modern.Widget;
exports.onInitWidget = modern.onInitWidget;
exports.getWidgetForEl = modern.getWidgetForEl;
exports.initWidgets = modern.initWidgets;

// monkey patch Widget
if (Widget) {
    var WidgetProto = Widget.prototype;
    WidgetProto.setProps = WidgetProto.$__setInput;
}