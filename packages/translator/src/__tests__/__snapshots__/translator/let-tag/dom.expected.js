import { attr as _attr, data as _data, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<div><!></div><!>";
export const walks = " D%l%b";
export const hydrate = _register("packages/translator/src/__tests__/fixtures/let-tag/template.marko", input => {
  const x = 1;
  const y = 1;

  _attr("onclick", () => x = y = x + y);

  _data(x);

  _data(y);
});
export default _createRenderFn(template, walks, [], hydrate);