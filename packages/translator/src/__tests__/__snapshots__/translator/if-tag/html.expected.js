import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";

const _renderer = _register("4Tcr8qb2", input => {
  if (input.a + input.b) _write("Hello");
  if (input.a, input.b) _write("World");

  _write("<div>");

  if (input.x) _write("A");else if (input.y) _write("B");else _write("C");

  _write("</div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);