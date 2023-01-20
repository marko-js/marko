import { write as _write, getInContext as _getInContext, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  _write("<div>");
  const x = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-static/template.marko");
  _write(`${_escapeXML(x)}${_markHydrateNode(_scope, "#text/0")}</div>`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);