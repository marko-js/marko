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

exports.p = function ({
  prepare,
  runEffects,
  patchConditionals,
  createScopeWithRenderer,
  queueEffect,
  scopeLookup,
  getRegisteredWithScope,
  register,
}) {
  dynamicTag.___runtimeCompat = function tagsToVdom(
    tagsRenderer,
    renderBody,
    args,
  ) {
    if (
      tagsRenderer
        ? tagsRenderer.___clone === undefined
        : !Array.isArray(renderBody) && renderBody?.___clone === undefined
    )
      return tagsRenderer;

    return (input, out) =>
      TagsCompat(
        { i: args ? args : input, r: tagsRenderer || renderBody },
        out,
      );
  };

  const TagsCompatId = "tags-compat";
  const TagsCompat = createRenderer(
    function (_, out, componentDef, component) {
      let existing = false;
      const isHydrate =
        ___getComponentsContext(out).___globalContext.___isHydrate;
      const input = Array.isArray(_.i) ? _.i : [_.i];
      const tagsRenderer = resolveRegistered(_.r);
      const args = tagsRenderer.___args;

      component.effects = prepare(() => {
        if (isHydrate) {
          const scopeId = out.global.componentIdToScopeId[component.id];
          component.scope = scopeLookup[scopeId];
        }
        if (!component.scope) {
          component.scope = createScopeWithRenderer(
            tagsRenderer /* out.global as context */,
          );
          for (const signal of tagsRenderer.___closureSignals) {
            signal(component.scope, true);
          }
        } else {
          args && args(component.scope, input, 1);
          existing = true;
        }
        args && args(component.scope, input);
      });
      out.bf(out.___assignedKey, component, existing);
      if (!existing) {
        out.node({
          ___actualize: () =>
            component.scope.___startNode === component.scope.___endNode
              ? component.scope.___startNode
              : component.scope.___startNode.parentNode,
        });
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
        onMount() {
          runEffects(this.effects);
        },
        onUpdate() {
          runEffects(this.effects);
        },
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

  patchConditionals((conditional) => (...args) => {
    const signal = conditional(...args);
    const hasAttrs = args.length > 1;
    return (scope, renderer, clean) => {
      return signal(scope, create5to6Renderer(renderer, hasAttrs), clean);
    };
  });

  function create5to6Renderer(renderer, hasAttrs) {
    let newRenderer = renderer;
    if (renderer) {
      const rendererFromAnywhere =
        renderer._ ||
        renderer.render ||
        (renderer.renderer && renderer.renderer.renderer) ||
        renderer.renderer;
      const isMarko6 = rendererFromAnywhere
        ? rendererFromAnywhere.___clone
        : renderer.___clone;

      if (typeof renderer !== "string" && !isMarko6) {
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
                customEvent[1] = resolveRegistered(customEvent[1]);
              }

              setCustomEvents.call(this, customEvents, scopeId);
            };
          }
          newRenderer = {
            ___setup(scope) {
              if (!hasAttrs) {
                renderAndMorph(scope, rendererFromAnywhere, renderer, {});
              }
            },
            ___clone() {
              const realFragment = document.createDocumentFragment();
              ___createFragmentNode(null, null, realFragment);
              return realFragment;
            },
            ___hasUserEffects: 1,
            ___args(scope, input, clean) {
              if (clean) return;
              renderAndMorph(scope, rendererFromAnywhere, renderer, input);
            },
          };
          rendererCache.set(renderer, newRenderer);
        }
      }
    }
    return newRenderer;
  }

  register("@marko/tags-compat-5-to-6", create5to6Renderer);

  function renderAndMorph(scope, renderer, renderBody, input) {
    const out = defaultCreateOut();
    let rootNode = scope.___startNode.fragment;
    if (!rootNode) {
      const component = (scope.marko5Component = ___componentLookup[scope.m5c]);
      rootNode = component.___rootNode;
      scope.___startNode = rootNode.startNode;
      scope.___endNode = rootNode.endNode;
    }
    const host = scope.___startNode;
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

    queueEffect(scope, () => {
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

  function resolveRegistered(renderer) {
    if (!Array.isArray(renderer)) return renderer;

    const [registerId, scopeId] = renderer;
    const scope = scopeLookup[scopeId];
    return getRegisteredWithScope(registerId, scope);
  }
};
