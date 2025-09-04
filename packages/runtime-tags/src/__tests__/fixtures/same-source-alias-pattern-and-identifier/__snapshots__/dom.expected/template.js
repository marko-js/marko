export const $template = "<button><!> <!></button>";
export const $walks = /* next(1), replace, over(2), replace, out(1) */"D%c%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $b = /* @__PURE__ */_._const("b", ($scope, b) => {
  _._text($scope["#text/0"], b);
  $c($scope, b);
});
const $c = ($scope, c) => {
  _._text($scope["#text/1"], c);
};
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $a2($scope, input.a));
export const $a2 = /* @__PURE__ */_._const("$a", ($scope, $a) => $b($scope, $a.b));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);