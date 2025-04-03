export const $template = "<div> </div><div> </div><button>Update</button>";
export const $walks = /* next(1), get, out(1), next(1), get, out(1), get, over(1) */"D lD l b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_items_index_effect = _$.effect("__tests__/template.marko_0_items_index", ($scope, {
  items,
  index
}) => _$.on($scope["#button/2"], "click", function () {
  const newItems = items.slice(1);
  $items($scope, newItems);
  $index($scope, (index + 1) % newItems.length);
}));
const $expr_items_index = /* @__PURE__ */_$.intersection(6, $scope => {
  const {
    items,
    index
  } = $scope;
  _$.data($scope["#text/1"], items[index]);
  $expr_items_index_effect($scope);
});
const $index = /* @__PURE__ */_$.state("index/5", $expr_items_index);
const $items_ = /* @__PURE__ */_$.value("items_0", ($scope, items_0) => _$.data($scope["#text/0"], items_0));
const $items = /* @__PURE__ */_$.state("items/3", ($scope, items) => {
  $items_($scope, items?.[0]);
  $expr_items_index($scope);
});
export function $setup($scope) {
  $items($scope, ["a", "b", "c"]);
  $index($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);