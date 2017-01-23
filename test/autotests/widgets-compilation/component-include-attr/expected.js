var marko_template = module.exports = require("marko/html").t(__filename),
    marko_component = require("./component"),
    marko_widgets = require("marko/widgets"),
    marko_registerWidget = marko_widgets.rw,
    marko_widgetType = marko_registerWidget("/marko-test$1.0.0/autotests/widgets-compilation/component-include-attr/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/widgets/taglib/include-tag")),
    marko_attr = marko_helpers.a;

function render(data, out, widget, state) {
  out.w("<div" +
    marko_attr("id", widget.id) +
    "><h1>Header</h1>");

  var __widgetId1 = widget.elId("0[]");

  out.w("<div" +
    marko_attr("id", __widgetId1) +
    ">");

  include_tag({
      _target: data.renderBody,
      _elId: __widgetId1,
      _arg: widget
    }, out);

  out.w("</div></div>");
}

marko_template._ = marko_widgets.r(render, {
    type: marko_widgetType
  }, marko_component);

marko_template.Widget = marko_widgets.w(marko_component, marko_template._);
