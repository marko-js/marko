export const $template = "<input>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $input__script = _._script("__tests__/tags/checkbox.marko_0_input", $scope => _._attrs_script($scope, "#input/0"));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  _._attrs($scope, "#input/0", {
    type: "checkbox",
    ...$scope.input
  });
  $input__script($scope);
});
export default /* @__PURE__ */_._template("__tests__/tags/checkbox.marko", $template, $walks, $setup, $input);