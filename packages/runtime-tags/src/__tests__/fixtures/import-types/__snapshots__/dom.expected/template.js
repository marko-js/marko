export const $template = "<div><!><!></div>";
export const $walks = /* next(1), replace, over(1), replace, out(1) */"D%b%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $foo = ($scope, foo) => _._text($scope["#text/0"], String(foo));
const $bar = ($scope, bar) => _._text($scope["#text/1"], String(bar));
export function $setup($scope) {
  $foo($scope, true);
  $bar($scope, true);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);