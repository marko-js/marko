export const v = 123;
import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  value
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write(`<div>${_markHydrateNode(_scope, 0)}${_escapeXML(value)}</div>`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);