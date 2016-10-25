function create(__markoHelpers) {
  var marko_loadTag = __markoHelpers.t,
      test_hello = marko_loadTag(require("./tags/test-hello/renderer")),
      marko_createElement = __markoHelpers.e,
      marko_const = __markoHelpers.const,
      marko_const_nextId = marko_const("b7b61f"),
      marko_node0 = marko_createElement("a", {
          href: "foo"
        }, 1, marko_const_nextId())
        .t("Body content");

  return function render(data, out) {
    out.be("div");

    test_hello({
        name: "World",
        renderBody: function renderBody(out) {
          out.n(marko_node0);
        }
      }, out);

    out.ee();
  };
}

module.exports = require("marko/vdom").c(__filename, create);
