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
      var isReceivingNewInput = !component || component.___isReceivingNewInput;
      var parentComponentDef;

      if (component) {
        component.___isReceivingNewInput = false;
      }

      // Render the template associated with the component using the final template
      // data that we constructed
      var newProps = input;
      var widgetConfig;
      var widgetState;
      var widgetBody;
      var id;

      if (!component && componentLookup) {
        var key = out.___assignedKey;

        if (
          (parentComponentDef = componentsContext.___componentDef) &&
          key != null
        ) {
          id = resolveComponentKey(key.toString(), parentComponentDef);
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
        newProps = newProps || component.___widgetProps;
        widgetBody = component.___widgetBody;
        widgetState = component.___rawState;
        widgetConfig = component.widgetConfig;
      }

      // Use getTemplateData(state, props, out) to get the template
      // data. If that method is not provided then just use the
      // the state (if provided) or the input data.
      var templateData = clone(
        getTemplateData
          ? getTemplateData(widgetState, newProps, out)
          : widgetState || newProps
      );

      if (isReceivingNewInput && getWidgetConfig) {
        // If getWidgetConfig() was implemented then use that to
        // get the widget config. The widget config will be passed
        // to the widget constructor. If rendered on the server the
        // widget config will be serialized.
        widgetConfig = getWidgetConfig(newProps, out);
      }
      // eslint-disable-next-line no-constant-condition
      if ("MARKO_DEBUG") {
        if (widgetState && "widgetState" in templateData) {
          complain("Passing widgetState as input is deprecated.");
        }

        if (widgetConfig && "widgetConfig" in templateData) {
          complain("Passing widgetConfig as input is deprecated.");
        }
      }

      templateData.widgetProps = newProps;
      widgetBody && (templateData.renderBody = widgetBody);
      widgetState && (templateData.widgetState = widgetState);
      widgetConfig && (templateData.widgetConfig = widgetConfig);

      template._(templateData, out, id, renderingLogic);
    };
  }

  renderer.___isRenderer = true;
  renderer.createOut = template ? template.createOut : renderingLogic.createOut;
  renderer.template = template;

  makeRenderable(renderer, renderer);

  return renderer;
};

function clone(src) {
  var result = {};

  if (src) {
    for (var key in src) {
      result[key] = src[key];
    }
  }

  return result;
}
