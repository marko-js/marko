export const $template = "<div> </div><button> </button>";
export const $walks = /* next(1), get, out(1), get, next(1), get, out(1) */"D l D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $myObj = /* @__PURE__ */_$.value("myObj", ($scope, myObj) => _$.data($scope["#text/0"], JSON.stringify(myObj)));
const $x_effect = _$.effect("__tests__/template.marko_0_x", ($scope, {
  x
}) => _$.on($scope["#button/1"], "click", function () {
  $x($scope, x + 1), x;
}));
const $x = /* @__PURE__ */_$.state("x/3", ($scope, x) => {
  _$.data($scope["#text/2"], x);
  $myObj($scope, {
    foo: 1,
    bar: x + 1
  });
  $x_effect($scope);
});
export function $setup($scope) {
  $x($scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);