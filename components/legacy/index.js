var modern = require('../index');

// legacy api
exports.defineComponent = require('./defineComponent-legacy');
exports.defineWidget = require('./defineWidget-legacy');
exports.defineRenderer = require('./defineRenderer-legacy');
exports.makeRenderable = exports.renderable = require('../../runtime/renderable');

// referenced by compiled templates
exports.w = require('./defineWidget-legacy');
exports.rc = modern.rc;
exports.r = require('./renderer-legacy');

// server only
exports.writeInitWidgetsCode = modern.writeInitComponentsCode;
exports.getRenderedWidgets = modern.getRenderedComponents;

// browser only
var Widget = exports.Widget = modern.Component;
exports.onInitWidget = modern.onInitComponent;
exports.getWidgetForEl = modern.getComponentForEl;
exports.initWidgets = modern.init;

// monkey patch Widget
if (Widget) {
    var WidgetProto = Widget.prototype;
    WidgetProto.setProps = WidgetProto.$__setInput;
    WidgetProto.rerender = function(newInput) {
        if (newInput) {
            this.input = newInput;            
        }

        this.forceUpdate();
        this.update();
    };
}

var RenderResult = require('../../runtime/RenderResult');

RenderResult.prototype.getWidget = RenderResult.prototype.getComponent;
RenderResult.prototype.getWidgets = RenderResult.prototype.getComponents;