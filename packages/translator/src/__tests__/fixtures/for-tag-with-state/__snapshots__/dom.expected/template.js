import { data as _data, setSource as _setSource, source as _source, createRenderer as _createRenderer, loop as _loop, derivation as _derivation, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _i$forBody2 = /* @__PURE__ */_source("i", [], (_scope, i) => _data(_scope["#text/0"], i));
const _val$forBody2 = /* @__PURE__ */_source("val", [], (_scope, val) => _data(_scope["#text/1"], val));
const _forBody2 = /* @__PURE__ */_createRenderer("<div><!>: <!></div>", /* next(1), replace, over(2), replace */"D%c%");
const _i$forBody = /* @__PURE__ */_source("i", [], (_scope, i) => _data(_scope["#text/0"], i));
const _val$forBody = /* @__PURE__ */_source("val", [], (_scope, val) => _data(_scope["#text/1"], val));
const _forBody = /* @__PURE__ */_createRenderer("<div><!>: <!></div>", /* next(1), replace, over(2), replace */"D%c%");
const _for2 = /* @__PURE__ */_loop("#text/1", 1, _forBody2, [_val$forBody2, _i$forBody2], (_scope, [val, i]) => {
  _setSource(_scope, _val$forBody2, val);
  _setSource(_scope, _i$forBody2, i);
}, (_scope, arrB = _scope["arrB"]) => [arrB, null]);
const _for = /* @__PURE__ */_loop("#text/0", 1, _forBody, [_val$forBody, _i$forBody], (_scope, [val, i]) => {
  _setSource(_scope, _val$forBody, val);
  _setSource(_scope, _i$forBody, i);
}, (_scope, arrA = _scope["arrA"]) => [arrA, null]);
const _arrB = /* @__PURE__ */_source("arrB", [_for2]);
const _arrA = /* @__PURE__ */_derivation("arrA", 1, [_for], _scope => [1, 2, 3]);
const _setup = _scope => {
  _setSource(_scope, _arrB, [1, 2, 3]);
  _notifySignal(_scope, _arrA);
};
export const template = "<!><!>";
export const walks = /* replace, over(1), replace, over(1) */"%b%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);