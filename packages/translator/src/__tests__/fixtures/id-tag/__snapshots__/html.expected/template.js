import { nextTagId as _nextTagId, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const x = _nextTagId();
  const y = _nextTagId();
  _write(`<div>${_escapeXML(x)}${_markHydrateNode(_scope, "#text/0")}</div>${_escapeXML(y)}${_markHydrateNode(_scope, "#text/1")}`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);