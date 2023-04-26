import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, writeEffect as _writeEffect, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const data = 0;
  _write(`<button>${_escapeXML(data)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/basic-handler-refless/template.marko_0");
}, "packages/translator/src/__tests__/fixtures/basic-handler-refless/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);