import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = input => {
  const _scope = _nextScopeId();

  _write(`${_markHydrateNode(_scope, 0)}`);

  if (a + b) _write("Hello");

  _write(`${_markHydrateNode(_scope, 4)}`);

  if (a, b) _write("World");

  _write(`<div>${_markHydrateNode(_scope, 8)}`);

  if (x) _write("A");else if (y) _write("B");else _write("C");

  _write("</div>");
};

export default _renderer;
export const render = _createRenderer(_renderer);