/**
 * Helper method to return the ComponentDef for the current component being rendered.
 * This is, it returns the component at the top of the component stack.
 * @param  {AsyncWriter} out The current rendering context that holds info about rendered components.
 * @return {ComponentDef} The ComponentDef instance
 */
module.exports = function getCurrentComponent(out) {
    var componentsContext = out.data.___components;
    var componentStack;
    var len;

    if (!componentsContext || (len = (componentStack = componentsContext.___componentStack).length) < 2) {
        throw Error('No component found');
    }

    return componentStack[len - 1];
};
