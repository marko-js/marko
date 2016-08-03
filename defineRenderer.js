var marko = require('./');
var createRenderFunc = require('raptor-renderer').createRenderFunc;

function defineRenderer(def) {
    var template = def.template;
    var getTemplateData = def.getTemplateData;
    var renderer = def.renderer;

    var loadedTemplate;


    if (!renderer) {
        // Create a renderer function that takes care of translating
        // the input properties to a view state. Also, this renderer
        // takes care of re-using existing widgets.
        renderer = function renderer(input, out) {
            var newProps = input;

            if (!newProps) {
                // Make sure we always have a non-null input object
                newProps = {};
            }

            if (!loadedTemplate) {
                // Lazily load the template on first render to avoid potential problems
                // with circular dependencies
                loadedTemplate = template.render ? template : marko.load(template);
            }

            // Use getTemplateData(state, props, out) to get the template
            // data. If that method is not provided then just use the
            // the state (if provided) or the input data.
            var templateData = getTemplateData ?
                getTemplateData(newProps, out) :
                newProps;

            // Render the template associated with the component using the final template
            // data that we constructed
            loadedTemplate.render(templateData, out);
        };
    }

    renderer.render = createRenderFunc(renderer);

    return renderer;
}

module.exports = defineRenderer;