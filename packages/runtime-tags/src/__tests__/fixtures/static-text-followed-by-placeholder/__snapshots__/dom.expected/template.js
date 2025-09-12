export const $template = "= <!><button>Inc</button>";
export const $walks = /* over(1), replace, over(1), get, over(1) */"b%b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $count__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/1"], "click", function () {
  $count($scope, ++count);
}));
const $count = /* @__PURE__ */_._let("count/2", ($scope, count) => {
  _._text($scope["#text/0"], count);
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);