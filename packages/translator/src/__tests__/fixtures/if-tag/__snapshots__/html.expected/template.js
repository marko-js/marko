import { markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = ({
  a,
  b,
  x,
  y
}) => {
  const _scope = _nextScopeId();

  _write(`${_markHydrateNode(_scope, 0)}`);

  if (a + b) {
    const _scope = _nextScopeId();

    _write("Hello");
  }

  _write(`${_markHydrateNode(_scope, 6)}`);

  if (a, b) {
    const _scope = _nextScopeId();

    _write("World");
  }

  _write(`<div>${_markHydrateNode(_scope, 12)}`);

  if (x) {
    const _scope = _nextScopeId();

    _write("A");
  } else if (y) {
    const _scope = _nextScopeId();

    _write("B");
  } else {
    const _scope = _nextScopeId();

    _write("C");
  }

  _write("</div>");
};

export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);