import { data as _data, value as _value, createRenderer as _createRenderer, loopOf as _loopOf, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/dom";
const _i$forBody2 = /* @__PURE__ */_value("i", (_scope, i) => _data(_scope["#text/0"], i));
const _val$forBody2 = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/1"], val));
const _forBody2 = /* @__PURE__ */_createRenderer("<div><!>: <!></div>", /* next(1), replace, over(2), replace */"D%c%", void 0, void 0, void 0, void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let val, i;
  if (!_clean) ({
    value: [val, i]
  } = _destructure);
  _val$forBody2(_scope, val, _clean);
  _i$forBody2(_scope, i, _clean);
});
const _i$forBody = /* @__PURE__ */_value("i", (_scope, i) => _data(_scope["#text/0"], i));
const _val$forBody = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/1"], val));
const _forBody = /* @__PURE__ */_createRenderer("<div><!>: <!></div>", /* next(1), replace, over(2), replace */"D%c%", void 0, void 0, void 0, void 0, void 0, void 0, (_scope, _destructure2, _clean) => {
  let val, i;
  if (!_clean) ({
    value: [val, i]
  } = _destructure2);
  _val$forBody(_scope, val, _clean);
  _i$forBody(_scope, i, _clean);
});
const _for2 = /* @__PURE__ */_loopOf("#text/1", _forBody2);
const _for = /* @__PURE__ */_loopOf("#text/0", _forBody);
const _arrB = /* @__PURE__ */_value("arrB", (_scope, arrB) => _for2(_scope, [arrB]));
const _arrA = /* @__PURE__ */_value("arrA", (_scope, arrA) => _for(_scope, [arrA]));
const _setup = _scope => {
  _arrA(_scope, [1, 2, 3]);
  _arrB(_scope, [1, 2, 3]);
};
export const template = "<!><!>";
export const walks = /* replace, over(1), replace, over(1) */"%b%b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator/src/__tests__/fixtures/for-tag-with-state/template.marko");