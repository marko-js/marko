import { register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "";
export const walks = "";
export const hydrate = _register("src/__tests__/fixtures/yield-tag/template.marko", input => {
  var _return;

  if (input.show) <yield=1/>else <yield=2/>
  return _return;
});
export default _createRenderFn(template, walks, ["show"], hydrate);