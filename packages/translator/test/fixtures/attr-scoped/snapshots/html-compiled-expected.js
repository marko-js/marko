import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/test/fixtures/attr-scoped/template.marko", input => {
  _write("<div id:scoped=1 aria-described-by:scoped=b></div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);