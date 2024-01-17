import { data as _data, value as _value, createRenderer as _createRenderer, loopOf as _loopOf, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/dom";
const _val$forBody2 = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/0"], val));
const _forBody2 = /* @__PURE__ */_createRenderer("<div> </div>", /* next(1), get */"D ", void 0, void 0, void 0, void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let val;
  if (!_clean) ({
    value: [val]
  } = _destructure);
  _val$forBody2(_scope, val, _clean);
});
const _val$forBody = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/0"], val));
const _forBody = /* @__PURE__ */_createRenderer("<div> </div>", /* next(1), get */"D ", void 0, void 0, void 0, void 0, void 0, void 0, (_scope, _destructure2, _clean) => {
  let val;
  if (!_clean) ({
    value: [val]
  } = _destructure2);
  _val$forBody(_scope, val, _clean);
});
const _for2 = /* @__PURE__ */_loopOf("#text/1", _forBody2);
const _for = /* @__PURE__ */_loopOf("#div/0", _forBody);
const _arrA = /* @__PURE__ */_value("arrA", (_scope, arrA) => {
  _for(_scope, [arrA]);
  _for2(_scope, [arrA]);
});
const _setup = _scope => {
  _arrA(_scope, [1, 2, 3]);
};
export const template = "<div></div><div><!><div></div></div>";
export const walks = /* get, over(1), next(1), replace, out(1) */" bD%l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator/src/__tests__/fixtures/for-tag-siblings/template.marko");