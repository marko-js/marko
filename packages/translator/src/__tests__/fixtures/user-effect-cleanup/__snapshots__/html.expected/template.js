import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register(({
  value
}, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const a = 0;
  const b = 0;
  _write(`<div>${_escapeXML("" + a + b)}${_markHydrateNode(_scope0_id, "#text/0")}</div>`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/user-effect-cleanup/template.marko_0_value");
  _writeHydrateScope(_scope0_id, {
    "value": value,
    "a": a,
    "b": b
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/user-effect-cleanup/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);