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
var w10NOOP = require("warp10/constants").NOOP;

var WIDGETS_BEGIN_ASYNC_ADDED_KEY = "$wa";

function createRendererFunc(templateRenderFunc, componentProps) {
    var typeName = componentProps.___type;
    //var assignedId = componentProps.id;
    var isSplit = componentProps.___split === true;

    return function renderer(input, out, assignedId, renderingLogic) {
        var outGlobal = out.global;

        if (!outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY]) {
            outGlobal[WIDGETS_BEGIN_ASYNC_ADDED_KEY] = true;
            out.on("beginAsync", handleBeginAsync);
        }

        var widgetBody = input.renderBody;
        var widgetState = input.widgetState;
        var widgetConfig = input.widgetConfig;

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

        out.___assignedComponentDef = null;

        if (component) {
            id = component.id;
            isExisting = true;
            globalComponentsContext.___rerenderComponent = null;
        } else {
            if ((parentComponentDef = componentsContext.___componentDef)) {
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

        var isFakeComponent = false;

        if (!component) {
            isFakeComponent = true;
            component = {
                id: id,
                ___keyedElements: {}
            };
        } else {
            component.___updateQueued = true;
        }

        component.state = widgetState;
        component.widgetConfig = widgetConfig;
        component.___legacyBody =
            widgetBody || component.___legacyBody || w10NOOP;

        var componentDef = beginComponent(
            componentsContext,
            component,
            key,
            ownerComponentDef,
            isSplit
        );
        var parentLegacyComponentDef = componentsContext.___legacyComponentDef;
        componentsContext.___legacyComponentDef = componentDef;

        // This is a hack, but we have to swap out the component instance stored with this node
        var vComponentNode = out.___parent;

        componentDef.___component = isFakeComponent ? null : component;
        componentDef.___isExisting = isExisting;
        componentDef.___isLegacy = true;

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
        templateRenderFunc(input, out, componentDef, componentDef, component);

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
        componentsContext.___legacyComponentDef = parentLegacyComponentDef;
    };
}

module.exports = createRendererFunc;
