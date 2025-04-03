export const $template = "<button><!> <!></button>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $textAlias = ($scope, textAlias) => {
  _$.data($scope["#text/2"], textAlias);
};
export const $text = /* @__PURE__ */_$.value("text", ($scope, text) => {
  _$.data($scope["#text/1"], text);
  $textAlias($scope, text);
});
export const $value2 = /* @__PURE__ */_$.value("$value", ($scope, $value) => $text($scope, $value.text));
const $onClick_effect = _$.effect("__tests__/tags/my-button.marko_0_onClick", ($scope, {
  onClick
}) => _$.on($scope["#button/0"], "click", onClick));
export const $onClick = /* @__PURE__ */_$.value("onClick", $onClick_effect);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $onClick($scope, input.onClick);
  $value2($scope, input.value);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-button.marko", $template, $walks, $setup, $input);