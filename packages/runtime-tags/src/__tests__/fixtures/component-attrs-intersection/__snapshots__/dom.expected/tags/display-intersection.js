export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_value_dummy = /* @__PURE__ */_$.intersection(5, $scope => {
  const {
    value,
    dummy
  } = $scope;
  _$.data($scope["#text/0"], (dummy, value));
});
const $dummy = /* @__PURE__ */_$.state("dummy/4", $expr_value_dummy);
export function $setup($scope) {
  $dummy($scope, {});
}
export const $value = /* @__PURE__ */_$.value("value", $expr_value_dummy);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $value($scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/display-intersection.marko", $template, $walks, $setup, $input);