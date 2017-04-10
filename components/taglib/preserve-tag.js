var componentsUtil = require('../util');
var getElementById = componentsUtil.$__getElementById;

var getComponentsContext = require('../ComponentsContext').$__getComponentsContext;

module.exports = function render(input, out) {

    var global = out.global;

    if (global.$w !== undefined) {
        var id = input.id;

        // See if the DOM node with the given ID already exists.
        // If so, then reuse the existing DOM node instead of re-rendering
        // the children. We have to put a placeholder node that will get
        // replaced out if we find that the DOM node has already been rendered
        var condition = input['if'];
        if (condition !== false) {
            var existingEl = getElementById(out.$__document, id);
            if (existingEl) {
                var componentsContext = getComponentsContext(out);
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

                componentsContext.$__globalContext.$__preserveDOMNode(id, bodyOnly);
                return;
            }
        }
    }

    if (input.renderBody) {
        input.renderBody(out);
    }
};
