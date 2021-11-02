import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";

const _renderer = _register("Fh6ROoqv", input => {
  _write("<div class=content>Hello</div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);