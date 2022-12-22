import { nextTagId as _nextTagId, markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const x = _nextTagId();
  const y = _nextTagId();
  _write(`<div>${_markHydrateNode(_scope, 0)}${_escapeXML(x)}</div>${_markHydrateNode(_scope, 1)}${_escapeXML(y)}`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);