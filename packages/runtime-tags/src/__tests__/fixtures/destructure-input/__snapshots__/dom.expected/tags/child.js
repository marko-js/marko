export const $template = "<div><!></div>";
export const $walks = /* get, next(1), replace, out(1) */" D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $rest__script = _._script("__tests__/tags/child.marko_0_rest", $scope => _._attrs_script($scope, "#div/0"));
export const $rest = /* @__PURE__ */_._const("rest", $scope => {
  _._attrs($scope, "#div/0", $scope.rest);
  $rest__script($scope);
});
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $content = ($scope, content) => $dynamicTag($scope, content);
export const $input = ($scope, input) => {
  (({
    content,
    ...rest
  }) => $rest($scope, rest))(input);
  $content($scope, input.content);
};
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);