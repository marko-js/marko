import { write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/effect-tag/template.marko", input => {
  const x = 1;

  _write("<div id=ref>0</div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);