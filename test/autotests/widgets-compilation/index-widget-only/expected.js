var marko_template = module.exports = require("marko/html").t(__filename),
    marko_widgets = require("marko/widgets"),
    marko_registerWidget = marko_widgets.rw,
    marko_widgetType = marko_registerWidget("/marko-test$1.0.0/autotests/widgets-compilation/index-widget-only/widget", function() {
      return require("./widget");
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, widget, state) {
  var data = input;

  out.w("<div" +
    marko_attr("id", widget.id) +
    "></div>");
}

marko_template._ = marko_widgets.r(render, {
    type: marko_widgetType
  });

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./widget"
        },
      {
          type: "require",
          path: "marko/widgets"
        }
    ]
  };
