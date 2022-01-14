let _i = 0;

for (const val of arrA) {
  let i = _i++;
}

let _i2 = 0;

for (const val of arrB) {
  let i = _i2++;
}

import { data as _data, write as _write, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_val(val) {
  if (_write(2, val)) _data(1, val);
}

function _apply_i(i) {
  if (_write(3, i)) _data(0, i);
}

function _apply_val2(val) {
  if (_write(2, val)) _data(1, val);
}

function _apply_i2(i) {
  if (_write(3, i)) _data(0, i);
}

function _apply() {
  _apply_arrA([1, 2, 3]);

  _apply_arrB([1, 2, 3]);
}

function _apply_arrA(arrA) {
  if (_write(0, arrA)) {}
}

function _apply_arrB(arrB) {
  if (_write(1, arrB)) {}
}

export const template = "";
export const walks = "";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);