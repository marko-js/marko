export const $template = "<div><button> </button><!----></div>";
export const $walks = /* next(1), get, next(1), get, out(1), get, out(1) */"D D l l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count_effect = _$.effect("__tests__/template.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#button/0"], "click", function () {
  $count($scope, count + 1), count;
}));
const $count = /* @__PURE__ */_$.state("count/3", ($scope, count) => {
  _$.data($scope["#text/1"], count);
  _$.data($scope["#comment/2"], `${count} + ${count} = ${count + count}`);
  $count_effect($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);