var ComponentDef = require('./ComponentDef');

module.exports = function(component, isSplitComponent) {
    var componentStack = this.___componentStack;
    var origLength = componentStack.length;
    var parentComponentDef = componentStack[origLength - 1];

    var componentId = component.id;

    var componentDef = new ComponentDef(component, componentId, this.___globalContext, componentStack, origLength);
    parentComponentDef.___addChild(componentDef);
    this.___globalContext.___componentsById[componentId] = componentDef;

    componentStack.push(componentDef);

    return componentDef;
};
