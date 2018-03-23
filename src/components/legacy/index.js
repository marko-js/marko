var modernMarko = require("../");

// legacy api
exports.defineComponent = require("./defineComponent-legacy");
exports.defineWidget = require("./defineWidget-legacy");
exports.defineRenderer = require("./defineRenderer-legacy");
exports.makeRenderable = exports.renderable = require("../../runtime/renderable");

// server only
exports.writeInitWidgetsCode = modernMarko.writeInitComponentsCode;
exports.getRenderedWidgets = modernMarko.getRenderedComponents;
