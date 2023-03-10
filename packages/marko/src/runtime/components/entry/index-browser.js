var registry = require("../registry");

exports.getComponentForEl = require("../util").___getComponentForEl;
exports.init = registry.___initServerRendered;
exports.register = function (id, component) {
  registry.r(id, function () {
    return component;
  });
};
