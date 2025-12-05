export const $template = "<button id=tags> </button><div><!></div>";
export const $walks = /* get, next(1), get, out(1), next(1), replace, out(1) */" D lD%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $count__script = _._script("__tests__/components/tags-layout.marko_0_count", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */_._let("count/7", $scope => {
  _._text($scope["#text/1"], $scope.count);
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/2");
export const $input_stuff_content = /* @__PURE__ */_._const("input_stuff_content", $scope => $dynamicTag($scope, $scope.input_stuff_content));
export const $input = /* @__PURE__ */_._const("input", $scope => $input_stuff($scope, $scope.input.stuff));
export const $input_stuff = /* @__PURE__ */_._const("input_stuff", $scope => $input_stuff_content($scope, $scope.input_stuff?.content));
export default /* @__PURE__ */_._template("__tests__/components/tags-layout.marko", $template, $walks, $setup, $input);