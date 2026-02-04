export const $template = "<button></button>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $input__script = _._script("__tests__/tags/my-button.marko_0_input", $scope => _._attrs_script($scope, "#button/0"));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  _._attrs_content($scope, "#button/0", $scope.input);
  $input__script($scope);
});
export default /* @__PURE__ */_._template("__tests__/tags/my-button.marko", $template, $walks, $setup, $input);