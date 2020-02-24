var marko = require("../");

function defineRenderer(def) {
    var template = def.template;
    var getTemplateData = def.getTemplateData;
    var renderer = def.renderer;

    if (typeof template === "string") {
        template = marko.load(template);
    }

    var createOut;

    if (template) {
        createOut = template.createOut;
    } else {
        createOut = def.createOut || marko.createOut;
    }

    if (!renderer) {
        // Create a renderer function that takes care of translating
        // the input properties to a view state. Also, this renderer
        // takes care of re-using existing components.
        renderer = function renderer(input, out) {
            var newProps = input;

            if (!newProps) {
                // Make sure we always have a non-null input object
                newProps = {};
            }

            // Use getTemplateData(state, props, out) to get the template
            // data. If that method is not provided then just use the
            // the state (if provided) or the input data.
            var templateData = getTemplateData
                ? getTemplateData(newProps, out)
                : newProps;

            // Render the template associated with the component using the final template
            // data that we constructed
            template.render(templateData, out);
        };
    }

    renderer.render = function(input) {
        var out = createOut();
        renderer(input, out);
        return out.end();
    };

    return renderer;
}

module.exports = defineRenderer;
