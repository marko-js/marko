var modernMarko = require("../");

// legacy api
exports.defineComponent = require("./defineComponent-legacy");
exports.defineWidget = require("./defineWidget-legacy");
exports.defineRenderer = require("./defineRenderer-legacy");
exports.makeRenderable = exports.renderable = require("../../renderable");

// server only
exports.writeInitWidgetsCode = modernMarko.writeInitComponentsCode;
exports.getRenderedWidgets = exports.getRenderedWidgetIds =
    modernMarko.getRenderedComponents;
exports.getInitWidgetsCode = function(out) {
    return modernMarko.___getInitComponentsCode(out, out);
};
