export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $onClick_effect = _$.effect("__tests__/tags/my-button.marko_0_onClick", ($scope, {
  onClick
}) => _$.on($scope["#button/0"], "click", onClick));
export const $onClick = /* @__PURE__ */_$.value("onClick", $onClick_effect);
export const $text = /* @__PURE__ */_$.value("text", ($scope, text) => _$.data($scope["#text/1"], text));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $onClick($scope, input.onClick);
  $text($scope, input.text);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-button.marko", $template, $walks, $setup, $input);