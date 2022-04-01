import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const x = 1;
  const y = 1;

  _write(`<div>${_markHydrateNode(0)}${_escapeXML(x)}</div>${_markHydrateNode(1)}${_escapeXML(y)}`);

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);