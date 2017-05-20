var getComponentsContext = require('../ComponentsContext').___getComponentsContext;
var componentsUtil = require('../util');
var componentLookup = componentsUtil.___componentLookup;
var registry = require('../registry');
var modernRenderer = require('../renderer');
var resolveComponentKey = modernRenderer.___resolveComponentKey;
var preserveComponentEls = modernRenderer.___preserveComponentEls;
var handleBeginAsync = modernRenderer.___handleBeginAsync;

var WIDGETS_BEGIN_ASYNC_ADDED_KEY = '$wa';

function createRendererFunc(templateRenderFunc, componentProps) {
    var typeName = componentProps.type;
    var roots = componentProps.roots;
    var assignedId = componentProps.id;

    return function renderer(input, out, renderingLogic) {
        var outGlobal = out.global;

        if (!outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY]) {
            outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY] = true;
            out.on('beginAsync', handleBeginAsync);
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
        var fakeComponent;
        var isRerender = component !== undefined;
        var id = assignedId;
        var isExisting;
        var customEvents;
        var scope;

        if (component) {
            id = component.id;
            isExisting = true;
            globalComponentsContext.___rerenderComponent = null;
        } else {
            var componentArgs = out.___componentArgs;

            if (componentArgs) {
                out.___componentArgs = null;
                scope = componentArgs[0];

                if (scope) {
                    scope = scope.id;
                }

                var ref = componentArgs[1];
                if (ref != null) {
                    ref = ref.toString();
                }
                id = id || resolveComponentKey(globalComponentsContext, ref, scope);
                customEvents = componentArgs[2];
            }
        }

        id = id || componentsContext.___nextComponentId();

        if (registry.___isServer && typeName) {
            component = { id:id, typeName:typeName };
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

        if (isExisting === true) {
            if (!component.___isDirty || !component.shouldUpdate(input, component.___state)) {
                if (customEvents) {
                    component.___setCustomEvents(customEvents, scope);
                }

                preserveComponentEls(component, out, globalComponentsContext);
                return;
            }
        }

        if (!component) {
            fakeComponent = {
                id: id
            };
        } else {
            componentState = component.___rawState || componentState;
        }

        var templateInput = getTemplateData ?
            getTemplateData(componentState, input, out) :
            componentState || input || {};

        var componentDef = componentsContext.___beginComponent(component || fakeComponent);
        componentDef.___roots = roots;
        componentDef.___component = fakeComponent ? null : component;
        componentDef.___isExisting = isExisting;
        componentDef.b = componentBody;
        componentDef.c = function(widgetConfig) {
            component.$c = widgetConfig;
        };
        componentDef.t = function(typeName) {
            if (typeName) {
                this.___component = component = registry.___createComponent(typeName, fakeComponent.id);
            }
        };

        if (component && isExisting) {
            component.___emitLifecycleEvent('___legacyRender');
        }

        // Render the template associated with the component using the final template
        // data that we constructed
        templateRenderFunc(templateInput, out, componentDef, componentDef);

        if (customEvents && componentDef.___component) {
            if (registry.___isServer) {
                componentDef.___customEvents = customEvents;
                componentDef.___scope = scope;
            } else {
                componentDef.___component.___setCustomEvents(customEvents, scope);
            }
        }

        componentDef.___end();
    };
}

module.exports = createRendererFunc;
