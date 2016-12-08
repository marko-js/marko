var marko = require('../');
var extend = require('raptor-util/extend');
var makeRenderable = require('../runtime/renderable');

module.exports = function defineRenderer(def) {
    var renderer = def.renderer;

    if (renderer && renderer._isRenderer) {
        return renderer;
    }

    var template = def.template;
    var onInput = def.onInput;
    var getInitialProps = def.getInitialProps; //deprecate
    var getTemplateData = def.getTemplateData;
    var getInitialState = def.getInitialState; //deprecate
    var getWidgetConfig = def.getWidgetConfig; //deprecate
    var getInitialBody = def.getInitialBody;

    if (typeof template === 'string') {
        template = marko.load(template);
    }

    if (!renderer) {
        // Create a renderer function that takes care of translating
        // the input properties to a view state. Also, this renderer
        // takes care of re-using existing widgets.
        renderer = function renderer(input, out) {
            var global = out.global;

            var newProps = input;

            if (!newProps) {
                // Make sure we always have a non-null input object
                newProps = {};
            }

            var widgetState;
            var widgetConfig;

            if (global.__rerenderWidget && global.__rerenderState) {
                // This is a state-ful widget. If this is a rerender then the "input"
                // will be the new state. If we have state then we should use the input
                // as the widget state and skip the steps of converting the input
                // to a widget state.
                var isFirstWidget = !global.__firstWidgetFound;

                if (isFirstWidget) {
                    // We are the first widget and we are not being extended
                    // and we are not extending so use the input as the state
                    widgetState = input;
                    newProps = null;
                }
            }

            if (newProps && onInput) {
                var lightweightWidget = Object.create(def);
                lightweightWidget.onInput(newProps);
                widgetState = lightweightWidget.state;
                widgetConfig = lightweightWidget;
                delete widgetConfig.state;
            }

            if (!widgetState) {
                // If we do not have state then we need to go through the process
                // of converting the input to a widget state, or simply normalizing
                // the input using getInitialProps

                if (getInitialProps) {
                    // This optional method is used to normalize input state
                    newProps = getInitialProps(newProps, out) || {};
                }

                if (getInitialState) {
                    // This optional method is used to derive the widget state
                    // from the input properties
                    widgetState = getInitialState(newProps, out);
                }
            }

            global.__firstWidgetFound = true;

            // Use getTemplateData(state, props, out) to get the template
            // data. If that method is not provided then just use the
            // the state (if provided) or the input data.
            var templateData = getTemplateData ?
                getTemplateData(widgetState, newProps, out) :
                widgetState || newProps;

            if (templateData) {
                // We are going to be modifying the template data so we need to
                // make a shallow clone of the object so that we don't
                // mutate user provided data.
                templateData = extend({}, templateData);
            } else {
                // We always should have some template data
                templateData = {};
            }

            if (widgetState) {
                // If we have widget state then pass it to the template
                // so that it is available to the widget tag
                templateData.widgetState = widgetState;
            }

            if (widgetConfig) {
                // If we have widget config then pass it to the template
                // so that it is available to the widget tag
                templateData.widgetConfig = widgetConfig;
            }

            if (newProps) {
                // If we have widget props then pass it to the template
                // so that it is available to the widget tag. The widget props
                // are only needed so that we can call widget.shouldUpdate(newProps)
                templateData.widgetProps = newProps;

                if (getInitialBody) {
                    // If we have widget a widget body then pass it to the template
                    // so that it is available to the widget tag and can be inserted
                    // at the w-body marker
                    templateData.widgetBody = getInitialBody(newProps, out);
                } else {
                    // Default to using the nested content as the widget body
                    // getInitialBody was not implemented
                    templateData.widgetBody = newProps.renderBody;
                }

                if (getWidgetConfig) {
                    // If getWidgetConfig() was implemented then use that to
                    // get the widget config. The widget config will be passed
                    // to the widget constructor. If rendered on the server the
                    // widget config will be serialized to a JSON-like data
                    // structure and stored in a "data-w-config" attribute.
                    templateData.widgetConfig = getWidgetConfig(newProps, out);
                }
            }

            // Render the template associated with the component using the final template
            // data that we constructed
            template._(templateData, out);
        };
    }

    renderer._isRenderer = true;
    renderer.createOut = template ? template.createOut : def.createOut;
    renderer.template = template;

    makeRenderable(renderer, renderer);

    return renderer;
};

