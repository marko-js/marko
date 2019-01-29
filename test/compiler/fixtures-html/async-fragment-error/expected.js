"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/async-fragment-error/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    await_tag = marko_loadTag(require("marko/src/taglibs/core/await/renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  await_tag({
      _provider: data.userInfo,
      _name: "data.userInfo",
      then: {
          renderBody: function renderBody(out, userInfo) {
            out.w("Success!");
          }
        },
      catch: {
          renderBody: function renderBody(out) {
            out.w("something went wrong!");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/async-fragment-error/template.marko",
    tags: [
      "marko/src/taglibs/core/await/renderer"
    ]
  };
