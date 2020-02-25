"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/import-tag-conflict/template.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    module_asset_module = require("./test1/asset"),
    asset_module = module_asset_module.default || module_asset_module,
    test = module_asset_module.asset,
    module_asset_module2 = require("./test2/asset"),
    asset = module_asset_module2.asset;

function render(input, out, __component, component, state) {
  var data = input;
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/import-tag-conflict/template.marko"
  };
