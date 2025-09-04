export const $template = "<div> </div><button> </button>";
export const $walks = /* next(1), get, out(1), get, next(1), get, out(1) */"D l D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $myObj = /* @__PURE__ */_._const("myObj", ($scope, myObj) => _._text($scope["#text/0"], JSON.stringify(myObj)));
const $x__script = _._script("__tests__/template.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/1"], "click", function () {
  $x($scope, ++x)
}));
const $x = /* @__PURE__ */_._let("x/3", ($scope, x) => {
  _._text($scope["#text/2"], x);
  $myObj($scope, {
    foo: 1,
    bar: x + 1
  });
  $x__script($scope);
});
export function $setup($scope) {
  $x($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);