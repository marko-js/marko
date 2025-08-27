export const $template = "<button></button>";
export const $walks = /* get, over(1) */" b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $if_content = /* @__PURE__ */_$.createRenderer("<span id=count>0</span>", /* over(1) */"b");
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => _$.on($scope["#button/0"], "click", function () {
  document.getElementById("count").textContent++;
}));
export const $setup = $setup_effect;
const $if = /* @__PURE__ */_$.conditional("#button/0", $if_content);
export const $input_show = /* @__PURE__ */_$.value("input_show", ($scope, input_show) => $if($scope, input_show ? 0 : 1));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_show($scope, input.show));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);