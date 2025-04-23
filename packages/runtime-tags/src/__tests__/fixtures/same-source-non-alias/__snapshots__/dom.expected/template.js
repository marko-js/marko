export const $template = "<button><!> <!></button>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
const createWrapper = $createWrapper;
import * as _$ from "@marko/runtime-tags/debug/dom";
const $pattern2 = /* @__PURE__ */_$.value("$pattern", ($scope, $pattern) => $a($scope, $pattern.a));
const $count_effect = _$.effect("__tests__/template.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#button/0"], "click", function () {
  $count($scope, count + 1), count;
}));
const $count = /* @__PURE__ */_$.state("count/3", ($scope, count) => {
  $pattern2($scope, createWrapper(count));
  $count_effect($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
const $a = /* @__PURE__ */_$.value("a", ($scope, a) => {
  _$.data($scope["#text/1"], a);
  $b($scope, a);
});
const $b = ($scope, b) => {
  _$.data($scope["#text/2"], b);
};
function $createWrapper(a) {
  return {
    a
  };
}
_$.register("__tests__/template.marko_0/createWrapper", $createWrapper);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);