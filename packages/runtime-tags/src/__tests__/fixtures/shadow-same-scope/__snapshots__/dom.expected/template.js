export const $template = "<div><button> </button><div><button> </button><div><button> </button></div></div></div><div><button> </button></div>";
export const $walks = /* next(1), get, next(1), get, out(1), next(1), get, next(1), get, out(1), next(1), get, next(1), get, out(4), next(1), get, next(1), get, out(2) */"D D lD D lD D oD D m";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count4_effect = _$.effect("__tests__/template.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#button/0"], "click", function () {
  $count4($scope, ++count)
}));
const $count4 = /* @__PURE__ */_$.state("count/8", ($scope, count) => {
  _$.data($scope["#text/1"], count);
  $count4_effect($scope);
});
const $count5_effect = _$.effect("__tests__/template.marko_0_$count", ($scope, {
  $count
}) => _$.on($scope["#button/2"], "click", function () {
  $count5($scope, ++$count)
}));
const $count5 = /* @__PURE__ */_$.state("$count/9", ($scope, $count) => {
  _$.data($scope["#text/3"], $count);
  $count5_effect($scope);
});
const $count6_effect = _$.effect("__tests__/template.marko_0_$count2", ($scope, {
  $count2
}) => _$.on($scope["#button/4"], "click", function () {
  $count6($scope, ++$count2)
}));
const $count6 = /* @__PURE__ */_$.state("$count2/10", ($scope, $count2) => {
  _$.data($scope["#text/5"], $count2);
  $count6_effect($scope);
});
const $count7_effect = _$.effect("__tests__/template.marko_0_$count3", ($scope, {
  $count3
}) => _$.on($scope["#button/6"], "click", function () {
  $count7($scope, ++$count3)
}));
const $count7 = /* @__PURE__ */_$.state("$count3/11", ($scope, $count3) => {
  _$.data($scope["#text/7"], $count3);
  $count7_effect($scope);
});
export function $setup($scope) {
  $count4($scope, 0);
  $count5($scope, 0);
  $count6($scope, 0);
  $count7($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);