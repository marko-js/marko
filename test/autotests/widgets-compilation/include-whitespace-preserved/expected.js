var marko_template = module.exports = require("marko/html").t(__filename),
    marko_widgets = require("marko/widgets"),
    marko_registerWidget = marko_widgets.rw,
    marko_widgetType = marko_registerWidget("/marko-test$1.0.0/autotests/widgets-compilation/include-whitespace-preserved/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/widgets/taglib/include-tag")),
    marko_attr = marko_helpers.a;

var marko_component = {};

function render(data, out, widget, state) {
  var __widgetId0 = widget.id;

  out.w("<div" +
    marko_attr("id", __widgetId0) +
    ">");

  include_tag({
      _target: data.renderBody,
      _elId: __widgetId0,
      _arg: widget
    }, out);

  out.w("</div>");
}

marko_template._ = marko_widgets.r(render, {
    type: marko_widgetType
  }, marko_component);

marko_template.Widget = marko_widgets.w(marko_component, marko_template._);
