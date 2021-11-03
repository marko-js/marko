import { data as _data, attr as _attr, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
export const template = "";
export const walks = "";
export const hydrate = _register("src/__tests__/fixtures/for-tag/template.marko", input => {
  const arr = [1, 2, 3];
  const obj = {
    a: 1,
    b: 1,
    c: 1
  };
  let _i = 0;

  for (const val of arr) {
    let i = _i++;

    _data(i);

    _data(val);
  }

  for (const key in obj) {
    const val = obj[key];

    _data(key);

    _data(val);
  }

  for (let _steps = (10 - 0) / 2, _step = 0; _step <= _steps; _step++) {
    const i = 0 + _step * 2;

    _data(i);
  }

  let _i2 = 0;

  for (const val of arr) {
    let i = _i2++;

    _attr("key", i);

    _data(i);

    _data(val);

    _attr("key", `other-${i}`);
  }

  let _i3 = 0;
  const list = arr;

  for (const val of list) {
    let i = _i3++;

    _attr("key", i);

    _data(list.length);

    _data(val);
  }

  for (const key in obj) {
    const val = obj[key];

    _attr("key", key);

    _data(key);

    _data(val);

    _attr("key", `other-${key}`);
  }

  for (let _steps3 = (10 - 0) / 2, _step3 = 0; _step3 <= _steps3; _step3++) {
    const i = 0 + _step3 * 2;

    _attr("key", i);

    _data(i);

    _attr("key", `other-${i}`);

    for (let _steps2 = (10 - 0) / 2, _step2 = 0; _step2 <= _steps2; _step2++) {
      const i = 0 + _step2 * 2;

      _attr("key", i);

      _data(i);

      _attr("key", `other-${i}`);
    }
  }

  for (let _steps4 = (0 - 10) / -2, _step4 = 0; _step4 <= _steps4; _step4++) {
    const i = 10 + _step4 * -2;

    _attr("key", i);

    _data(i);

    _attr("key", `other-${i}`);
  }

  for (let _steps5 = (10 - 0) / 1, _step5 = 0; _step5 <= _steps5; _step5++) {}

  for (let _steps6 = (10 - 0) / 1, _step6 = 0; _step6 <= _steps6; _step6++) {}
});
export default _createRenderFn(template, walks, [], hydrate);