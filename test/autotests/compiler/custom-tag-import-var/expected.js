"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/compiler/custom-tag-import-var/template.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_import_var_tag = marko_loadTag(require("./tags/test-import-var/renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  test_import_var_tag({
      name: "World",
      foo: input.foo,
      bar: input.bar,
      renderBody: function renderBody(out) {
        out.w("This is the body content");
      }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    tags: [
      "./tags/test-import-var/renderer"
    ]
  };
