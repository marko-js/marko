import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  const a = 0;
  const b = 0;

  _write(`${_markHydrateNode(_scope, 0)}`);

  if (true) {
    const _scope = _nextScopeId();

    _write(`${_markHydrateNode(_scope, 0)}${_escapeXML(a + b)}`);
  }
};

export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);