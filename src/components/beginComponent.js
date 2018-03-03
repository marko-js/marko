'use strict';

const ComponentDef = require('./ComponentDef');

var FLAG_WILL_RERENDER_IN_BROWSER = 1;
// var FLAG_HAS_BODY_EL = 2;
// var FLAG_HAS_HEAD_EL = 4;

module.exports = function beginComponent(componentsContext, component, isSplitComponent, parentComponentDef, isImplicitComponent) {
    var globalContext = componentsContext.___globalContext;

    var componentId = component.id;

    var componentDef = componentsContext.___componentDef = new ComponentDef(component, componentId, globalContext);

    // On the server
    if (parentComponentDef && (parentComponentDef.___flags & FLAG_WILL_RERENDER_IN_BROWSER)) {
        componentDef.___flags |= FLAG_WILL_RERENDER_IN_BROWSER;
        return componentDef;
    }

    if (isImplicitComponent === true) {
        // We don't mount implicit components rendered on the server
        // unless the implicit component is nested within a UI component
        // that will re-render in the browser
        return componentDef;
    }

    componentsContext.___components.push(componentDef);

    let out = componentsContext.___out;

    componentDef.___renderBoundary = true;

    if (isSplitComponent === false && out.global.noBrowserRerender !== true) {
        componentDef.___flags |= FLAG_WILL_RERENDER_IN_BROWSER;
        out.w('<!--M#' + componentId + '-->');
    } else {
        out.w('<!--M^' + componentId + '-->');
    }

    return componentDef;
};
