export const _template_ = "<button class=inc> </button><!><!>";
export const _walks_ = /* get, next(1), get, out(1), replace, over(1) */" D l%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_content_x = /* @__PURE__ */_$.intersection(7, _scope => {
  const {
    "input_content/5": input_content,
    "x/6": x
  } = _scope;
  _dynamicTag(_scope, input_content, () => x);
});
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2");
const _x_effect = _$.effect("__tests__/tags/custom-tag.marko_0_x", (_scope, {
  "x/6": x
}) => _$.on(_scope["#button/0"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x/6", (_scope, x) => {
  _$.data(_scope["#text/1"], x);
  _expr_input_content_x(_scope);
  _x_effect(_scope);
});
export const _input_content_ = /* @__PURE__ */_$.value("input_content/5", (_scope, input_content) => _expr_input_content_x(_scope));
export const _input_ = /* @__PURE__ */_$.value("input/4", (_scope, input) => _input_content_(_scope, input.content));
export const _params__ = /* @__PURE__ */_$.value("_params_/3", (_scope, _params_) => _input_(_scope, _params_[0]));
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", _template_, _walks_, _setup_, () => _params__);