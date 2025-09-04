export const $template = "<button id=tags> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $count__script = _._script("__tests__/components/tags-counter.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/0"], "click", function () {
  $count($scope, ++count)
}));
const $count = /* @__PURE__ */_._let("count/5", ($scope, count) => {
  _._text($scope["#text/1"], count);
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export const $input_count = /* @__PURE__ */_._const("input_count", ($scope, input_count) => _._attr($scope["#button/0"], "data-parent", input_count));
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_count($scope, input.count));
export default /* @__PURE__ */_._template("__tests__/components/tags-counter.marko", $template, $walks, $setup, $input);