var marko_template = module.exports = require("marko/vdom").t(),
    marko_helpers = require("marko/runtime/vdom/helpers"),
    marko_loadTag = marko_helpers.t,
    test_hello_tag = marko_loadTag(require("./tags/test-hello/renderer")),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("cee604"),
    marko_node0 = marko_createElement("a", {
        href: "foo"
      }, 1, marko_const_nextId())
      .t("Body content");

function render(data, out) {
  out.be("div");

  test_hello_tag({
      name: "World",
      renderBody: function renderBody(out) {
        out.n(marko_node0);
      }
    }, out);

  out.ee();
}

marko_template._ = render;
