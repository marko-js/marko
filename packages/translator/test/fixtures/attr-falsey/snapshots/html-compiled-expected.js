import { write as _write, wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/attr-falsey/template.marko", input => {
  _write("<div d=0 y=1></div>");
});

export default _renderer;
export const render = _createRenderer(_renderer);