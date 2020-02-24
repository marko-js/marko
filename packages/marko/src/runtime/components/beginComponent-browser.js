var ComponentDef = require("./ComponentDef");

module.exports = function beginComponent(
    componentsContext,
    component,
    key,
    ownerComponentDef
) {
    var componentId = component.id;

    var globalContext = componentsContext.___globalContext;
    var componentDef = (componentsContext.___componentDef = new ComponentDef(
        component,
        componentId,
        globalContext
    ));
    globalContext.___renderedComponentsById[componentId] = true;
    componentsContext.___components.push(componentDef);

    var out = componentsContext.___out;
    out.bc(component, key, ownerComponentDef && ownerComponentDef.___component);
    return componentDef;
};
