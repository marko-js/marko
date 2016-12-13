var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
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

marko_template._ = render;
