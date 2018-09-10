"use strict";

const ComponentDef = require("./ComponentDef");

var FLAG_WILL_RERENDER_IN_BROWSER = 1;
// var FLAG_HAS_BODY_EL = 2;
// var FLAG_HAS_HEAD_EL = 4;

module.exports = function beginComponent(
    componentsContext,
    component,
    key,
    ownerComponentDef,
    isSplitComponent,
    isImplicitComponent
) {
    var globalContext = componentsContext.___globalContext;

    var componentId = component.id;

    var componentDef = (componentsContext.___componentDef = new ComponentDef(
        component,
        componentId,
        globalContext
    ));

    // On the server
    if (
        ownerComponentDef &&
        ownerComponentDef.___flags & FLAG_WILL_RERENDER_IN_BROWSER
    ) {
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
    let runtimeId = (out.global.runtimeId = out.global.runtimeId || "M");

    componentDef.___renderBoundary = true;

    if (isSplitComponent === false && out.global.noBrowserRerender !== true) {
        componentDef.___flags |= FLAG_WILL_RERENDER_IN_BROWSER;
    }

    if (ownerComponentDef && key != null) {
        out.w(
            "<!--" +
                runtimeId +
                "^" +
                componentId +
                " " +
                ownerComponentDef.id +
                " " +
                key +
                "-->"
        );
    } else {
        out.w("<!--" + runtimeId + "#" + componentId + "-->");
    }

    return componentDef;
};
