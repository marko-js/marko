var componentsUtil = require("./util");
var initComponents = require("./init-components");
var registry = require("./registry");

require("./ComponentsContext").___initClientRendered =
    initComponents.___initClientRendered;

exports.getComponentForEl = componentsUtil.___getComponentForEl;
exports.init = window.$initComponents = initComponents.___initServerRendered;

exports.register = function(id, component) {
    registry.___register(id, function() {
        return component;
    });
};
