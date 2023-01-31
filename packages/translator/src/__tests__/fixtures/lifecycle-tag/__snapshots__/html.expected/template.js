import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const x = 0;
  _write(`<div id=ref></div><button id=increment>Increment</button>${_markHydrateNode(_scope0_id, "#button/0")}`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/lifecycle-tag/template.marko_0_x");
  _writeHydrateScope(_scope0_id, {
    "x": x
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/lifecycle-tag/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);