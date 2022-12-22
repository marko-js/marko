import { markHydrateNode as _markHydrateNode, write as _write, dynamicTag as _dynamicTag, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  onClick,
  renderBody
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write(`${_markHydrateNode(_scope, 0)}<button>${_markHydrateNode(_scope, 1)}`);
  _dynamicTag(renderBody, null);
  _write("</button>");
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick");
  _writeHydrateScope(_scope, {
    7: onClick
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);