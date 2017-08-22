/**
 * Helper method to return the ComponentDef for the current component being rendered.
 * This is, it returns the component at the top of the component stack.
 * @param  {AsyncWriter} out The current rendering context that holds info about rendered components.
 * @return {ComponentDef} The ComponentDef instance
 */
module.exports = function getCurrentComponent(out) {
    var componentArgs = out.___componentArgs;
    var parent = componentArgs && componentArgs[0];
    var scopedId = componentArgs && componentArgs[1];
    var id = componentArgs ? (parent.id || parent) + '-' + scopedId : '';

    return id;
};
