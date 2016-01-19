function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x,
      __loadTag = __helpers.t,
      test_nested_tags_overlay = __loadTag(require("../../../taglib/scanned-tags/test-nested-tags-overlay/renderer"), 0, 0, 1),
      test_nested_tags_overlay_body = __loadTag(null, "body", 0),
      test_nested_tags_overlay_footer = __loadTag(null, "footer", 0);

  return function render(data, out) {
    test_nested_tags_overlay({
      header: "data.header"
    }, out, 0, function renderBody(out, test_nested_tags_overlay0) {
      test_nested_tags_overlay_body({
        className: "my-body",
        renderBody: function renderBody(out) {
          out.w("Body content");
        }
      }, out, test_nested_tags_overlay0);

      test_nested_tags_overlay_footer({
        className: "my-footer",
        renderBody: function renderBody(out) {
          out.w("Footer content");
        }
      }, out, test_nested_tags_overlay0);
    });
  };
}

(module.exports = require("marko").c(__filename)).c(create);
