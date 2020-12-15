import { write as _write, wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/attr-boolean/template.marko", input => {
  _write("<input checked>");
});

export default _renderer;
export const render = _createRenderer(_renderer);