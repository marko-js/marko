export const $template = "<button><!></button>";
export const $walks = /* get, next(1), replace, out(1) */" D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $attrs__script = _._script("__tests__/tags/FancyButton.marko_0_attrs", $scope => _._attrs_script($scope, "#button/0"));
const $attrs = /* @__PURE__ */_._const("attrs", $scope => {
  _._attrs($scope, "#button/0", $scope.attrs);
  $attrs__script($scope);
});
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
const $content = /* @__PURE__ */_._const("content", $scope => $dynamicTag($scope, $scope.content));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  (({
    content,
    ...attrs
  }) => $attrs($scope, attrs))($scope.input);
  $content($scope, $scope.input.content);
});
export default /* @__PURE__ */_._template("__tests__/tags/FancyButton.marko", $template, $walks, $setup, $input);