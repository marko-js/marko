let _i = 0;

for (const val of arr) {
  let i = _i++;
}

for (const key in obj) {
  const val = obj[key];
}

for (let _steps = (10 - 0) / 2, _step = 0; _step <= _steps; _step++) {
  const i = 0 + _step * 2;
}

let _i2 = 0;

for (const val of arr) {
  let i = _i2++;
}

let _i3 = 0;
const list = arr;

for (const val of list) {
  let i = _i3++;
}

for (const key in obj) {
  const val = obj[key];
}

for (let _steps3 = (10 - 0) / 2, _step3 = 0; _step3 <= _steps3; _step3++) {
  const i = 0 + _step3 * 2;

  for (let _steps2 = (10 - 0) / 2, _step2 = 0; _step2 <= _steps2; _step2++) {
    const i = 0 + _step2 * 2;
  }
}

for (let _steps4 = (0 - 10) / -2, _step4 = 0; _step4 <= _steps4; _step4++) {
  const i = 10 + _step4 * -2;
}

for (let _steps5 = (10 - 0) / 1, _step5 = 0; _step5 <= _steps5; _step5++) {}

for (let _steps6 = (10 - 0) / 1, _step6 = 0; _step6 <= _steps6; _step6++) {}

import { data as _data, write as _write, attr as _attr, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_val(val) {
  if (_write(2, val)) _data(1, val);
}

function _apply_i(i) {
  if (_write(3, i)) _data(0, i);
}

function _apply_key(key) {
  if (_write(2, key)) _data(0, key);
}

function _apply_val2(val) {
  if (_write(3, val)) _data(1, val);
}

function _apply_i2(i) {
  if (_write(1, i)) _data(0, i);
}

function _apply_val3(val) {
  if (_write(4, val)) _data(2, val);
}

function _apply_i3(i) {
  if (_write(5, i)) {
    _attr(0, "key", i);

    _data(1, i);

    _attr(3, "key", `other-${i}`);
  }
}

function _apply_val4(val) {
  if (_write(3, val)) _data(2, val);
}

function _apply_i4(i) {
  if (_write(4, i)) _attr(0, "key", i);
}

function _apply_list(list) {
  if (_write(5, list)) _data(1, list.length);
}

function _apply_key2(key) {
  if (_write(4, key)) {
    _attr(0, "key", key);

    _data(1, key);

    _attr(3, "key", `other-${key}`);
  }
}

function _apply_val5(val) {
  if (_write(5, val)) _data(2, val);
}

function _apply_i6(i) {
  if (_write(3, i)) {
    _attr(0, "key", i);

    _data(1, i);

    _attr(2, "key", `other-${i}`);
  }
}

function _apply_i5(i) {
  if (_write(3, i)) {
    _attr(0, "key", i);

    _data(1, i);

    _attr(2, "key", `other-${i}`);
  }
}

function _apply_i7(i) {
  if (_write(3, i)) {
    _attr(0, "key", i);

    _data(1, i);

    _attr(2, "key", `other-${i}`);
  }
}

function _apply() {
  _apply_arr([1, 2, 3]);

  _apply_obj({
    a: 1,
    b: 1,
    c: 1
  });
}

function _apply_arr(arr) {
  if (_write(0, arr)) {}
}

function _apply_obj(obj) {
  if (_write(1, obj)) {}
}

export const template = "";
export const walks = "";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);