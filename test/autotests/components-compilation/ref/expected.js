var marko_template = module.exports = require("marko/html").t(__filename),
    marko_widgets = require("marko/widgets"),
    marko_registerWidget = marko_widgets.rw,
    marko_widgetType = marko_registerWidget("/marko-test$1.0.0/autotests/widgets-compilation/ref/index.marko", function() {
      return module.exports;
    }),
    marko_loadTemplate = require("marko/runtime/helper-loadTemplate"),
    app_foo_template = marko_loadTemplate(require.resolve("./components/app-foo")),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    app_foo_tag = marko_loadTag(app_foo_template),
    marko_attr = marko_helpers.a;

var marko_component = {
    onMount: function () {
    }
};

function render(input, out, widget, state) {
  var data = input;

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

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./index.marko"
        },
      {
          type: "require",
          path: "marko/widgets"
        }
    ],
    tags: [
      "./components/app-foo"
    ]
  };
