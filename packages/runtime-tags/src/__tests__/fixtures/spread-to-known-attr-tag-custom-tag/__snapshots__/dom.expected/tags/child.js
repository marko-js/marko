export const $template = "<select></select>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__option__script = _._script("__tests__/tags/child.marko_1_option", $scope => _._attrs_script($scope, "#option/0"));
const $for_content__option = /* @__PURE__ */_._const("option", $scope => {
  _._attrs_content($scope, "#option/0", $scope.option);
  $for_content__option__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__option($scope, $params2[0]);
export const $input_class = ($scope, input_class) => _._attr_class($scope["#select/0"], input_class);
const $for = /* @__PURE__ */_._for_of("#select/0", "<option></option>", /* get, over(1) */" b", 0, $for_content__$params);
export const $input_option = ($scope, input_option) => $for($scope, [input_option]);
export const $input = ($scope, input) => {
  $input_class($scope, input.class);
  $input_option($scope, input.option);
};
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);