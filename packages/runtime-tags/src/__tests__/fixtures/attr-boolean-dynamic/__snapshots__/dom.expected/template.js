export const $template = "<input><button> </button>";
export const $walks = /* get, over(1), get, next(1), get, out(1) */" b D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $disabled_effect = _$.effect("__tests__/template.marko_0_disabled", ($scope, {
  disabled
}) => _$.on($scope["#button/1"], "click", function () {
  $disabled($scope, !disabled);
}));
const $disabled = /* @__PURE__ */_$.state("disabled/3", ($scope, disabled) => {
  _$.attr($scope["#input/0"], "disabled", disabled);
  _$.data($scope["#text/2"], disabled ? "enable" : "disable");
  $disabled_effect($scope);
});
export function $setup($scope) {
  $disabled($scope, true);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);