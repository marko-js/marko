import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = input => {
  const _scope = _nextScopeId();
  const {
    a,
    b
  } = input;
  _write(`${_markHydrateNode(_scope, 0)}${_escapeXML(a)} ${_markHydrateNode(_scope, 1)}${_escapeXML(b)}`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);