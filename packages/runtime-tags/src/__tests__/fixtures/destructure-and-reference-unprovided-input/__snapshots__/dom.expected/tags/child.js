export const $template = "<div><!></div>";
export const $walks = /* get, next(1), replace, out(1) */" D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $input_class = /* @__PURE__ */_._const("input_class", $scope => _._attr_class($scope["#div/0"], [$scope.input_class, "foo"]));
const $rest__script = _._script("__tests__/tags/child.marko_0_rest", $scope => _._attrs_script($scope, "#div/0"));
const $rest = /* @__PURE__ */_._const("rest", $scope => {
  _._attrs_partial($scope, "#div/0", $scope.rest, {
    class: 1
  });
  $rest__script($scope);
});
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
const $content = /* @__PURE__ */_._const("content", $scope => $dynamicTag($scope, $scope.content));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  (({
    content,
    ...rest
  }) => $rest($scope, rest))($scope.input);
  $input_class($scope, $scope.input.class);
  $content($scope, $scope.input.content);
});
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);