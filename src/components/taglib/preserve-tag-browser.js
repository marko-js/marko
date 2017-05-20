var getElementById = require('../util').___getElementById;

module.exports = function render(input, out) {
    var globalComponentsContext = out.global.___components;

    if (globalComponentsContext && globalComponentsContext.___isRerenderInBrowser !== true && globalComponentsContext.___rerenderComponent !== undefined) {
        var id = input.id;

        // See if the DOM node with the given ID already exists.
        // If so, then reuse the existing DOM node instead of re-rendering
        // the children. We have to put a placeholder node that will get
        // replaced out if we find that the DOM node has already been rendered
        if (!('if' in input) || input['if']) {
            var existingEl = getElementById(out.___document, id);
            if (existingEl) {
                var bodyOnly = input.bodyOnly === true;
                // Don't actually render anything since the element is already in the DOM,
                // but keep track that the node is being preserved so that we can ignore
                // it while transforming the old DOM

                if (!bodyOnly) {
                    var tagName = existingEl.tagName;
                    // If we are preserving the entire DOM node (not just the body)
                    // then that means that we have need to render a placeholder to
                    // mark the target location. We can then replace the placeholder
                    // node with the existing DOM node
                    out.element(tagName, { id: id });
                }

                globalComponentsContext.___preserveDOMNode(id, bodyOnly);
                return;
            }
        }
    }

    if (input.renderBody) {
        input.renderBody(out);
    }
};
