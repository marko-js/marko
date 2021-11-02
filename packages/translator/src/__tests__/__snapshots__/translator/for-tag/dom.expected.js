const arr = [1, 2, 3];
const obj = {
  a: 1,
  b: 1,
  c: 1
};
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

import { text as _text, attr as _attr, register as _register, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/dist/dom";
export const template = "<div>: </div><div></div><div></div><div>: </div><div></div><div></div><div> </div><div></div><div></div><div>: </div><div></div><div></div><div>: </div><div>: </div><div></div><div></div><div> </div><div></div><div></div><div> </div><div></div><div></div><div> </div><div></div><div></div>HelloHello";
export const walks = "]#]$'_#]$'^'_!'^'^'^!]#]$']!]!]#]$'!]#]$']!]!]!']!]!]!']!]!]!']!_";
export const hydrate = _register("kLJbLoSu", input => {
  _text(i);

  _text(val);

  _text(key);

  _text(val);

  _text(i);

  _attr("key", i);

  _text(i);

  _text(val);

  _attr("key", `other-${i}`);

  _attr("key", i);

  _text(list.length);

  _text(val);

  _attr("key", key);

  _text(key);

  _text(val);

  _attr("key", `other-${key}`);

  _attr("key", i);

  _text(i);

  _attr("key", `other-${i}`);

  _attr("key", i);

  _text(i);

  _attr("key", `other-${i}`);

  _attr("key", i);

  _text(i);

  _attr("key", `other-${i}`);
});
export default _createRenderFn(template, walks, [], hydrate);