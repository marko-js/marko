export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $valueChange2__script = _._script("__tests__/tags/child.marko_0_$valueChange", $scope => $scope.$valueChange(2));
export const $valueChange2 = /* @__PURE__ */_._const("$valueChange", $valueChange2__script);
const $rest__script = _._script("__tests__/tags/child.marko_0_rest", $scope => _._attrs_script($scope, "#div/0"));
export const $rest = /* @__PURE__ */_._const("rest", $scope => {
  _._attrs_content($scope, "#div/0", $scope.rest);
  $rest__script($scope);
});
export const $input = ($scope, input) => {
  (({
    value,
    valueChange,
    ...rest
  }) => $rest($scope, rest))(input);
  $valueChange2($scope, input.valueChange);
};
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);