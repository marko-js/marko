var modernMarko = require('../');
var Component = require('../Component');

// legacy api
exports.defineComponent = require('./defineComponent-legacy');
exports.defineWidget = require('./defineWidget-legacy');
exports.defineRenderer = require('./defineRenderer-legacy');
exports.makeRenderable = exports.renderable = require('../../runtime/renderable');

// browser only
var Widget = exports.Widget = Component;
exports.onInitWidget = modernMarko.onInitComponent;
exports.getWidgetForEl = modernMarko.getComponentForEl;
exports.initWidgets = modernMarko.init;

// monkey patch Widget
if (Widget) {
    var WidgetProto = Widget.prototype;
    WidgetProto.setProps = WidgetProto.___setInput;
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
