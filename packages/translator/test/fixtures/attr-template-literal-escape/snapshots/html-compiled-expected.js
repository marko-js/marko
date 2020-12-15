import { attr as _attr, write as _write, wrapHydratable as _wrapHydratable, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _wrapHydratable("packages/translator/test/fixtures/attr-template-literal-escape/template.marko", input => {
  _write(`<div${_attr("foo", `Hello ${input.name}`)}></div>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);