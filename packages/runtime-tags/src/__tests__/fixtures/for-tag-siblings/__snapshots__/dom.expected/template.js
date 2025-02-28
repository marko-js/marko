export const _template_ = "<div></div><div><!><div></div></div>";
export const _walks_ = /* get, over(1), next(1), replace, out(1) */" bD%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _val$for_content2 = /* @__PURE__ */_$.value("val", (_scope, val) => _$.data(_scope["#text/0"], val));
const _params_3$for_content = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _val$for_content2(_scope, _params_3[0]));
const _for_content2 = /* @__PURE__ */_$.createRenderer("<div> </div>", /* next(1), get */"D ", void 0, () => _params_3$for_content);
const _val$for_content = /* @__PURE__ */_$.value("val", (_scope, val) => _$.data(_scope["#text/0"], val));
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _val$for_content(_scope, _params_2[0]));
const _for_content = /* @__PURE__ */_$.createRenderer("<div> </div>", /* next(1), get */"D ", void 0, () => _params_2$for_content);
const _for2 = /* @__PURE__ */_$.loopOf("#text/1", _for_content2);
const _for = /* @__PURE__ */_$.loopOf("#div/0", _for_content);
const _arrA = /* @__PURE__ */_$.value("arrA", (_scope, arrA) => {
  _for(_scope, [arrA]);
  _for2(_scope, [arrA]);
});
export function _setup_(_scope) {
  _arrA(_scope, [1, 2, 3]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);