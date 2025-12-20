export const $template = "<button id=tags> </button><div><!></div>";
export const $walks = /* get, next(1), get, out(1), next(1), replace, out(1) */" D lD%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/2", 0, 0, 1);
const $input_content__OR__count = /* @__PURE__ */_._or(7, $scope => $dynamicTag($scope, $scope.input_content, () => [$scope.count, "hello"]));
const $count__script = _._script("__tests__/components/tags-layout.marko_0_count", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */_._let("count/6", $scope => {
  _._text($scope["#text/1"], $scope.count);
  $input_content__OR__count($scope);
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export const $input_content = /* @__PURE__ */_._const("input_content", $input_content__OR__count);
export const $input = ($scope, input) => $input_content($scope, input.content);
export default /* @__PURE__ */_._template("__tests__/components/tags-layout.marko", $template, $walks, $setup, $input);