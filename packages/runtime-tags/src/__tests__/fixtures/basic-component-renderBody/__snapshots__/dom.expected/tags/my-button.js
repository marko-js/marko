export const $template = "<button><!></button>";
export const $walks = /* get, next(1), replace, out(1) */" D%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $onClick_effect = _$.effect("__tests__/tags/my-button.marko_0_onClick", ($scope, {
  onClick
}) => _$.on($scope["#button/0"], "click", onClick));
export const $onClick = /* @__PURE__ */_$.value("onClick", $onClick_effect);
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export const $content = /* @__PURE__ */_$.value("content", $dynamicTag);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $onClick($scope, input.onClick);
  $content($scope, input.content);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-button.marko", $template, $walks, $setup, $input);