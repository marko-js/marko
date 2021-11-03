import { classAttr as _classAttr, attr as _attr, write as _write, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";

const _renderer = _register("packages/translator/src/__tests__/fixtures/attr-escape/template.marko", input => {
  _write(`<div${_classAttr(input.className)}${_attr("foo", 'a' + input.foo + 'b')}${_attr("bar", `a ${input.foo} b`)}></div>`);
});

export default _renderer;
export const render = _createRenderer(_renderer);