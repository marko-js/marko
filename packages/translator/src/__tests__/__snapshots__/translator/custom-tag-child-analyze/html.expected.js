import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/dist/html";

const _renderer = _register("5EcUQ1fh", input => {
  _write("Hello Frank");
});

export default _renderer;
export const render = _createRenderer(_renderer);