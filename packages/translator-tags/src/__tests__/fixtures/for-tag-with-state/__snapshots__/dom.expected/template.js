export const _template_ = "<!><!><!><!>";
export const _walks_ = /* replace, over(1), replace, over(1) */"D%b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _i$forBody2 = /* @__PURE__ */_$.value("i", (_scope, i) => _$.data(_scope["#text/0"], i));
const _val$forBody2 = /* @__PURE__ */_$.value("val", (_scope, val) => _$.data(_scope["#text/1"], val));
const _params_3$forBody = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => {
  _val$forBody2(_scope, _params_3[0]);
  _i$forBody2(_scope, _params_3[1]);
});
const _forBody2 = _$.register("__tests__/template.marko_2_renderer", /* @__PURE__ */_$.createRenderer("<div><!>: <!></div>", /* next(1), replace, over(2), replace */"D%c%", void 0, void 0, () => _params_3$forBody));
const _i$forBody = /* @__PURE__ */_$.value("i", (_scope, i) => _$.data(_scope["#text/0"], i));
const _val$forBody = /* @__PURE__ */_$.value("val", (_scope, val) => _$.data(_scope["#text/1"], val));
const _params_2$forBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => {
  _val$forBody(_scope, _params_2[0]);
  _i$forBody(_scope, _params_2[1]);
});
const _forBody = /* @__PURE__ */_$.createRenderer("<div><!>: <!></div>", /* next(1), replace, over(2), replace */"D%c%", void 0, void 0, () => _params_2$forBody);
const _for2 = /* @__PURE__ */_$.loopOf("#text/1", _forBody2);
const _for = /* @__PURE__ */_$.loopOf("#text/0", _forBody);
const _arrB = /* @__PURE__ */_$.state("arrB", (_scope, arrB) => _for2(_scope, [arrB]));
const _arrA = /* @__PURE__ */_$.value("arrA", (_scope, arrA) => _for(_scope, [arrA]));
export function _setup_(_scope) {
  _arrA(_scope, [1, 2, 3]);
  _arrB(_scope, [1, 2, 3]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);