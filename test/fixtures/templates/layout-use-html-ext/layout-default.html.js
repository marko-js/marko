function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ____________node_modules_marko_layout_placeholder_tag_js = __renderer(require("marko-layout/placeholder-tag")),
      __tag = __helpers.t;

  return function render(data, out) {
    out.w('<h1>');
    __tag(out,
      ____________node_modules_marko_layout_placeholder_tag_js,
      {
        "name": "header",
        "content": data.layoutContent
      },
      function(out) {
        out.w('DEFAULT TITLE');
      });

    out.w('</h1><div>');
    __tag(out,
      ____________node_modules_marko_layout_placeholder_tag_js,
      {
        "name": "body",
        "content": data.layoutContent
      });

    out.w('</div>');
    __tag(out,
      ____________node_modules_marko_layout_placeholder_tag_js,
      {
        "name": "footer",
        "content": data.layoutContent
      });
  };
}
(module.exports = require("marko").c(__filename)).c(create);