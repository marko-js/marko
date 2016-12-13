var marko_template = module.exports = require("marko/html").t(__filename),
    marko_component = (function() {
      var marko_component;

      marko_component = {};

      return marko_component;
    })(),
    marko_widgets = require("marko/widgets"),
    marko_registerWidget = marko_widgets.registerWidget,
    marko_widgetType = marko_registerWidget("/marko-test$1.0.0/autotests/widgets-compilation/component-inline-multiple-roots/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(data, out, widget, state) {
  out.w("<div" +
    marko_attr("id", widget.elId("_r0")) +
    ">A</div><span" +
    marko_attr("id", widget.elId("_r1")) +
    ">B</span>");
}

marko_template._ = marko_widgets.r(render, {
    type: marko_widgetType,
    roots: [
      "_r0",
      "_r1"
    ]
  }, marko_component);

marko_template.Widget = marko_widgets.w(marko_component, marko_template._);
