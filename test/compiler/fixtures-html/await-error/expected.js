"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/await-error/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    await_tag = marko_loadTag(require("marko/src/core-tags/core/await/renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  await_tag({
      _provider: data.userInfo,
      _name: "data.userInfo",
      then: {
          renderBody: function(out, userInfo) {
            out.w("Success!");
          }
        },
      catch: {
          renderBody: function(out) {
            out.w("something went wrong!");
          }
        }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/await-error/template.marko",
    tags: [
      "marko/src/core-tags/core/await/renderer"
    ]
  };
