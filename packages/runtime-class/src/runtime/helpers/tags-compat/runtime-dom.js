const { ___componentLookup } = require("@internal/components-util");
const {
  ___getComponentsContext,
} = require("../../components/ComponentsContext");
const ComponentDef = require("../../components/ComponentDef");
const defineComponent = require("../../components/defineComponent");
const { r: registerComponent } = require("../../components/registry");
const createRenderer = require("../../components/renderer");
const defaultCreateOut = require("../../createOut");
const morphdom = require("../../vdom/morphdom");
const { ___createFragmentNode } = require("../../vdom/morphdom/fragment");
const dynamicTag = require("../dynamic-tag");
const Component = require("../../components/Component");
const noopRenderer = require("../serialize-noop").___noop;
// Heads a class-method event reference runtime-html.js serialized into a Tags
// child's input.
// eslint-disable-next-line no-constant-condition
const CLASS_EVENT_MARKER = "MARKO_DEBUG" ? "$compat_classEvent" : "$C_e";

// Bound in `p` so entry files (dom / dom-debug, cjs / esm) just re-export `f`.
let resumeClassFunction;

// Rebuilds a hoisted class handler against whichever component the resumed
// scope names, so it fires without the parent having to rerender.
exports.f = (id, factory) => {
  resumeClassFunction(
    id,
    (scope) =>
      function () {
        // Resolved on call: the tags resume runs before `$MC` creates the class
        // component this handler belongs to.
        return factory(
          ___componentLookup[scope.m5h] ||
            ___componentLookup[scope.m5c] ||
            scope.___marko5Component,
        ).apply(this, arguments);
      },
  );
};

exports.p = function (domCompat) {
  resumeClassFunction = domCompat.resumeClassFunction;
  dynamicTag.___runtimeCompat = function tagsToVdom(
    renderer,
    renderBody,
    args,
    global,
    componentDef,
    customEvents,
  ) {
    const tagsRenderer = domCompat.resolveRegistered(
      renderer || renderBody,
      global,
    );

    if (tagsRenderer && domCompat.isRenderer(tagsRenderer)) {
      return (input, out) => {
        return TagsCompat(
          {
            i: args ? args : addTagsEvents(input, componentDef, customEvents),
            r: tagsRenderer,
          },
          out,
        );
      };
    }

    return renderer;
  };

  // Revive a serialized class-method event reference into a live handler, looked
  // up lazily since a split parent may not be hydrated yet when the child resumes.
  domCompat.setClassEventResolver(function (value, scope) {
    if (Array.isArray(value) && value[0] === CLASS_EVENT_MARKER) {
      const componentId = value[1];
      const method = value[2];
      const extraArgs = value[3];
      return function () {
        const component =
          ___componentLookup[componentId] || scope.___marko5Component;
        const args = extraArgs ? extraArgs.slice() : [];
        for (let i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        return component[method].apply(component, args);
      };
    }
    return value;
  });

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

  const defDeserialize = ComponentDef.___deserialize;
  ComponentDef.___deserialize = function (o, types, global, registry) {
    if (typeof o[2] === "number") {
      // `getScope` can return undefined for a not-yet-resumed scope (streaming /
      // out-of-order resume of a class-in-tags child); match every other consumer.
      o[2] = domCompat.getScope(global, o[2])?.m5i;
    }
    return defDeserialize(o, types, global, registry);
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

  domCompat.patchDynamicTag(create5to6Renderer);

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
          domCompat.setRendererId(newRenderer, renderer);
          rendererCache.set(renderer, newRenderer);
        }
      }
    }
    return newRenderer;
  }

  domCompat.init(noopRenderer);

  function renderAndMorph(scope, renderer, renderBody, input) {
    const out = defaultCreateOut(scope.$global);
    let host = domCompat.getStartNode(scope);
    let rootNode = host.fragment;
    if (!rootNode) {
      // An inert/server only class child has no client instance in
      // ___componentLookup; once it has been re-rendered once it is tracked on
      // the scope instead.
      const component = (scope.___marko5Component =
        ___componentLookup[scope.m5c] || scope.___marko5Component);
      if (component) {
        rootNode = component.___rootNode;
      } else {
        // First re-render of such a child: wrap its existing DOM (between the
        // scope's start and end nodes) in a fragment so the new render can be
        // morphed in place. The morph + ___initComponents below registers a
        // component that the branch above reuses for subsequent re-renders.
        rootNode = ___createFragmentNode(
          host.nextSibling,
          domCompat.getEndNode(scope),
          host.parentNode,
        );
      }
      host = rootNode.startNode;
      domCompat.setScopeNodes(scope, rootNode.startNode, rootNode.endNode);
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
        if (/^on[-A-Z]/.test(key) && typeof value === "function") {
          (customEvents || (customEvents = {}))[toCustomEventName(key)] = [
            value,
          ];
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

// Fold a Class parent's `on-x(...)` bindings into `onX` props on its Tags child.
function addTagsEvents(input, componentDef, customEvents) {
  if (customEvents) {
    const component = componentDef.___component;
    for (let i = customEvents.length; i--;) {
      const [eventName, handler, , extraArgs] = customEvents[i];
      input[toTagsEventProp(eventName)] = function () {
        const fn = typeof handler === "function" ? handler : component[handler];
        return fn.apply(
          component,
          extraArgs ? [...extraArgs, ...arguments] : arguments,
        );
      };
    }
  }

  return input;
}

// A Class parent addresses a Tags child by the child's own camelCase prop
// (`onSetFilter`); a dashed name does not type-check against its `Input`.
function toTagsEventProp(eventName) {
  return "on" + eventName.charAt(0).toUpperCase() + eventName.slice(1);
}

function toCustomEventName(key) {
  return key[2] === "-"
    ? key.slice(3)
    : key
        .slice(2)
        .replace(/[A-Z]/g, (m, i) => (i ? "-" : "") + m.toLowerCase());
}
