var getComponentsContext = require("../ComponentsContext")
  .___getComponentsContext;
var componentsUtil = require("../util");
var componentLookup = componentsUtil.___componentLookup;
var registry = require("../registry");
var modernRenderer = require("../renderer");
var resolveComponentKey = modernRenderer.___resolveComponentKey;
var trackAsyncComponents = modernRenderer.___trackAsyncComponents;
var beginComponent = require("../beginComponent");
var endComponent = require("../endComponent");
var complain = "MARKO_DEBUG" && require("complain");

function createRendererFunc(templateRenderFunc, componentProps) {
  var typeName = componentProps.___type;
  //var assignedId = componentProps.id;
  var isSplit = componentProps.___split === true;

  return function renderer(input, out, assignedId, renderingLogic) {
    trackAsyncComponents(out);

    var widgetBody = input.renderBody;
    var widgetState = input.widgetState;
    var widgetConfig = input.widgetConfig;

    var componentsContext = getComponentsContext(out);
    var globalComponentsContext = componentsContext.___globalContext;

    var component = globalComponentsContext.___rerenderComponent;

    var isRerender = component !== undefined;
    var id = assignedId;
    var isExisting;
    var parentComponentDef = componentsContext.___componentDef;
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
      if (key != null) {
        id = id || resolveComponentKey(key.toString(), parentComponentDef);
      } else if (parentComponentDef) {
        id = parentComponentDef.___nextComponentId();
      } else {
        id = globalComponentsContext.___nextComponentId();
      }
    }

    if (registry.___isServer && typeName) {
      if (renderingLogic) delete renderingLogic.onRender;
      component = registry.___createComponent(
        renderingLogic,
        id,
        input,
        out,
        typeName,
        customEvents,
        ownerComponentId
      );
      if (isSplit || widgetState) {
        component.input = null;
      } else if (input.widgetProps) {
        // eslint-disable-next-line no-constant-condition
        if ("MARKO_DEBUG") {
          complain(
            "Possible performance impact: this widget does not contain state, but is marked as a stateful widget. This will result in additional hydration data serialized.  In order for marko to identify this as a split widget, w-bind should use a widget.js with defineWidget rather than index.js with defineComponent.",
            { location: typeName, level: 1 }
          );
        }
        component.input = input.widgetProps;
      }
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

      if (widgetState) {
        component.state = widgetState;
      }
    }

    component.widgetConfig = widgetConfig;
    component.___widgetBody = widgetBody || component.___widgetBody;

    var componentDef = beginComponent(
      componentsContext,
      component,
      key,
      ownerComponentDef,
      isSplit,
      isFakeComponent
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
        if (registry.___isServer) {
          var oldComponent = component;
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
          if (isSplit || widgetState) {
            component.input = null;
          } else if (input.widgetProps) {
            // eslint-disable-next-line no-constant-condition
            if ("MARKO_DEBUG") {
              complain(
                "Possible performance impact: this widget does not contain state, but is marked as a stateful widget. This will result in additional hydration data serialized.  In order for marko to identify this as a split widget, w-bind should use a widget.js with defineWidget rather than index.js with defineComponent.",
                { location: typeName, level: 1 }
              );
            }
            component.input = input.widgetProps;
          }
          Object.assign(component, oldComponent);
          beginComponent(
            componentsContext,
            component,
            key,
            ownerComponentDef,
            isSplit,
            false,
            this
          );
        } else {
          vComponentNode.___component = component = registry.___createComponent(
            typeName,
            component.id
          );
        }
        this.___component = component;
      }
    };

    if (!registry.___isServer) {
      component.___legacyRender && component.___legacyRender();
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
