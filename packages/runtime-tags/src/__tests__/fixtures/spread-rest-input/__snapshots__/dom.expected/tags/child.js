export const $template = " <span></span>";
export const $walks = /* over(1), get, over(1) */"b b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $_class__OR__rest__script = _._script("__tests__/tags/child.marko_0__class_rest", $scope => _._attrs_script($scope, "#span/0"));
const $_class__OR__rest = /* @__PURE__ */_._or(5, $scope => {
  _._attrs_content($scope, "#span/0", {
    class: $scope._class,
    ...$scope.rest
  });
  $_class__OR__rest__script($scope);
});
export const $_class = /* @__PURE__ */_._const("_class", $_class__OR__rest);
export const $rest = /* @__PURE__ */_._const("rest", $_class__OR__rest);
export const $input = ($scope, input) => {
  (({
    class: $class,
    ...rest
  }) => $rest($scope, rest))(input);
  $_class($scope, input.class);
};
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);