var modernMarko = require("../");
var Component = require("../Component");
var loader = require("../../../loader");

var complain = "MARKO_DEBUG" && require("complain");

// expose legacy
require("../registry-browser").___legacy = exports;
exports.load = function(typeName) {
  return exports.defineWidget(loader(typeName));
};

// legacy api
exports.defineComponent = require("./defineComponent-legacy");
exports.defineWidget = require("./defineWidget-legacy");
exports.defineRenderer = require("./defineRenderer-legacy");
exports.makeRenderable = exports.renderable = require("../../renderable");

// browser only
var Widget = (exports.Widget = Component);
exports.onInitWidget = modernMarko.onInitComponent;
exports.getWidgetForEl = exports.get = function(elOrId) {
  var el = elOrId;

  if (typeof elOrId === "string") {
    el = document.getElementById(elOrId);
  }

  if (el && el.__widget) {
    return el.__widget;
  }

  return modernMarko.getComponentForEl(el);
};
exports.initWidgets = modernMarko.init;

// monkey patch Widget
if (Widget) {
  var WidgetProto = Widget.prototype;
  WidgetProto.setProps = function(newInput) {
    this.___isReceivingNewInput = true;
    this.___setInput(newInput);
  };
  WidgetProto.rerender = function(newInput) {
    if (newInput) {
      this.setProps(newInput);
    }

    this.forceUpdate();
    this.update();
  };
}

var RenderResult = require("../../RenderResult");

RenderResult.prototype.getWidget = function() {
  // eslint-disable-next-line no-constant-condition
  if ("MARKO_DEBUG") {
    complain("getWidget is deprecated. use getComponent instead.");
  }
  return this.getWidgets()[0];
};
RenderResult.prototype.getWidgets = function() {
  // eslint-disable-next-line no-constant-condition
  if ("MARKO_DEBUG") {
    complain("getWidgets is deprecated. use getComponents instead.");
  }
  return RenderResult.prototype.getComponents
    .apply(this, arguments)
    .filter(function(component) {
      return component.___isLegacy;
    });
};
