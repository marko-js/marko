import { write as _write, getInContext as _getInContext, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<div>");
  const x = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-static/template.marko");
  _write(`${_escapeXML(x)}${_markHydrateNode(_scope0_id, "#text/0")}</div>`);
}, "packages/translator/src/__tests__/fixtures/context-tag-static/components/child.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);