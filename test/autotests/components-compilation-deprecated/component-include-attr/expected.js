"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    legacy_helpers = require("marko/src/components/legacy/helpers"),
    marko_defineWidget_legacy = legacy_helpers.w,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/components-compilation-deprecated/component-include-attr/index", function() {
      return marko_defineWidget_legacy(require("./"));
    }),
    marko_rendererLegacy = legacy_helpers.r,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/components/taglib/include-tag")),
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

marko_template._ = marko_rendererLegacy(render, {
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
          path: "marko/src/components"
        }
    ],
    tags: [
      "marko/src/components/taglib/include-tag"
    ]
  };
