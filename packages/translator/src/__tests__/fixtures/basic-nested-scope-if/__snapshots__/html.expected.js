import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const clickCount = 0;

  _write(`<div>${_markHydrateNode(0)}`);

  if (clickCount < 3) _write(`${_markHydrateNode(0)}<button>${_markHydrateNode(1)}${_escapeXML(clickCount)}</button>`);

  _write("</div>");

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);