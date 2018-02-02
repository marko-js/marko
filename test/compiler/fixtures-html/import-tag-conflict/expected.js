"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/marko-test$1.0.0/compiler/fixtures-html/import-tag-conflict/template.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
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

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/marko-test$1.0.0/compiler/fixtures-html/import-tag-conflict/template.marko"
  };
