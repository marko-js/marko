import { write as _write, wrapHydratable as _wrapHydratable, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable(input => {
  if (a + b) _write("Hello");
  if (a, b) _write("World");

  _write("<div>");

  if (x) _write("A");else if (y) _write("B");else _write("C");

  _write("</div>");
});

export default _renderer;
export const render = _createRenderFn(_renderer);