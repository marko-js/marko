export const $template = "<button></button><div> </div>";
export const $walks = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $sum = /* @__PURE__ */_._const("sum", ($scope, sum) => _._text($scope["#text/1"], sum()));
const $items__script = _._script("__tests__/template.marko_0_items", ($scope, {
  items
}) => _._on($scope["#button/0"], "click", function () {
  $items($scope, items = [...items, items.length]);
}));
const $items = /* @__PURE__ */_._let("items/2", ($scope, items) => {
  $sum($scope, function sum(i = 0) {
    return i >= items.length ? 0 : items[i] + sum(i + 1);
  });
  $items__script($scope);
});
export function $setup($scope) {
  $items($scope, [0, 1, 2]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);