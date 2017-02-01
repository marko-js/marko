var marko_template = module.exports = require("marko/html").t(__filename),
    marko_widgets = require("marko/widgets/legacy"),
    marko_registerWidget = marko_widgets.rw,
    marko_defineWidget = marko_widgets.w,
    marko_widgetType = marko_registerWidget("/marko-test$1.0.0/autotests/widgets-compilation-deprecated/bind-component/index", function() {
      return marko_defineWidget(require("./"));
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, widget, state) {
  out.w("<div" +
    marko_attr("id", widget.id) +
    "></div>");
}

marko_template._ = marko_widgets.r(render, {
    type: marko_widgetType
  });
