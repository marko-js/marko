export const $template = "<button class=inc> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $x_effect = _$.effect("__tests__/tags/counter.marko_0_x", ($scope, {
  x
}) => _$.on($scope["#button/0"], "click", function () {
  $x($scope, x + 1), x;
}));
const $x = /* @__PURE__ */_$.state("x/2", ($scope, x) => {
  _$.data($scope["#text/1"], x);
  _$.tagVarSignal($scope, x);
  $x_effect($scope);
});
export function $setup($scope) {
  _$.setTagVarChange($scope, $valueChange($scope));
  $x($scope, 1);
}
function $valueChange($scope) {
  return _new_x => {
    $x($scope, _new_x);
  };
}
_$.register("__tests__/tags/counter.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/counter.marko", $template, $walks, $setup);