import { markScopeOffset as _markScopeOffset, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/if-tag/template.marko", input => {
  _write(`${_markScopeOffset(0)}`);

  if (a + b) _write("Hello");

  _write(`${_markScopeOffset(4)}`);

  if (a, b) _write("World");

  _write(`<div>${_markScopeOffset(8)}`);

  if (x) _write("A");else if (y) _write("B");else _write("C");

  _write("</div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);