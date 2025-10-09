export const $template = "<div><button> </button></div>";
export const $walks = /* next(1), get, next(1), get, out(2) */"D D m";
import * as _ from "@marko/runtime-tags/debug/dom";
const $clickCount__script = _._script("__tests__/template.marko_0_clickCount", ($scope, {
  clickCount
}) => _._on($scope["#button/0"], "click", function () {
  $clickCount($scope, ++clickCount);
}));
const $clickCount = /* @__PURE__ */_._let("clickCount/2", ($scope, clickCount) => {
  _._text($scope["#text/1"], clickCount);
  $clickCount__script($scope);
});
export function $setup($scope) {
  /* unused_1 */123;
  /* unused_2 */456;
  $clickCount($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);