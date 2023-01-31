import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const clickCount = 0;
  _write(`<div><button>${_escapeXML(clickCount)}${_markHydrateNode(_scope0_id, "#text/1")}</button>${_markHydrateNode(_scope0_id, "#button/0")}</div>`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-counter/template.marko_0_clickCount");
  _writeHydrateScope(_scope0_id, {
    "clickCount": clickCount
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/basic-counter/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);