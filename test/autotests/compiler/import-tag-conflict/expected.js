var marko_template = module.exports = require("marko/html").t(__filename),
    asset_module = require("./test1/asset"),
    test = asset_module.asset,
    asset_module2 = require("./test2/asset"),
    asset = asset_module2.asset;

function render(data, out) {}

marko_template._ = render;
