import { write as _write, dynamicTag as _dynamicTag, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  onClick,
  renderBody
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write("<button>");
  _dynamicTag(renderBody, null);
  _write(`</button>${_markHydrateNode(_scope, "#button/0")}`);
  _writeHydrateCall(_scope, "packages/translator/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick");
  _writeHydrateScope(_scope, {
    "onClick": onClick
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);