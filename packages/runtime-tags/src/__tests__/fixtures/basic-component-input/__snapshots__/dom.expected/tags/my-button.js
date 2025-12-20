export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $onClick__script = _._script("__tests__/tags/my-button.marko_0_onClick", $scope => _._on($scope["#button/0"], "click", $scope.onClick));
export const $onClick = /* @__PURE__ */_._const("onClick", $onClick__script);
export const $text = ($scope, text) => _._text($scope["#text/1"], text);
export const $input = ($scope, input) => {
  $onClick($scope, input.onClick);
  $text($scope, input.text);
};
export default /* @__PURE__ */_._template("__tests__/tags/my-button.marko", $template, $walks, $setup, $input);