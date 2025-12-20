export const $template = "<div><!></div>";
export const $walks = /* get, next(1), replace, out(1) */" D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $input_class = ($scope, input_class) => _._attr_class($scope["#div/0"], [input_class, "foo"]);
const $rest__script = _._script("__tests__/tags/child.marko_0_rest", $scope => _._attrs_script($scope, "#div/0"));
const $rest = /* @__PURE__ */_._const("rest", $scope => {
  _._attrs_partial($scope, "#div/0", $scope.rest, {
    class: 1
  });
  $rest__script($scope);
});
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
const $content = ($scope, content) => $dynamicTag($scope, content);
export const $input = ($scope, input) => {
  (({
    content,
    ...rest
  }) => $rest($scope, rest))(input);
  $input_class($scope, input.class);
  $content($scope, input.content);
};
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);