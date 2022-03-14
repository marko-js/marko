import { markScopeOffset as _markScopeOffset, write as _write, on as _on, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/basic-toggle-show/template.marko", input => {
  const show = true;

  _write(`<div>${_markScopeOffset(0)}`);

  if (show) _write("Hello!");

  _write(`${_markScopeOffset(4)}<button>Toggle</button></div>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);