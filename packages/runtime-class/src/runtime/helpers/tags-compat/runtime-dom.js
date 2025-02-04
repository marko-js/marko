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

  const TagsCompatId = "tags-compat";
  const TagsCompat = createRenderer(
    function (_, out, componentDef, component) {
      const input = Array.isArray(_.i) ? _.i : [_.i];
      const tagsRenderer = domCompat.resolveRegistered(_.r, global);
      const newNode = domCompat.render(out, component, tagsRenderer, input);

      out.bf(out.___assignedKey, component, !newNode);
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

  // (
  //   nodeAccessor: Accessor,
  //   dynamicTagAttrs?: IntersectionSignal,
  //   intersection?: IntersectionSignal,
  //   valueWithIntersection?: ValueSignal
  // )

  const rendererCache = new WeakMap();

  domCompat.patchConditionals((conditional) => (...args) => {
    const signal = conditional(...args);
    const skipAttrs = args.length <= 1;
    return (scope, rendererOrOp) => {
      return signal(
        scope,
        domCompat.isOp(rendererOrOp)
          ? rendererOrOp
          : create5to6Renderer(rendererOrOp, skipAttrs),
      );
    };
  });

  function create5to6Renderer(renderer, skipAttrs) {
    let newRenderer = renderer;
    if (renderer && typeof renderer !== "string") {
      const rendererFromAnywhere =
        renderer._ ||
        renderer.render ||
        (renderer.renderer && renderer.renderer.renderer) ||
        renderer.renderer;

      if (!domCompat.isRenderer(rendererFromAnywhere || renderer)) {
        newRenderer = rendererCache.get(renderer);
        if (!newRenderer) {
          const { Component } = renderer;
          if (Component) {
            const setCustomEvents = Component.prototype.___setCustomEvents;
            Component.prototype.___setCustomEvents = function (
              customEvents,
              scopeId,
            ) {
              const global = this.___global;
              for (const customEvent of customEvents) {
                customEvent[1] = domCompat.resolveRegistered(
                  customEvent[1],
                  global,
                );
              }

              setCustomEvents.call(this, customEvents, scopeId);
            };
          }
          newRenderer = domCompat.createRenderer(
            (scope) =>
              skipAttrs &&
              renderAndMorph(scope, rendererFromAnywhere, renderer, {}),
            () => ___createFragmentNode().startNode,
            (scope, input) =>
              domCompat.isOp(input) ||
              renderAndMorph(scope, rendererFromAnywhere, renderer, input),
          );
          rendererCache.set(renderer, newRenderer);
        }
      }
    }
    return newRenderer;
  }

  domCompat.registerRenderer(create5to6Renderer);
  domCompat.init(require("../serialize-noop").___noop);

  function renderAndMorph(scope, renderer, renderBody, input) {
    const out = defaultCreateOut();
    let host = domCompat.getStartNode(scope);
    let rootNode = host.fragment;
    if (!rootNode) {
      const component = (scope.___marko5Component =
        ___componentLookup[scope.m5c]);
      rootNode = component.___rootNode;
      host = rootNode.startNode;
      domCompat.setScopeNodes(host, rootNode.endNode);
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
