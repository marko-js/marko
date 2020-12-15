import { write as _write, wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/if-tag/template.marko", input => {
  if (input.a + input.b) _write("Hello");
  if (input.a, input.b) _write("World");

  _write("<div>");

  if (input.x) _write("A");else if (input.y) _write("B");else _write("C");

  _write("</div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);