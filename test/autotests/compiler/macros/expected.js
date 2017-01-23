var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f;

function render(data, out) {
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
}

marko_template._ = render;
