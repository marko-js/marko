import { data as _data, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "";
export const walks = "";
export const hydrate = _register("src/__tests__/fixtures/for-tag-with-state/template.marko", input => {
  const arrA = [1, 2, 3];
  let _i = 0;

  for (const val of arrA) {
    let i = _i++;

    _data(i);

    _data(val);
  }

  const arrB = [1, 2, 3];
  let _i2 = 0;

  for (const val of arrB) {
    let i = _i2++;

    _data(i);

    _data(val);
  }
});
export default _createRenderFn(template, walks, [], hydrate);