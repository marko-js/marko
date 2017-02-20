var modern = require('../index');

// legacy api
exports.defineComponent = require('./defineComponent-legacy');
exports.defineComponent = require('./defineComponent-legacy');
exports.defineRenderer = require('./defineRenderer-legacy');
exports.makeRenderable = exports.renderable = require('../../runtime/renderable');

// referenced by compiled templates
exports.w = require('./defineComponent-legacy');
exports.rw = modern.rw;
exports.r = require('./renderer-legacy');

// server only
exports.writeInitComponentsCode = modern.writeInitComponentsCode;
exports.getRenderedComponents = modern.getRenderedComponents;

// browser only
var Component = exports.Component = modern.Component;
exports.onInitComponent = modern.onInitComponent;
exports.getComponentForEl = modern.getComponentForEl;
exports.initComponents = modern.initComponents;

// monkey patch Component
if (Component) {
    var ComponentProto = Component.prototype;
    ComponentProto.setProps = ComponentProto.$__setInput;
}