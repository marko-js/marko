"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    module_asset_module = require("./test1/asset"),
    asset_module = module_asset_module.default || module_asset_module,
    test = module_asset_module.asset,
    module_asset_module2 = require("./test2/asset"),
    asset = module_asset_module2.asset;

function render(input, out) {
  var data = input;
}

marko_template._ = render;

marko_template.meta = {};
