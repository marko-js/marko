export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_input_onCount_clickCount_effect = _$.effect("__tests__/tags/counter.marko_0_input_onCount_clickCount", ($scope, {
  input_onCount,
  clickCount
}) => _$.on($scope["#button/0"], "click", function () {
  input_onCount($clickCount($scope, ++clickCount));
}));
const $expr_input_onCount_clickCount = /* @__PURE__ */_$.intersection(6, $expr_input_onCount_clickCount_effect);
const $clickCount = /* @__PURE__ */_$.state("clickCount/5", ($scope, clickCount) => {
  _$.data($scope["#text/1"], ((() => {
    if (clickCount > 0) throw new Error("This should not have executed since the parent removes this component when the count is greater than 0");
  })(), clickCount));
  $expr_input_onCount_clickCount($scope);
});
export function $setup($scope) {
  $clickCount($scope, 0);
}
export const $input_onCount = /* @__PURE__ */_$.value("input_onCount", $expr_input_onCount_clickCount);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_onCount($scope, input.onCount));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/counter.marko", $template, $walks, $setup, $input);