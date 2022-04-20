import { getInContext as _getInContext, markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const _$global = _getInContext("$");

  _write(`<div><span>${_markHydrateNode(_scope, 0)}${_escapeXML(_$global.x)}</span></div>`);
};

export default _renderer;
export const render = _createRenderer(_renderer);