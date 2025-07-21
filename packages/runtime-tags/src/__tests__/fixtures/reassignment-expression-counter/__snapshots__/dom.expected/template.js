export const $template = "<button id=addTwo> </button><button id=triple> </button><button id=cube> </button>";
export const $walks = /* get, next(1), get, out(1), get, next(1), get, out(1), get, next(1), get, out(1) */" D l D l D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count_effect = _$.effect("__tests__/template.marko_0_count", ($scope, {
  count
}) => {
  _$.on($scope["#button/0"], "click", function () {
    $count($scope, count += 2);
  });
  _$.on($scope["#button/2"], "click", function () {
    $count($scope, count *= 3);
  });
  _$.on($scope["#button/4"], "click", function () {
    $count($scope, count **= 3);
  });
});
const $count = /* @__PURE__ */_$.state("count/6", ($scope, count) => {
  _$.data($scope["#text/1"], count);
  _$.data($scope["#text/3"], count);
  _$.data($scope["#text/5"], count);
  $count_effect($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);