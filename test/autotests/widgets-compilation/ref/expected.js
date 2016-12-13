var marko_template = require("marko/html").t(__filename);

module.exports = marko_template;

var marko_component = (function() {
      var marko_component;

      marko_component = {
          onMount: function () {
          }
      };

      return marko_component;
    })(),
    marko_widgets = require("marko/widgets"),
    marko_registerWidget = marko_widgets.registerWidget,
    marko_widgetType = marko_registerWidget("/marko-test$1.0.0/autotests/widgets-compilation/ref/index.marko", function() {
      return module.exports;
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTemplate = marko_helpers.l,
    app_foo_template = marko_loadTemplate(require.resolve("./components/app-foo")),
    marko_loadTag = marko_helpers.t,
    app_foo_tag = marko_loadTag(app_foo_template),
    marko_attr = marko_helpers.a;

function render(data, out, widget, state) {
  out.w("<div class=\"root\"" +
    marko_attr("id", widget.id) +
    ">");

  app_foo_tag({
      $w: [
        widget,
        "foo"
      ]
    }, out);

  out.w("<a href=\"ebay.com\"" +
    marko_attr("id", widget.elId("link")) +
    ">eBay</a></div>");
}

marko_template._ = marko_widgets.r(render, {
    type: marko_widgetType
  }, marko_component);

marko_template.Widget = marko_widgets.w(marko_component, marko_template._);
