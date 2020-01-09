var domData = require("../../runtime/components/dom-data");
var componentsByDOMNode = domData.___componentByDOMNode;

module.exports = function render(input, out) {
    var componentsContext = out.___components;

    if (componentsContext) {
        // See if the DOM node with the given ID already exists.
        // If so, then reuse the existing DOM node instead of re-rendering
        // the children. We have to put a placeholder node that will get
        // replaced out if we find that the DOM node has already been rendered
        if (!("if" in input) || input["if"]) {
            var parentComponent =
                componentsContext.___componentDef.___component;
            var ownerComponent = out.___assignedComponentDef.___component;
            var component = parentComponent;
            var globalComponentsContext = componentsContext.___globalContext;
            var key = out.___assignedKey;

            // If the node is transcluded
            if (ownerComponent !== parentComponent) {
                if (isAutoKey(key)) {
                    // autokeys are stored on the parent component
                    // but scoped by their owner's id
                    key += ":" + ownerComponent.id;
                } else {
                    // userkeys are stored on the owner component
                    component = ownerComponent;
                }
            }

            var existingElement = component.___keyedElements[key];
            if (existingElement) {
                if (input.component) {
                    var existingComponent = componentsByDOMNode.get(
                        existingElement
                    );
                    if (existingComponent) {
                        out.___preserveComponent(existingComponent);
                        globalComponentsContext.___renderedComponentsById[
                            existingComponent.id
                        ] = true;
                    }
                } else if (input.bodyOnly) {
                    // Don't actually render anything since the element is already in the DOM,
                    // but keep track that the node is being preserved so that we can ignore
                    // it while transforming the old DOM
                    globalComponentsContext.___preservedElBodies[
                        component.id + "-" + key
                    ] = true;
                } else {
                    // If we are preserving the entire DOM node (not just the body)
                    // then that means that we have need to render a placeholder to
                    // mark the target location. We can then replace the placeholder
                    // node with the existing DOM node
                    out.element("", null, key, null, 0, 2 /* FLAG_PRESERVE */);
                    globalComponentsContext.___preservedEls[
                        component.id + "-" + key
                    ] = true;
                }

                return;
            }
        }
    }

    if (input.renderBody) {
        input.renderBody(out);
    }
};

function isAutoKey(key) {
    return !/^@/.test(key);
}
