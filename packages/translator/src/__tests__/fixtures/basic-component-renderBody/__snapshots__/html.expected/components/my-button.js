import { write as _write, dynamicTag as _dynamicTag, markHydrateControlEnd as _markHydrateControlEnd, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register(({
  onClick,
  renderBody
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<button>");
  const _dynamicScope = _dynamicTag(renderBody, null);
  _write(`${_markHydrateControlEnd(_scope0_id, "#text/1")}</button>${_markHydrateNode(_scope0_id, "#button/0")}`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko_0_onClick");
  _writeHydrateScope(_scope0_id, {
    "onClick": onClick,
    "#text/1!": _dynamicScope,
    "#text/1(": renderBody
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/basic-component-renderBody/components/my-button.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);