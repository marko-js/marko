import { write as _write, getInContext as _getInContext, markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  _write("<div>");
  const x = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-static/template.marko");
  _write(`${_markHydrateNode(_scope, 0)}${_escapeXML(x)}</div>`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);