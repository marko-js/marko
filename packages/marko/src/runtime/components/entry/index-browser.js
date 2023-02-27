var initComponents = require("../init-components");
require("../ComponentsContext").___initClientRendered =
  initComponents.___initClientRendered;

exports.getComponentForEl = require("../util").___getComponentForEl;
exports.init = window.$initComponents = initComponents.___initServerRendered;

var registry = require("../registry");
exports.register = function (id, component) {
  registry.r(id, function () {
    return component;
  });
};
