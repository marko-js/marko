const { createRenderFn } = require("@marko/runtime-fluurt/dist/debug/html"); // TODO: use the non-debug version when built for production
const createRenderer = require("../components/renderer");
const dynamicTag5 = require("./dynamic-tag");

// TODO: this is really bad
const isMarko5 = (fn) => /^(function[^(]*)?\(out/.test(fn.toString());

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
