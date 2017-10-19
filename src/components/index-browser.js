var componentsUtil = require('./util');
var initComponents = require('./init-components');
var registry = require('./registry');

require('./ComponentsContext').___initClientRendered = initComponents.___initClientRendered;

exports.getComponentForEl = componentsUtil.___getComponentForEl;

exports.register = function(id, component) {
    registry.___register(id, function() { return component; });
};

exports.init = function(components) {
    if (components) Object.keys(components).forEach(function(componentId) {
        registry.___register(componentId, components[componentId]);
    });
    initComponents.___initServerRendered();
};
