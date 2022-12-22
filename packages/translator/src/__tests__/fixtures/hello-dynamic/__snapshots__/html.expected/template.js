import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, toString as _toString, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  name,
  missing
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write(`Hello ${_markHydrateNode(_scope, 0)}${_escapeXML(name)}! Hello ${_markHydrateNode(_scope, 1)}${_toString(name)}! Hello ${_markHydrateNode(_scope, 2)}${_toString(missing)}!`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);