var marko_template = module.exports = require("marko/html").t(__filename),
    markoWidgets_event = require("marko/widgets/taglib/helpers/event"),
    marko_widgets = require("marko/widgets"),
    marko_registerWidget = marko_widgets.rw,
    marko_widgetType = marko_registerWidget("/marko-test$1.0.0/autotests/widgets-compilation/macro-widget/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    marko_forEach = marko_helpers.f;

var marko_component = {};

function render(data, out, widget, state) {
  function macro_renderButton(color, out, renderBody) {
    out.w("<button" +
      marko_attr("data-_onclick", markoWidgets_event("handleColorClick", widget.id, [
        color
      ])) +
      ">" +
      marko_escapeXml(color) +
      "</button>");
  }

  out.w("<div" +
    marko_attr("id", widget.id) +
    ">");

  marko_forEach([
      "red",
      "green",
      "blue"
    ], function(color) {
    macro_renderButton(color, out);
  });

  out.w("</div>");
}

marko_template._ = marko_widgets.r(render, {
    type: marko_widgetType
  }, marko_component);

marko_template.Widget = marko_widgets.w(marko_component, marko_template._);
