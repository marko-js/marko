var componentLookup = require('../util').$__componentLookup;
var ComponentsContext = require('../ComponentsContext');
var registry = require('../registry');
var modernRenderer = require('../renderer');
var resolveComponentRef = modernRenderer.$__resolveComponentRef;
var preserveComponentEls = modernRenderer.$__preserveComponentEls;
var handleBeginAsync = modernRenderer.$__handleBeginAsync;

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
        var getComponentConfig;
        var getInitialBody;

        if (renderingLogic) {
            getInitialProps = renderingLogic.getInitialProps;
            getTemplateData = renderingLogic.getTemplateData;
            getInitialState = renderingLogic.getInitialState;
            getComponentConfig = renderingLogic.getComponentConfig;
            getInitialBody = renderingLogic.getInitialBody;
        }

        var componentConfig;
        var componentBody;
        var componentState;

        var component = outGlobal.$w;
        var fakeComponent;
        var isRerender = component !== undefined;
        var id = assignedId;
        var isExisting;
        var customEvents;
        var scope;

        if (component) {
            id = component.id;
            isExisting = true;
            outGlobal.$w = null;
        } else {
            var componentArgs = input && input.$w || out.data.$w;

            if (componentArgs) {
                scope = componentArgs[0];

                if (scope) {
                    scope = scope.id;
                }

                var ref = componentArgs[1];
                if (ref != null) {
                    ref = ref.toString();
                }
                id = id || resolveComponentRef(out, ref, scope);
                customEvents = componentArgs[2];
                delete input.$w;
            }
        }

        var componentsContext = ComponentsContext.$__getComponentsContext(out);
        id = id || componentsContext.$__nextComponentId();

        if (registry.$__isServer && typeName) {
            component = { id:id, typeName:typeName };
        } else {
            if (!component) {
                if (isRerender) {
                    // Look in in the DOM to see if a component with the same ID and type already exists.
                    component = componentLookup[id];
                    if (component && component.$__type !== typeName) {
                        component = undefined;
                    }
                }

                if (component) {
                    isExisting = true;
                } else {
                    isExisting = false;
                    // We need to create a new instance of the component
                    if (typeName) {
                        component = registry.$__createComponent(typeName, id);
                    }
                }
            }
        }

        if (input) {
            if (getComponentConfig) {
                // If getComponentConfig() was implemented then use that to
                // get the component config. The component config will be passed
                // to the component constructor. If rendered on the server the
                // component config will be serialized to a JSON-like data
                // structure and stored in a "data-w-config" attribute.
                componentConfig = getComponentConfig(input, out);
            } else {
                componentConfig = input.componentConfig;
            }

            if (componentConfig) {
                component.$c = componentConfig;
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

        if (component && isExisting) {
            if (!component.$__isDirty || !component.shouldUpdate(input, component.$__state)) {
                preserveComponentEls(component, out, componentsContext);
                return;
            }
        }

        if (!component) {
            fakeComponent = {};
        } else {
            componentState = component.$__rawState;
        }

        var templateInput = getTemplateData ?
            getTemplateData(componentState, input, out) :
            componentState || input || {};

        var componentDef = componentsContext.$__beginComponent(component || fakeComponent);
        componentDef.$__customEvents = customEvents;
        componentDef.$__scope = scope;
        componentDef.$__roots = roots;
        componentDef.$__component = fakeComponent ? null : component;
        componentDef.$__isExisting = isExisting;
        componentDef.b = componentBody;
        componentDef.c = function(componentConfig) {
            component.$c = componentConfig;
        };
        componentDef.t = function(typeName) {
            if (typeName) {
                this.$__component = component = registry.$__createComponent(typeName, fakeComponent.id);
            }
        };

        if (component && isExisting) {
            component.$__emitLifecycleEvent('$__legacyRender');
        }

        // Render the template associated with the component using the final template
        // data that we constructed
        templateRenderFunc(templateInput, out, componentDef);

        componentDef.$__end();
    };
}

module.exports = createRendererFunc;
