var getComponentsContext = require("../ComponentsContext")
    .___getComponentsContext;
var componentsUtil = require("../util");
var componentLookup = componentsUtil.___componentLookup;
var registry = require("../registry");
var modernRenderer = require("../renderer");
var resolveComponentKey = modernRenderer.___resolveComponentKey;
var handleBeginAsync = modernRenderer.___handleBeginAsync;
var beginComponent = require("../beginComponent");
var endComponent = require("../endComponent");

var WIDGETS_BEGIN_ASYNC_ADDED_KEY = "$wa";

function createRendererFunc(templateRenderFunc, componentProps) {
    var typeName = componentProps.___type;
    var assignedId = componentProps.id;
    var isSplit = componentProps.___split === true;

    return function renderer(input, out, renderingLogic) {
        var outGlobal = out.global;

        if (!outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY]) {
            outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY] = true;
            out.on("beginAsync", handleBeginAsync);
        }

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

        var widgetConfig;
        var componentBody;
        var componentState;

        var componentsContext = getComponentsContext(out);
        var globalComponentsContext = componentsContext.___globalContext;

        var component = globalComponentsContext.___rerenderComponent;

        var isRerender = component !== undefined;
        var id = assignedId;
        var isExisting;
        var parentComponentDef;
        var ownerComponentDef = out.___assignedComponentDef;
        var ownerComponentId = ownerComponentDef && ownerComponentDef.id;
        var key = out.___assignedKey;
        var customEvents = out.___assignedCustomEvents;

        if (component) {
            id = component.id;
            isExisting = true;
            globalComponentsContext.___rerenderComponent = null;
        } else {
            if ((parentComponentDef = componentsContext.___componentDef)) {
                out.___assignedComponentDef = null;

                if (key != null) {
                    key = key.toString();
                }
                id = id || resolveComponentKey(key, parentComponentDef);
            } else if (parentComponentDef) {
                id = parentComponentDef.___nextComponentId();
            } else {
                id = globalComponentsContext.___nextComponentId();
            }
        }

        if (registry.___isServer && typeName) {
            if (renderingLogic) delete renderingLogic.onRender;
            component = registry.___createComponent(
                renderingLogic || {},
                id,
                input,
                out,
                typeName,
                customEvents,
                ownerComponentId
            );
        } else {
            if (!component) {
                if (isRerender) {
                    // Look in in the DOM to see if a component with the same ID and type already exists.
                    component = componentLookup[id];
                    if (component && component.___type !== typeName) {
                        component = undefined;
                    }
                }

                if (component) {
                    isExisting = true;
                } else {
                    isExisting = false;
                    // We need to create a new instance of the component
                    if (typeName) {
                        component = registry.___createComponent(typeName, id);
                    }
                }
            }
        }

        if (component) {
            component.___updateQueued = true;
        }

        if (input) {
            if (getWidgetConfig) {
                // If getWidgetConfig() was implemented then use that to
                // get the component config. The component config will be passed
                // to the component constructor. If rendered on the server the
                // component config will be serialized to a JSON-like data
                // structure and stored in a "data-w-config" attribute.
                widgetConfig = getWidgetConfig(input, out);
            } else {
                widgetConfig = input.widgetConfig;
            }

            if (widgetConfig) {
                component.$c = widgetConfig;
            }

            if (getInitialBody) {
                // If we have component a component body then pass it to the template
                // so that it is available to the component tag and can be inserted
                // at the w-body marker
                componentBody = getInitialBody(input, out);
            }

            // If we do not have state then we need to go through the process
            // of converting the input to a component state, or simply normalizing
            // the input using getInitialProps

            if (getInitialProps) {
                // This optional method is used to normalize input state
                input = getInitialProps(input, out) || {};
            }

            if (getInitialState) {
                // This optional method is used to derive the component state
                // from the input properties
                component.state = componentState = getInitialState(input, out);
            }

            if (!componentBody) {
                // Default to using the nested content as the component body
                componentBody = input.renderBody;
            }
        }

        var isFakeComponent = false;

        if (!component) {
            isFakeComponent = true;
            component = {
                id: id,
                ___keyedElements: {}
            };
        } else {
            componentState = component.___rawState || componentState;
        }

        var templateInput = getTemplateData
            ? getTemplateData(componentState, input, out)
            : componentState || input || {};

        var componentDef = beginComponent(
            componentsContext,
            component,
            key,
            ownerComponentDef,
            isSplit
        );

        // This is a hack, but we have to swap out the component instance stored with this node
        var vComponentNode = out.___parent;

        componentDef.___component = isFakeComponent ? null : component;
        componentDef.___isExisting = isExisting;
        componentDef.___isLegacy = true;
        componentDef.b = component.___legacyBody =
            componentBody || component.___legacyBody || "%FN";
        componentDef.c = function(widgetConfig) {
            component.$c = widgetConfig;
        };

        componentDef.t = function(typeName) {
            if (typeName) {
                vComponentNode.___component = this.___component = component = registry.___createComponent(
                    typeName,
                    component.id
                );
            }
        };

        if (!isFakeComponent && !registry.___isServer) {
            component.___emitLifecycleEvent("___legacyRender");
        }

        // Render the template associated with the component using the final template
        // data that we constructed
        templateRenderFunc(
            templateInput,
            out,
            componentDef,
            componentDef,
            component
        );

        if (customEvents && componentDef.___component) {
            if (registry.___isServer) {
                componentDef.___customEvents = customEvents;
                componentDef.___scope = ownerComponentId;
            } else {
                componentDef.___component.___setCustomEvents(
                    customEvents,
                    ownerComponentId
                );
            }
        }

        endComponent(out, componentDef);
        componentsContext.___componentDef = parentComponentDef;
    };
}

module.exports = createRendererFunc;
