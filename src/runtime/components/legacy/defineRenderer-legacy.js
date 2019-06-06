var complain = "MARKO_DEBUG" && require("complain");
var marko = require("../../../");
var makeRenderable = require("../../renderable");
var getComponentsContext = require("../ComponentsContext")
    .___getComponentsContext;
var componentsUtil = require("../util");
var componentLookup = componentsUtil.___componentLookup;
var modernRenderer = require("../renderer");
var resolveComponentKey = modernRenderer.___resolveComponentKey;

module.exports = function defineRenderer(renderingLogic) {
    var renderer = renderingLogic.renderer;

    // eslint-disable-next-line no-constant-condition
    if ("MARKO_DEBUG") {
        require("complain")("defineRenderer is deprecated");
    }

    if (renderer && renderer.___isRenderer) {
        return renderer;
    }

    var template = renderingLogic.template;

    if (typeof template === "string") {
        template = marko.load(template);
    }

    if (!renderer) {
        var getInitialProps;
        var getTemplateData;
        var getInitialState;
        var getWidgetConfig;
        var getInitialBody;

        if (renderingLogic) {
            getInitialProps = renderingLogic.getInitialProps;
            getTemplateData = renderingLogic.getTemplateData;
            getInitialState = renderingLogic.getInitialState;
            getWidgetConfig = renderingLogic.getWidgetConfig;
            getInitialBody = renderingLogic.getInitialBody;
        }

        // Create a renderer function that takes care of translating
        // the input properties to a view state. Also, this renderer
        // takes care of re-using existing components.
        renderer = function renderer(input, out) {
            var componentsContext = getComponentsContext(out);
            var globalComponentsContext = componentsContext.___globalContext;
            var component = globalComponentsContext.___rerenderComponent;
            var isReceivingNewInput =
                !component || component.___isReceivingNewInput;
            var parentComponentDef;

            if (component) {
                delete component.___isReceivingNewInput;
            }

            // Render the template associated with the component using the final template
            // data that we constructed
            var newProps = input || {};
            var widgetConfig;
            var widgetState;
            var widgetBody;
            var id;

            if (!component && componentLookup) {
                if ((parentComponentDef = componentsContext.___componentDef)) {
                    var key = out.___assignedKey;

                    if (key != null) {
                        key = key.toString();
                    }
                    id = resolveComponentKey(key, parentComponentDef);
                } else if (parentComponentDef) {
                    id = parentComponentDef.___nextComponentId();
                } else {
                    id = globalComponentsContext.___nextComponentId();
                }

                component = componentLookup[id];
            }

            if (isReceivingNewInput) {
                // If we do not have state then we need to go through the process
                // of converting the input to a widget state, or simply normalizing
                // the input using getInitialProps

                if (getInitialProps) {
                    // This optional method is used to normalize input state
                    newProps = getInitialProps(newProps, out) || {};
                }

                if (getWidgetConfig) {
                    // If getWidgetConfig() was implemented then use that to
                    // get the widget config. The widget config will be passed
                    // to the widget constructor. If rendered on the server the
                    // widget config will be serialized.
                    widgetConfig = getWidgetConfig(newProps, out);
                }

                if (getInitialState) {
                    // This optional method is used to derive the widget state
                    // from the input properties
                    widgetState = getInitialState(newProps, out);
                }

                if (getInitialBody) {
                    // If we have widget a widget body then pass it to the template
                    // so that it is available to the widget tag and can be inserted
                    // at the w-body marker
                    widgetBody = getInitialBody(newProps, out);
                } else {
                    // Default to using the nested content as the widget body
                    // getInitialBody was not implemented
                    widgetBody = newProps.renderBody;
                }
            } else if (component) {
                widgetBody = component.___legacyBody;
                widgetState = component.___rawState;
                widgetConfig = component.widgetConfig;
            }

            // Use getTemplateData(state, props, out) to get the template
            // data. If that method is not provided then just use the
            // the state (if provided) or the input data.
            var templateData = getTemplateData
                ? getTemplateData(widgetState, newProps, out)
                : widgetState || newProps;

            if (templateData) {
                // We are going to be modifying the template data so we need to
                // make a shallow clone of the object so that we don't
                // mutate user provided data.
                templateData = Object.keys(templateData).reduce(function(
                    copy,
                    key
                ) {
                    copy[key] = templateData[key];
                    return copy;
                },
                {});
            } else {
                // We always should have some template data
                templateData = {};
            }

            // If we have widget state then pass it to the template
            // so that it is available to the widget tag
            if (widgetState) {
                // eslint-disable-next-line no-constant-condition
                if ("MARKO_DEBUG") {
                    if ("widgetState" in templateData) {
                        complain("Passing widgetState as input is deprecated.");
                    }
                }
                templateData.widgetState = widgetState;
            }
            if (widgetBody) {
                templateData.renderBody = widgetBody;
            }
            if (widgetConfig) {
                // eslint-disable-next-line no-constant-condition
                if ("MARKO_DEBUG") {
                    if ("widgetConfig" in templateData) {
                        complain(
                            "Passing widgetConfig as input is deprecated."
                        );
                    }
                }
                templateData.widgetConfig = widgetConfig;
            }

            template._(templateData, out, id, renderingLogic);
        };
    }

    renderer.___isRenderer = true;
    renderer.createOut = template
        ? template.createOut
        : renderingLogic.createOut;
    renderer.template = template;

    makeRenderable(renderer, renderer);

    return renderer;
};
