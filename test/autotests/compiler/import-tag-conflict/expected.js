"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    asset_module = require("./test1/asset"),
    test = asset_module.asset,
    asset_module2 = require("./test2/asset"),
    asset = asset_module2.asset;

function render(input, out) {
  var data = input;
}

marko_template._ = render;

marko_template.meta = {};
