var componentsUtil = require('./util');
var componentLookup = componentsUtil.___componentLookup;
var emitLifecycleEvent = componentsUtil.___emitLifecycleEvent;

var ComponentsContext = require('./ComponentsContext');
var getComponentsContext = ComponentsContext.___getComponentsContext;
var registry = require('./registry');
var copyProps = require('raptor-util/copyProps');
var isServer = componentsUtil.___isServer === true;
var beginComponent = require('./beginComponent');
var endComponent = require('./endComponent');

var COMPONENT_BEGIN_ASYNC_ADDED_KEY = '$wa';

function resolveComponentKey(globalComponentsContext, key, parentComponentDef) {
    if (key[0] === '#') {
        return key.substring(1);
    } else {
        return parentComponentDef.id + '-' + parentComponentDef.___nextKey(key);
    }
}

function handleBeginAsync(event) {
    var parentOut = event.parentOut;
    var asyncOut = event.out;
    var componentsContext = parentOut.___components;

    if (componentsContext !== undefined) {
        // All of the components in this async block should be
        // initialized after the components in the parent. Therefore,
        // we will create a new ComponentsContext for the nested
        // async block and will create a new component stack where the current
        // component in the parent block is the only component in the nested
        // stack (to begin with). This will result in top-level components
        // of the async block being added as children of the component in the
        // parent block.
        asyncOut.___components = new ComponentsContext(asyncOut, componentsContext);
    }
    // Carry along the component arguments
    asyncOut.___componentArgs = parentOut.___componentArgs;
}

function createRendererFunc(templateRenderFunc, componentProps, renderingLogic) {
    renderingLogic = renderingLogic || {};
    var onInput = renderingLogic.onInput;
    var typeName = componentProps.type;
    var isSplit = componentProps.split === true;
    var shouldApplySplitMixins = isSplit;

    return function renderer(input, out) {
        var outGlobal = out.global;

        if (out.isSync() === false) {
            if (!outGlobal[COMPONENT_BEGIN_ASYNC_ADDED_KEY]) {
                outGlobal[COMPONENT_BEGIN_ASYNC_ADDED_KEY] = true;
                out.on('beginAsync', handleBeginAsync);
            }
        }

        var componentsContext = getComponentsContext(out);
        var globalComponentsContext = componentsContext.___globalContext;

        var component = globalComponentsContext.___rerenderComponent;
        var isRerender = component !== undefined;
        var id;
        var isExisting;
        var customEvents;
        var scope;
        var parentComponentDef;

        if (component) {
            id = component.id;
            isExisting = true;
            globalComponentsContext.___rerenderComponent = null;
        } else {
            parentComponentDef = componentsContext.___componentDef;
            var componentArgs = out.___componentArgs;
            if (componentArgs) {
                // console.log('componentArgs:', componentArgs);
                scope = parentComponentDef.id;
                out.___componentArgs = null;

                var key;

                if (typeof componentArgs === 'string') {
                  key = componentArgs;
                } else {
                  key = componentArgs[0];
                  customEvents = componentArgs[1];
                }

                if (key != null) {
                    key = key.toString();
                    id = resolveComponentKey(globalComponentsContext, key, parentComponentDef);
                } else {
                    id = parentComponentDef.___nextComponentId();
                }
            } else if (parentComponentDef) {
                id = parentComponentDef.___nextComponentId();
            } else {
                id = globalComponentsContext.___nextComponentId();
            }
        }

        if (isServer) {
            component = registry.___createComponent(
                renderingLogic,
                id,
                input,
                out,
                typeName,
                customEvents,
                scope);
            input = component.___updatedInput;
            component.___updatedInput = undefined; // We don't want ___updatedInput to be serialized to the browser
        } else {
            if (!component) {
                if (isRerender && (component = componentLookup[id]) && component.___type !== typeName) {
                    // Destroy the existing component since
                    component.destroy();
                    component = undefined;
                }

                if (component) {
                    isExisting = true;
                } else {
                    isExisting = false;
                    // We need to create a new instance of the component
                    component = registry.___createComponent(typeName, id);

                    if (shouldApplySplitMixins === true) {
                        shouldApplySplitMixins = false;

                        var renderingLogicProps = typeof renderingLogic == 'function' ?
                            renderingLogic.prototype :
                            renderingLogic;

                        copyProps(renderingLogicProps, component.constructor.prototype);
                    }
                }

                // Set this flag to prevent the component from being queued for update
                // based on the new input. The component is about to be rerendered
                // so we don't want to queue it up as a result of calling `setInput()`
                component.___updateQueued = true;

                if (customEvents !== undefined) {
                    component.___setCustomEvents(customEvents, scope);
                }


                if (isExisting === false) {
                    emitLifecycleEvent(component, 'create', input, out);
                }

                input = component.___setInput(input, onInput, out);

                if (isExisting === true) {
                    if (component.___isDirty === false || component.shouldUpdate(input, component.___state) === false) {
                        // We put a placeholder element in the output stream to ensure that the existing
                        // DOM node is matched up correctly when using morphdom. We flag the VElement
                        // node to track that it is a preserve marker
                        out.___preserveComponent(component);
                        globalComponentsContext.___renderedComponentsById[id] = true;
                        component.___reset(); // The component is no longer dirty so reset internal flags
                        return;
                    }
                }
            }

            component.___global = outGlobal;

            emitLifecycleEvent(component, 'render', out);
        }

        var componentDef =
          beginComponent(componentsContext, component, isSplit, parentComponentDef);

        componentDef.___isExisting = isExisting;

        // Render the template associated with the component using the final template
        // data that we constructed
        templateRenderFunc(input, out, componentDef, component, component.___rawState);

        endComponent(out, componentDef);
        componentsContext.___componentDef = parentComponentDef;
    };
}

module.exports = createRendererFunc;

// exports used by the legacy renderer
createRendererFunc.___resolveComponentKey = resolveComponentKey;
createRendererFunc.___handleBeginAsync = handleBeginAsync;
