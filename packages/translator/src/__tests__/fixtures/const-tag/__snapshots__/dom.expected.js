import { data as _data, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<div>1</div><!>";
export const walks = "b%b";
export const hydrate = _register("packages/translator/src/__tests__/fixtures/const-tag/template.marko", input => {
  const x = 1;
  const y = 1;

  _data(y);
});
export default _createRenderFn(template, walks, [], hydrate);