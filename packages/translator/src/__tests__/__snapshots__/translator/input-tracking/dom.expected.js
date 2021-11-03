import { data as _data, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "<!> <!>";
export const walks = "%c%b";
export const hydrate = _register("src/__tests__/fixtures/input-tracking/template.marko", input => {
  const {
    a,
    b
  } = input;

  _data(a);

  _data(b);
});
export default _createRenderFn(template, walks, [""], hydrate);