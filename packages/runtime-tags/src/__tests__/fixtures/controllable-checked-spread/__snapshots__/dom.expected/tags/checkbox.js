export const $template = "<input>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $input_effect = _$.effect("__tests__/tags/checkbox.marko_0_input", $scope => _$.attrsEvents($scope, "#input/0"));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  _$.attrs($scope, "#input/0", {
    type: "checkbox",
    ...input
  });
  $input_effect($scope);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/checkbox.marko", $template, $walks, $setup, $input);