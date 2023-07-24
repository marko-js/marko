import { write as _write, getInContext as _getInContext, escapeXML as _escapeXML, markResumeNode as _markResumeNode, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<div><span>");
  const {
    x
  } = _getInContext("$");
  _write(`${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/0")}</span></div>`);
}, "packages/translator/src/__tests__/fixtures/context-tag-from-global/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);