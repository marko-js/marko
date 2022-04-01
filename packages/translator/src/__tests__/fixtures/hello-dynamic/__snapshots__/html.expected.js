import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, toString as _toString, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  _write(`Hello ${_markHydrateNode(0)}${_escapeXML(name)}! Hello ${_markHydrateNode(1)}${_toString(name)}! Hello ${_markHydrateNode(2)}${_toString(missing)}!`);

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);