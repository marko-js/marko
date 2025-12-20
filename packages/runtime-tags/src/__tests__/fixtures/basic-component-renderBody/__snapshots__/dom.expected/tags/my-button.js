export const $template = "<button><!></button>";
export const $walks = /* get, next(1), replace, out(1) */" D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $onClick__script = _._script("__tests__/tags/my-button.marko_0_onClick", $scope => _._on($scope["#button/0"], "click", $scope.onClick));
export const $onClick = /* @__PURE__ */_._const("onClick", $onClick__script);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $content = ($scope, content) => $dynamicTag($scope, content);
export const $input = ($scope, input) => {
  $onClick($scope, input.onClick);
  $content($scope, input.content);
};
export default /* @__PURE__ */_._template("__tests__/tags/my-button.marko", $template, $walks, $setup, $input);