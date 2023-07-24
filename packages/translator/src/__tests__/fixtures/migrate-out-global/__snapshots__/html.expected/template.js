import { getInContext as _getInContext, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const _$global = _getInContext("$");
  _write(`<div><span>${_escapeXML(_$global.x)}${_markResumeNode(_scope0_id, "#text/0")}</span></div>`);
}, "packages/translator/src/__tests__/fixtures/migrate-out-global/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);