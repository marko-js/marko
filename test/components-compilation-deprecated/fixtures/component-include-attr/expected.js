"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/components-compilation-deprecated/fixtures/component-include-attr/index",
    legacy_helpers = require("marko/src/components/legacy/helpers"),
    marko_rendererLegacy = legacy_helpers.r,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    _preserve_tag = marko_loadTag(require("marko/src/components/taglib/preserve-tag"));

function render(input, out, __component, widget, component) {
  var data = input;

  out.w("<div><h1>Header</h1>");

  var __key3 = __component.___nextKey("2");

  out.w("<div>");

  _preserve_tag({
      bodyOnly: true,
      if: !__component.b,
      key: __key3,
      renderBody: function renderBody(out) {
        include_tag({
            _target: __component.b
          }, out, __component, "4");
      }
    }, out);

  out.w("</div></div>");
}

marko_template._ = marko_rendererLegacy(render, {
    ___split: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    legacy: true,
    id: "/marko-test$1.0.0/components-compilation-deprecated/fixtures/component-include-attr/index",
    component: "./",
    deps: [
      "marko/src/components"
    ],
    tags: [
      "marko/src/taglibs/core/include-tag",
      "marko/src/components/taglib/preserve-tag"
    ]
  };
