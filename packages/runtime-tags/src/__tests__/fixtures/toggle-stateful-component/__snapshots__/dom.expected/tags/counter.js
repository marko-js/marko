export const _template_ = "<button> </button>";
export const _walks_ = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_onCount_clickCount_effect = _$.effect("__tests__/tags/counter.marko_0_input_onCount_clickCount", (_scope, {
  input_onCount,
  clickCount
}) => _$.on(_scope["#button/0"], "click", function () {
  input_onCount(_clickCount(_scope, clickCount + 1));
}));
const _expr_input_onCount_clickCount = /* @__PURE__ */_$.intersection(6, _scope => _expr_input_onCount_clickCount_effect(_scope));
const _clickCount = /* @__PURE__ */_$.state("clickCount/5", (_scope, clickCount) => {
  _$.data(_scope["#text/1"], ((() => {
    if (clickCount > 0) throw new Error("This should not have executed since the parent removes this component when the count is greater than 0");
  })(), clickCount));
  _expr_input_onCount_clickCount(_scope);
});
export const _input_onCount_ = /* @__PURE__ */_$.value("input_onCount", (_scope, input_onCount) => _expr_input_onCount_clickCount(_scope));
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => _input_onCount_(_scope, input.onCount));
export function _setup_(_scope) {
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/counter.marko", _template_, _walks_, _setup_, _input_);