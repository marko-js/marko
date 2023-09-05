const {
  prepare,
  runEffects,
  initRenderer,
  createScope,
} = require("@marko/runtime-fluurt/dist/debug/dom"); // TODO: use the non-debug version when built for production
const createRenderer = require("../components/renderer");
const { r: registerComponent } = require("../components/registry");
const defineComponent = require("../components/defineComponent");
const dynamicTag = require("./dynamic-tag");

export default dynamicTag.___runtimeCompat = function tagsToVdom(tagsRenderer) {
  if (tagsRenderer.___template === undefined) return tagsRenderer;

  return (input, out) => TagsCompat({ i: input, r: tagsRenderer }, out);
};

const componentType = "tags-compat";
const TagsCompat = createRenderer(
  function (_, out, componentDef, component) {
    let dom;
    const input = _.i;
    const tagsRenderer = _.r;
    const attrs = tagsRenderer.___attrs;
    component.effects = prepare(() => {
      if (!component.scope) {
        component.scope = createScope();
        // createScopeWithRenderer(tagsRenderer, /* out.global as context */);
        dom = initRenderer(tagsRenderer, component.scope);
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
    t: componentType,
    d: "MARKO_DEBUG",
  },
  {}
);

registerComponent(componentType, () => ({
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
