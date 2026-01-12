export const $template = "<p></p>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $input_class__OR__rest__script = _._script("__tests__/tags/child.marko_0_input_class_rest", $scope => _._attrs_script($scope, "#p/0"));
const $input_class__OR__rest = /* @__PURE__ */_._or(5, $scope => {
  _._attrs_content($scope, "#p/0", {
    class: $scope.input_class,
    ...$scope.rest
  });
  $input_class__OR__rest__script($scope);
});
export const $input_class = /* @__PURE__ */_._const("input_class", $input_class__OR__rest);
export const $rest = /* @__PURE__ */_._const("rest", $input_class__OR__rest);
export const $input = ($scope, input) => {
  (({
    class: $class,
    ...rest
  }) => $rest($scope, rest))(input);
  $input_class($scope, input.class);
};
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);