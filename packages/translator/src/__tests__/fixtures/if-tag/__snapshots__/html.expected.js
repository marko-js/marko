import { markScopeOffset as _markScopeOffset, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/if-tag/template.marko", input => {
  _write(`${_markScopeOffset(0)}`);

  if (a + b) _write(`Hello${_markScopeOffset(0)}`);

  _write(`${_markScopeOffset(1)}`);

  if (a, b) _write(`World${_markScopeOffset(1)}`);

  _write(`<div>${_markScopeOffset(2)}`);

  if (x) _write(`A${_markScopeOffset(2)}`);else if (y) _write("B");else _write("C");

  _write("</div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);