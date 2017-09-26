"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/marko-test$1.0.0/autotests/compiler/import-tag-conflict/template.marko", function() {
      return module.exports;
    }),
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

marko_template.meta = {};
