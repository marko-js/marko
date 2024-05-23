import { data as _data, createRenderer as _createRenderer, value as _value, loopOf as _loopOf, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _val$forBody2 = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/0"], val));
const _params_3$forBody = /* @__PURE__ */_value("_params_3", (_scope, _params_3) => _val$forBody2(_scope, _params_3[0]));
const _forBody2 = /* @__PURE__ */_createRenderer("<div> </div>", /* next(1), get */"D ", void 0, void 0, void 0, _params_3$forBody);
const _val$forBody = /* @__PURE__ */_value("val", (_scope, val) => _data(_scope["#text/0"], val));
const _params_2$forBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => _val$forBody(_scope, _params_2[0]));
const _forBody = /* @__PURE__ */_createRenderer("<div> </div>", /* next(1), get */"D ", void 0, void 0, void 0, _params_2$forBody);
const _for2 = /* @__PURE__ */_loopOf("#text/1", _forBody2);
const _for = /* @__PURE__ */_loopOf("#div/0", _forBody);
const _arrA = /* @__PURE__ */_value("arrA", (_scope, arrA) => {
  _for(_scope, [arrA]);
  _for2(_scope, [arrA]);
});
const _setup = _scope => {
  _arrA(_scope, [1, 2, 3]);
};
export const _template_ = "<div></div><div><!><div></div></div>";
export const _walks_ = /* get, over(1), next(1), replace, out(1) */" bD%l";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/for-tag-siblings/template.marko");