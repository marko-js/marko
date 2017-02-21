var marko_template = module.exports = require("marko/html").t(__filename),
    marko_components = require("marko/components/legacy"),
    marko_registerComponent = marko_components.rc,
    marko_defineWidget = marko_components.w,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation-deprecated/component-include-attr/index", function() {
      return marko_defineWidget(require("./"));
    }),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/components/taglib/include-tag")),
    marko_attr = marko_helpers.a;

function render(input, out, __component, widget) {
  var data = input;

  out.w("<div" +
    marko_attr("id", __component.id) +
    "><h1>Header</h1><div" +
    marko_attr("id", __component.elId(0)) +
    ">");

  include_tag({
      _target: __component.b,
      _elId: __component.elId(0)
    }, out);

  out.w("</div></div>");
}

marko_template._ = marko_components.r(render, {
    split: true,
    type: marko_componentType,
    body: 0
  });

marko_template.meta = {
    deps: [
      {
          type: "require",
          path: "./"
        },
      {
          type: "require",
          path: "marko/components"
        }
    ],
    tags: [
      "marko/components/taglib/include-tag"
    ]
  };
