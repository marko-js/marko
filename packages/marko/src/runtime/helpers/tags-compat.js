import { ___getComponentsContext } from "../components/ComponentsContext";
import { ___createFragmentNode } from "../vdom/morphdom/fragment";

const {
  prepare,
  runEffects,
  initRenderer,
  createScope,
  patchConditionals,
  queueEffect,
} = require("@marko/runtime-fluurt/dist/debug/dom"); // TODO: use the non-debug version when built for production
const createRenderer = require("../components/renderer");
const { r: registerComponent } = require("../components/registry");
const defineComponent = require("../components/defineComponent");
const dynamicTag = require("./dynamic-tag");
const morphdom = require("../vdom/morphdom");
const defaultCreateOut = require("../createOut");

export default dynamicTag.___runtimeCompat = function tagsToVdom(
  tagsRenderer,
  renderBody
) {
  if (
    tagsRenderer
      ? tagsRenderer.___clone === undefined
      : renderBody?.___clone === undefined
  )
    return tagsRenderer;

  return (input, out) =>
    TagsCompat({ i: input, r: tagsRenderer || renderBody }, out);
};

const TagsCompatId = "tags-compat";
const TagsCompat = createRenderer(
  function (_, out, componentDef, component) {
    let dom;
    const input = _.i;
    const tagsRenderer = _.r;
    const attrs = tagsRenderer.___attrs;
    component.effects = prepare(() => {
      if (!component.scope) {
        component.scope = createScope();
        component.scope._ = tagsRenderer.___owner;
        dom = initRenderer(tagsRenderer, component.scope);
        if (tagsRenderer.___closureSignals) {
          for (const signal of tagsRenderer.___closureSignals) {
            signal.___subscribe?.(component.scope);
          }
        }
        // component.scope = createScopeWithRenderer(tagsRenderer, /* out.global as context */);
        // dom = component.scope.___startNode === component.scope.___endNode ? component.scope.___startNode : component.scope.___startNode.parentNode;
        for (const signal of tagsRenderer.___closureSignals) {
          signal(component.scope, true);
        }
      } else {
        attrs && attrs(component.scope, input, 1);
      }
      attrs && attrs(component.scope, input);
    });
    out.bf("0", component, !dom);
    if (dom) {
      out.node({
        ___actualize: () => dom,
      });
    }
    out.ef();
  },
  {
    t: TagsCompatId,
    d: "MARKO_DEBUG",
  },
  {}
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
    TagsCompat
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
            ___attrs(scope, input, clean) {
              if (clean) return;
              renderAndMorph(scope, rendererFromAnywhere, renderer, input);
            },
          };
          rendererCache.set(renderer, newRenderer);
        }
      }
    }
    return signal(scope, newRenderer, clean);
  };
});

function renderAndMorph(scope, renderer, renderBody, input) {
  const out = defaultCreateOut();
  const rootNode = scope.___startNode.fragment;
  const host = scope.___startNode;
  const existingComponent = scope.marko5Component;
  const componentsContext = ___getComponentsContext(out);
  const globalComponentsContext = componentsContext.___globalContext;
  globalComponentsContext.___rerenderComponent = existingComponent;
  out.sync();
  if (renderer) {
    renderer(input, out);
  } else {
    RenderBodyComponent({ renderBody, args: input.value }, out);
  }

  queueEffect(scope, () => {
    const targetNode = out.___getOutput().___firstChild;
    morphdom(rootNode, targetNode, host, componentsContext);
    const componentDefs = componentsContext.___initComponents(
      getRootNode(host)
    );
    const component = componentDefs[0].___component;
    component.___rootNode = rootNode;
    component.___input = input;
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
      "0"
    );
  },
  {
    t: RenderBodyComponentId,
    i: true,
    d: "MARKO_DEBUG",
  },
  {}
);

registerComponent(RenderBodyComponentId, () => ({
  _: RenderBodyComponent,
  Component: defineComponent({}, RenderBodyComponent),
}));
