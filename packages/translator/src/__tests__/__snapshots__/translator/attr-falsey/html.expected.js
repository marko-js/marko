import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("src/__tests__/fixtures/attr-falsey/template.marko", input => {
  _write("<div d=0 y=1></div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);