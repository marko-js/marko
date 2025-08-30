export const $template = "<button id=tags> </button><div><!></div>";
export const $walks = /* get, next(1), get, out(1), next(1), replace, out(1) */" D lD%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2", 0, 0, 1);
const $expr_input_content_count = /* @__PURE__ */_$.intersection(7, $scope => {
  let {
    input_content,
    count
  } = $scope;
  $dynamicTag($scope, input_content, () => [count, "hello"]);
});
const $count_effect = _$.effect("__tests__/components/tags-layout.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#button/0"], "click", function () {
  $count($scope, ++count)
}));
const $count = /* @__PURE__ */_$.state("count/6", ($scope, count) => {
  _$.data($scope["#text/1"], count);
  $expr_input_content_count($scope);
  $count_effect($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export const $input_content = /* @__PURE__ */_$.value("input_content", $expr_input_content_count);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_content($scope, input.content));
export default /* @__PURE__ */_$.createTemplate("__tests__/components/tags-layout.marko", $template, $walks, $setup, $input);