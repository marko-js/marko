export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $data = /* @__PURE__ */_$.state("data/2", ($scope, data) => _$.data($scope["#text/1"], data));
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => _$.on($scope["#button/0"], "click", function () {
  $data($scope, 1);
}));
export function $setup($scope) {
  $data($scope, 0);
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);