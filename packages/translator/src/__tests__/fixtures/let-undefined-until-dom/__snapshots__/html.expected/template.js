import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, writeEffect as _writeEffect, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const x = undefined;
  _write(`<div>${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/0")}</div>`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/let-undefined-until-dom/template.marko_0");
}, "packages/translator/src/__tests__/fixtures/let-undefined-until-dom/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);