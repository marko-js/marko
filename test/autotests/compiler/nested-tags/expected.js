function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      test_nested_tags_overlay_tag = __loadTag(require("./tags/test-nested-tags-overlay/renderer"), 0, 0, 1),
      test_nested_tags_overlay_body_tag = __loadTag(null, "body", 0),
      test_nested_tags_overlay_footer_tag = __loadTag(null, "footer", 0);

  return function render(data, out) {
    test_nested_tags_overlay_tag({
        header: "data.header"
      }, out, 0, function renderBody(out, test_nested_tags_overlay0) {
      test_nested_tags_overlay_body_tag({
          className: "my-body",
          renderBody: function renderBody(out) {
            out.w("Body content");
          }
        }, out, test_nested_tags_overlay0);

      test_nested_tags_overlay_footer_tag({
          className: "my-footer",
          renderBody: function renderBody(out) {
            out.w("Footer content");
          }
        }, out, test_nested_tags_overlay0);
    });
  };
}

(module.exports = require("marko").c(__filename)).c(create);
