var template = require("marko/html").c(__filename);

module.exports = template;

var marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTemplate = marko_helpers.l,
    test_message_template = marko_loadTemplate(require.resolve("./components/test-message/template.marko")),
    marko_loadTag = marko_helpers.t,
    test_message_tag = marko_loadTag(test_message_template);

function render(data, out) {
  test_message_tag({
      body: someCondition && {
          renderBody: function renderBody(out) {
            out.w("My body");
          }
        }
    }, out);
}

template._ = render;
