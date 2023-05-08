import { data as _data, value as _value, createRenderer as _createRenderer, loop as _loop, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _val$forBody2 = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/0"], val));
const _forBody2 = /* @__PURE__ */_createRenderer("<div> </div>", /* next(1), get */"D ");
const _val$forBody = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/0"], val));
const _forBody = /* @__PURE__ */_createRenderer("<div> </div>", /* next(1), get */"D ");
const _for2 = /* @__PURE__ */_loop("#text/1", _forBody2, (_scope, _destructure2, _clean) => {
  let val;
  if (!_clean) [val] = _destructure2;
  _val$forBody2(_scope, val, _clean);
});
const _for = /* @__PURE__ */_loop("#div/0", _forBody, (_scope, _destructure, _clean) => {
  let val;
  if (!_clean) [val] = _destructure;
  _val$forBody(_scope, val, _clean);
});
const _arrA = /* @__PURE__ */_value("arrA", (_scope, arrA) => {
  _for(_scope, [arrA, null]);
  _for2(_scope, [arrA, null]);
});
const _setup = _scope => {
  _arrA(_scope, [1, 2, 3]);
};
export const template = "<div></div><div><!><div></div></div>";
export const walks = /* get, over(1), next(1), replace, out(1) */" bD%l";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/for-tag-siblings/template.marko");