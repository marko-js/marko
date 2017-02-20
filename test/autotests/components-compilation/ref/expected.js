var marko_template = module.exports = require("marko/html").t(__filename),
    marko_components = require("marko/components"),
    marko_registerComponent = marko_components.rw,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation/ref/index.marko", function() {
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

function render(input, out, component, state) {
  var data = input;

  out.w("<div class=\"root\"" +
    marko_attr("id", component.id) +
    ">");

  app_foo_tag({
      $w: [
        component,
        "foo"
      ]
    }, out);

  out.w("<a href=\"ebay.com\"" +
    marko_attr("id", component.elId("link")) +
    ">eBay</a></div>");
}

marko_template._ = marko_components.r(render, {
    type: marko_componentType
  }, marko_component);

marko_template.Component = marko_components.w(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./index.marko"
        },
      {
          type: "require",
          path: "marko/components"
        }
    ],
    tags: [
      "./components/app-foo"
    ]
  };
