import { getInContext as _getInContext, markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = input => {
  const _scope = _nextScopeId();
  const x = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-reactive/template.marko");
  _write(`<div>${_markHydrateNode(_scope, 0)}${_escapeXML(x)}</div>`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);