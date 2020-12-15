import { write as _write, wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/custom-tag-child-analyze/template.marko", input => {
  _write("Hello Frank");
});

export default _renderer;
export const render = _createRenderer(_renderer);