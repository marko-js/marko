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
  ) {
    const tagsRenderer = domCompat.resolveRenderer(renderer || renderBody);

    if (tagsRenderer) {
      return (input, out) =>
        TagsCompat({ i: args ? args : input, r: tagsRenderer }, out);
    }

    return renderer;
  };

  const TagsCompatId = "tags-compat";
  const TagsCompat = createRenderer(
    function (_, out, componentDef, component) {
      const isHydrate =
        ___getComponentsContext(out).___globalContext.___isHydrate;
      const input = Array.isArray(_.i) ? _.i : [_.i];
      const tagsRenderer = domCompat.resolveRenderer(_.r);
      const newNode = domCompat.render(
        isHydrate,
        out,
        component,
        tagsRenderer,
        input,
      );

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
    const hasAttrs = args.length > 1;
    return (scope, renderer, clean) => {
      return signal(scope, create5to6Renderer(renderer, hasAttrs), clean);
    };
  });

  function create5to6Renderer(renderer, hasAttrs) {
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
              for (const customEvent of customEvents) {
                customEvent[1] = domCompat.resolveRenderer(customEvent[1]);
              }

              setCustomEvents.call(this, customEvents, scopeId);
            };
          }
          newRenderer = domCompat.createRenderer(
            (scope) => {
              if (!hasAttrs) {
                renderAndMorph(scope, rendererFromAnywhere, renderer, {});
              }
            },
            () => {
              const realFragment = document.createDocumentFragment();
              ___createFragmentNode(null, null, realFragment);
              return realFragment;
            },
            (scope, input, clean) => {
              if (clean) return;
              renderAndMorph(scope, rendererFromAnywhere, renderer, input);
            },
          );
          rendererCache.set(renderer, newRenderer);
        }
      }
    }
    return newRenderer;
  }

  domCompat.register("@marko/tags-compat-5-to-6", create5to6Renderer);

  function renderAndMorph(scope, renderer, renderBody, input) {
    const out = defaultCreateOut();
    let host = domCompat.getStartNode(scope);
    let rootNode = host.fragment;
    if (!rootNode) {
      const component = (scope.marko5Component = ___componentLookup[scope.m5c]);
      rootNode = component.___rootNode;
      host = rootNode.startNode;
      domCompat.setScopeNodes(host, rootNode.endNode);
    }
    const existingComponent = scope.marko5Component;
    const componentsContext = ___getComponentsContext(out);
    const globalComponentsContext = componentsContext.___globalContext;
    let customEvents;
    globalComponentsContext.___rerenderComponent = existingComponent;
    out.sync();
    if (renderer) {
      const [rawInput] = input;
      const normalizedInput = {};

      for (const key in rawInput) {
        let value = rawInput[key];
        if (key.startsWith("on")) {
          const c = key[2];
          customEvents = customEvents || {};
          customEvents[(c === "-" ? "" : c.toLowerCase()) + key.slice(3)] = [
            value,
          ];
        } else {
          normalizedInput[key] = rawInput[key];
        }
      }

      renderer(normalizedInput, out);
    } else {
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
      component.___input = input[0];
      component.___customEvents = customEvents;
      scope.marko5Component = component;
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
