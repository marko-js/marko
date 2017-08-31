var componentsUtil = require('./util');
var initComponents = require('./init-components');
var registry = require('./registry');

require('./ComponentsContext').___initClientRendered = initComponents.___initClientRendered;

exports.getComponentForEl = componentsUtil.___getComponentForEl;
exports.init = function(components) {
    if (components) Object.keys(components).forEach(function(componentId) {
        registry.___register(componentId, components[componentId]);
    });
    initComponents.___initServerRendered();
};
