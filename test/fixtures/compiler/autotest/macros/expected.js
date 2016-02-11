function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      forEach = __helpers.f;

  return function render(data, out) {
    function macro_renderTree(node, out, renderBody) {
      out.w("Name: " +
        escapeXml(node.name) +
        " Children: ");

      if (node.children) {
        out.w("<ul>");

        forEach(node.children, function(child) {
          out.w("<li>");

          macro_renderTree(child, out);

          out.w("</li>");
        });

        out.w("</ul>");
      }
    }

    macro_renderTree(data.node, out);
  };
}

(module.exports = require("marko").c(__filename)).c(create);
