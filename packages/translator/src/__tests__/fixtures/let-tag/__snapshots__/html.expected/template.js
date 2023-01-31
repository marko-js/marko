import { escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, writeHydrateCall as _writeHydrateCall, writeHydrateScope as _writeHydrateScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const x = 1;
  const y = 1;
  _write(`<button>${_escapeXML(x)}${_markHydrateNode(_scope0_id, "#text/1")}</button>${_markHydrateNode(_scope0_id, "#button/0")}${_escapeXML(y)}${_markHydrateNode(_scope0_id, "#text/2")}`);
  _writeHydrateCall(_scope0_id, "packages/translator/src/__tests__/fixtures/let-tag/template.marko_0_x_y");
  _writeHydrateScope(_scope0_id, {
    "x": x,
    "y": y
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/let-tag/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);