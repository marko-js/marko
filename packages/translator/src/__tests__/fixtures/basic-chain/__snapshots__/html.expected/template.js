import { markHydrateNode as _markHydrateNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const x = 1;
  const y = x * 2;
  const z = y * 3;

  _write(`<div>${_markHydrateNode(_scope, 0)}${_escapeXML(z)}</div>`);
};

export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);