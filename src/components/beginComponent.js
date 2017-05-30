'use strict';

const ComponentDef = require('./ComponentDef');
const hasRenderBodyKey = Symbol.for("hasRenderBody");

function isInputSerializable(component) {
    var input = component.___input;
    if (!input) {
        return true;
    }

    if (input[hasRenderBodyKey] === true || input.renderBody !== undefined) {
        return false;
    } else {
        return true;
    }
}

module.exports = function beginComponent(component, isSplitComponent) {
    var componentStack = this.___componentStack;
    var origLength = componentStack.length;
    var parentComponentDef = componentStack[origLength - 1];

    var componentId = component.id;

    var componentDef = new ComponentDef(component, componentId, this.___globalContext, componentStack, origLength);

    // On the server
    if (parentComponentDef.___willRerenderInBrowser === true) {
        componentDef.___willRerenderInBrowser = true;
    } else {
        parentComponentDef.___addChild(componentDef);
        if (isSplitComponent === false &&
            this.___out.global.noBrowserRerender !== true &&
            isInputSerializable(component)) {

            componentDef.___willRerenderInBrowser = true;
        }
    }

    componentStack.push(componentDef);

    return componentDef;
};
