const { ___componentLookup } = require("@internal/components-util");
const {
  ___getComponentsContext,
} = require("../../components/ComponentsContext");
const defineComponent = require("../../components/defineComponent");
const { r: registerComponent } = require("../../components/registry");
const createRenderer = require("../../components/renderer");
const defaultCreateOut = require("../../createOut");
const morphdom = require("../../vdom/morphdom");
const { ___createFragmentNode } = require("../../vdom/morphdom/fragment");
const dynamicTag = require("../dynamic-tag");
const Component = require("../../components/Component");
const noopRenderer = require("../serialize-noop").___noop;

exports.p = function (domCompat) {
  dynamicTag.___runtimeCompat = function tagsToVdom(
    renderer,
    renderBody,
    args,
    global,
  ) {
    const tagsRenderer = domCompat.resolveRegistered(
      renderer || renderBody,
      global,
    );

    if (tagsRenderer && domCompat.isRenderer(tagsRenderer)) {
      return (input, out) => {
        return TagsCompat({ i: args ? args : input, r: tagsRenderer }, out);
      };
    }

    return renderer;
  };

  Component.prototype.___setCustomEventsOriginal =
    Component.prototype.___setCustomEvents;
  Component.prototype.___setCustomEvents = function (customEvents, scopeId) {
    for (const customEvent of customEvents) {
      customEvent[1] = domCompat.resolveRegistered(
        customEvent[1],
        this.___global,
      );
    }

    this.___setCustomEventsOriginal(customEvents, scopeId);
  };

  const TagsCompatId = "tags-compat";
  const TagsCompat = createRenderer(
    function (_, out, componentDef, component) {
      const input = Array.isArray(_.i) ? _.i : [_.i];
      const tagsRenderer = domCompat.resolveRegistered(_.r, out.global);
      const newNode = domCompat.render(out, component, tagsRenderer, input);

      out.bf("1", component, !newNode);
      if (newNode) {
        out.node({ ___actualize: () => newNode });
      }
      out.ef();
    },
    // eslint-disable-next-line no-constant-condition
    "MARKO_DEBUG"
      ? {
          t: TagsCompatId,
          d: true,
        }
      : {
          t: TagsCompatId,
        },
    {},
  );

  registerComponent(TagsCompatId, () => ({
    _: TagsCompat,
    Component: defineComponent(
      {
        onMount: domCompat.runComponentEffects,
        onUpdate: domCompat.runComponentEffects,
        onDestroy: domCompat.runComponentDestroy,
      },
      TagsCompat,
    ),
  }));

  const rendererCache = new WeakMap();

  domCompat.patchDynamicTag((dynamicTag) => (...args) => {
    const signal = dynamicTag(...args);
    return (scope, renderer, getInput) => {
      return signal(scope, create5to6Renderer(renderer), getInput);
    };
  });

  function create5to6Renderer(renderer) {
    let newRenderer = renderer;
    if (renderer && typeof renderer !== "string") {
      if (renderer === noopRenderer) {
        return noopRenderer;
      }

      const rendererFromAnywhere =
        renderer._ ||
        renderer.render ||
        (renderer.renderer && renderer.renderer.renderer) ||
        renderer.renderer;

      if (!domCompat.isRenderer(rendererFromAnywhere || renderer)) {
        newRenderer = rendererCache.get(renderer);
        if (!newRenderer) {
          newRenderer = domCompat.createRenderer(
            (scope, input) =>
              renderAndMorph(scope, rendererFromAnywhere, renderer, input),
            () => ___createFragmentNode(),
          );
          rendererCache.set(renderer, newRenderer);
        }
      }
    }
    return newRenderer;
  }

  domCompat.registerRenderer(create5to6Renderer);
  domCompat.init(noopRenderer);

  function renderAndMorph(scope, renderer, renderBody, input) {
    const out = defaultCreateOut(scope.$global);
    let host = domCompat.getStartNode(scope);
    let rootNode = host.fragment;
    if (!rootNode) {
      const component = (scope.___marko5Component =
        ___componentLookup[scope.m5c]);
      rootNode = component.___rootNode;
      host = rootNode.startNode;
      domCompat.setScopeNodes(host, rootNode.startNode, rootNode.endNode);
    }
    const existingComponent = scope.___marko5Component;
    const componentsContext = ___getComponentsContext(out);
    const globalComponentsContext = componentsContext.___globalContext;
    let customEvents;
    let normalizedInput;
    globalComponentsContext.___rerenderComponent = existingComponent;
    out.sync();
    if (renderer) {
      const [rawInput] = input;
      normalizedInput = {};

      for (const key in rawInput) {
        const value = rawInput[key];
        if (/^on[-A-Z]/.test(key)) {
          if (typeof value === "function") {
            (customEvents || (customEvents = {}))[
              key[2] === "-" ? key.slice(3) : key.slice(2).toLowerCase()
            ] = [value];
          }
        } else {
          normalizedInput[key === "content" ? "renderBody" : key] = value;
        }
      }

      renderer(normalizedInput, out);
    } else {
      normalizedInput = input[0];
      RenderBodyComponent({ renderBody, args: input }, out);
    }

    domCompat.queueEffect(scope, () => {
      const targetNode = out.___getOutput().___firstChild;
      morphdom(rootNode, targetNode, host, componentsContext);
      const componentDefs = componentsContext.___initComponents(
        getRootNode(host),
      );
      const component = componentDefs[0].___component;
      component.___rootNode = rootNode;
      component.___input = normalizedInput;
      component.___customEvents = customEvents;
      scope.___marko5Component = component;
    });
  }

  function getRootNode(el) {
    var cur = el;
    while (cur.parentNode) cur = cur.parentNode;
    return cur;
  }

  const RenderBodyComponentId = "renderbody-renderer";
  const RenderBodyComponent = createRenderer(
    function (input, out, _componentDef) {
      dynamicTag(
        out,
        input.renderBody,
        null,
        null,
        input.args,
        null,
        _componentDef,
        "0",
      );
    },
    // eslint-disable-next-line no-constant-condition
    "MARKO_DEBUG"
      ? {
          t: RenderBodyComponentId,
          i: true,
          d: true,
        }
      : {
          t: RenderBodyComponentId,
          i: true,
        },
    {},
  );

  registerComponent(RenderBodyComponentId, () => ({
    _: RenderBodyComponent,
    Component: defineComponent({}, RenderBodyComponent),
  }));
};
