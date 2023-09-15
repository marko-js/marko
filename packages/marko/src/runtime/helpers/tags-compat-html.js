import initComponentsTag from "../../core-tags/components/init-components-tag";

const {
  patchDynamicTag,
  createRenderFn,
  fork,
  write,
} = require("@marko/runtime-fluurt/dist/debug/html"); // TODO: use the non-debug version when built for production
const createRenderer = require("../components/renderer");
const dynamicTag5 = require("./dynamic-tag");
const defaultCreateOut = require("../createOut");

const isMarko6 = (fn) => !!fn.___isTagsAPI;
const isMarko5 = (fn) => !fn.___isTagsAPI;

export default dynamicTag5.___runtimeCompat = function tagsToVdom(
  tagsRenderer,
  renderBody,
  args
) {
  if (tagsRenderer ? isMarko5(tagsRenderer) : isMarko5(renderBody))
    return tagsRenderer;

  return (input, out) =>
    TagsCompat(
      { i: args ? { value: args } : input, r: tagsRenderer || renderBody },
      out
    );
};

const TagsCompatId = "tags-compat";
const TagsCompat = createRenderer(
  function (_, out, componentDef, component) {
    const input = _.i;
    const tagsRenderer = _.r;
    const renderFn = createRenderFn(tagsRenderer);
    const $global = out.global;
    const streamData = ($global.streamData = $global.streamData || {});
    $global.serializedGlobals = $global.serializedGlobals || {};
    $global.serializedGlobals.componentIdToScopeId = true;
    $global.componentIdToScopeId = $global.componentIdToScopeId || {};
    $global.componentIdToScopeId[component.id] = streamData.scopeId || 0;
    out.bf("0", component, true);
    renderFn(out.beginAsync(), input, {}, streamData);
    out.ef();
  },
  {
    t: TagsCompatId,
    d: "MARKO_DEBUG",
  },
  {}
);

patchDynamicTag(
  function getRenderer(tag) {
    const renderer = tag._ || tag.renderBody || tag;
    if (isMarko6(renderer)) return renderer;

    const renderer5 =
      tag._ ||
      tag.render ||
      (tag.renderer && tag.renderer.renderer) ||
      tag.renderer;
    const renderBody5 = tag.renderBody || tag;

    return (input) => {
      const out = defaultCreateOut();

      fork(out, (result) => {
        write(result.toString());
      });

      if (renderer5) {
        renderer5(input, out);
      } else {
        renderBody5(out);
      }

      initComponentsTag({}, out);

      out.end();
    };
  },
  function createRenderer(renderFn) {
    renderFn.___isTagsAPI = true;
    return renderFn;
  }
);
