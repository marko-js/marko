"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    test_message_template = marko_loadTemplate(require.resolve("./components/test-message/template.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_message_tag = marko_loadTag(test_message_template);

function render(input, out) {
  var data = input;

  test_message_tag({
      body: someCondition && {
          renderBody: function renderBody(out) {
            out.w("My body");
          }
        }
    }, out);
}

marko_template._ = render;

marko_template.meta = {
    tags: [
      "./components/test-message/template.marko"
    ]
  };
