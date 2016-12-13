var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("lasso/taglib/page-tag")),
    lasso_head_tag = marko_loadTag(require("lasso/taglib/head-tag")),
    lasso_body_tag = marko_loadTag(require("lasso/taglib/body-tag")),
    init_widgets_tag = marko_loadTag(require("marko/widgets/taglib/init-widgets-tag")),
    lasso_slot_tag = marko_loadTag(require("lasso/taglib/slot-tag")),
    browser_refresh_tag = marko_loadTag(require("browser-refresh-taglib/refresh-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/taglibs/async/await-reorderer-tag"));

function render(data, out) {
  lasso_page_tag({
      dependencies: data.browserDependencies,
      lasso: data.lasso,
      dirname: __dirname,
      filename: __filename
    }, out);

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Marko Widgets Tests</title>");

  lasso_head_tag({}, out);

  out.w("</head><body><div id=\"test\"></div><div id=\"mocha\"></div><div id=\"testsTarget\"></div>");

  lasso_body_tag({}, out);

  init_widgets_tag({
      immediate: true
    }, out);

  lasso_slot_tag({
      name: "mocha-run"
    }, out);

  browser_refresh_tag({}, out);

  await_reorderer_tag({}, out);

  init_widgets_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = render;
