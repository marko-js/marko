import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  const y = 0;
  _write(`<span>${_escapeXML(x)}${_markHydrateNode(_scope0_id, "#text/0")}</span><span>${_escapeXML(y)}${_markHydrateNode(_scope0_id, "#text/1")}</span>`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/let-tag-set-in-effect/template.marko_0_x");
  _writeHydrateScope(_scope0_id, {
    "x": x
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/let-tag-set-in-effect/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);