function create(__markoHelpers) {
  var marko_escapeXml = __markoHelpers.x,
      marko_forEach = __markoHelpers.f;

  return function render(data, out) {
    function macro_renderTree(node, out, renderBody) {
      out.w("Name: " +
        marko_escapeXml(node.name) +
        " Children: ");

      if (node.children) {
        out.w("<ul>");

        marko_forEach(node.children, function(child) {
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

module.exports = require("marko").c(__filename, create);
