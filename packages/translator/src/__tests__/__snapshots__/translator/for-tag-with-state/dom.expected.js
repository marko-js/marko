const arrA = [1, 2, 3];
let _i = 0;

for (const val of arrA) {
  let i = _i++;
}

const arrB = [1, 2, 3];
let _i2 = 0;

for (const val of arrB) {
  let i = _i2++;
}

import { text as _text, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "<div>: </div><div>: </div>";
export const walks = "]#]$']#]$(";
export const hydrate = _register("/rMZ+rK0", input => {
  _text(i);

  _text(val);

  _text(i);

  _text(val);
});
export default _createRenderFn(template, walks, [], hydrate);