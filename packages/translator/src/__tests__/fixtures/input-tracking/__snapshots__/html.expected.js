import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const {
    a,
    b
  } = input;

  _write(`${_markHydrateNode(0)}${_escapeXML(a)} ${_markHydrateNode(1)}${_escapeXML(b)}`);

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);