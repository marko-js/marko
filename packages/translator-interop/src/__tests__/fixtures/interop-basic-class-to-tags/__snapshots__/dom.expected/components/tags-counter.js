export const $template = "<button id=tags> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count_effect = _$.effect("__tests__/components/tags-counter.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#button/0"], "click", function () {
  $count($scope, count + 1), count;
}));
const $count = /* @__PURE__ */_$.state("count/5", ($scope, count) => {
  _$.data($scope["#text/1"], count);
  $count_effect($scope);
});
export const $input_count = /* @__PURE__ */_$.value("input_count", ($scope, input_count) => _$.attr($scope["#button/0"], "data-parent", input_count));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_count($scope, input.count));
export function $setup($scope) {
  $count($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/components/tags-counter.marko", $template, $walks, $setup, $input);