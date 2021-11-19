import { attr as _attr, data as _data, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<button><!></button>";
export const walks = " D%l";
export const hydrate = _register("packages/translator/src/__tests__/fixtures/basic-counter/template.marko", input => {
  const clickCount = 0;

  _attr("onclick", function () {
    clickCount++;
  });

  _data(clickCount);
});
export default _createRenderFn(template, walks, [], hydrate);