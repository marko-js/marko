import { data as _data, source as _source, createRenderer as _createRenderer, setSource as _setSource, loop as _loop, derivation as _derivation, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _val$forBody2 = /* @__PURE__ */_source("val", [], (_scope, val) => _data(_scope["#text/0"], val));
const _forBody2 = /* @__PURE__ */_createRenderer("<div> </div>", /* next(1), get */"D ");
const _val$forBody = /* @__PURE__ */_source("val", [], (_scope, val) => _data(_scope["#text/0"], val));
const _forBody = /* @__PURE__ */_createRenderer("<div> </div>", /* next(1), get */"D ");
const _for2 = /* @__PURE__ */_loop("#text/1", 1, _forBody2, [_val$forBody2], (_scope, [val]) => _setSource(_scope, _val$forBody2, val), (_scope, arrA = _scope["arrA"]) => [arrA, null]);
const _for = /* @__PURE__ */_loop("#div/0", 1, _forBody, [_val$forBody], (_scope, [val]) => _setSource(_scope, _val$forBody, val), (_scope, arrA = _scope["arrA"]) => [arrA, null]);
const _arrA = /* @__PURE__ */_derivation("arrA", 1, [_for, _for2], _scope => [1, 2, 3]);
const _setup = _scope => {
  _notifySignal(_scope, _arrA);
};
export const template = "<div></div><div><!><div></div></div>";
export const walks = /* get, over(1), next(1), replace, out(1) */" bD%l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);