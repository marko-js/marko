export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $input__OR__count = /* @__PURE__ */_._or(5, $scope => {
  let {
    input,
    count
  } = $scope;
  _._text($scope["#text/1"], input.format(count));
});
const $count__script = _._script("__tests__/tags/counter.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/0"], "click", function () {
  $count($scope, ++count);
}));
const $count = /* @__PURE__ */_._let("count/4", $scope => {
  $input__OR__count($scope);
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export const $input = /* @__PURE__ */_._const("input", $input__OR__count);
export default /* @__PURE__ */_._template("__tests__/tags/counter.marko", $template, $walks, $setup, $input);