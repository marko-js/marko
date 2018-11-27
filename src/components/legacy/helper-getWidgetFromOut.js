var getComponentsContext = require("../ComponentsContext")
    .___getComponentsContext;

module.exports = function(out) {
    var componentsContext = getComponentsContext(out);
    var componentDef =
        (componentsContext && componentsContext.___legacyComponentDef) || {};
    componentDef._c = componentDef.___component;
    return componentDef;
};
