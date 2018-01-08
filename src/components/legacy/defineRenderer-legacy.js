var marko = require('../../');
var makeRenderable = require('../../runtime/renderable');

module.exports = function defineRenderer(renderingLogic) {
    var renderer = renderingLogic.renderer;

    if (renderer && renderer.___isRenderer) {
        return renderer;
    }

    var template = renderingLogic.template;

    if (typeof template === 'string') {
        template = marko.load(template);
    }

    if (!renderer) {
        // Create a renderer function that takes care of translating
        // the input properties to a view state. Also, this renderer
        // takes care of re-using existing components.
        renderer = function renderer(input, out) {
            // Render the template associated with the component using the final template
            // data that we constructed
            template._(input, out, renderingLogic);
        };
    }

    renderer.___isRenderer = true;
    renderer.createOut = template ? template.createOut : renderingLogic.createOut;
    renderer.template = template;

    makeRenderable(renderer, renderer);

    return renderer;
};

