/**
 * Helper method to return the ComponentDef for the current component being rendered.
 * This is, it returns the component at the top of the component stack.
 * @param  {AsyncWriter} out The current rendering context that holds info about rendered components.
 * @return {ComponentDef} The ComponentDef instance
 */
module.exports = function getCurrentComponent(out) {
    var componentsContext = out.___components;

    if (!componentsContext) {
        throw Error('No component found');
    }

    return componentsContext.___componentDef;
};
