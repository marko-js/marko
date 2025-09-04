export const $template = "<div> </div><div> </div><button>Update</button>";
export const $walks = /* next(1), get, out(1), next(1), get, out(1), get, over(1) */"D lD l b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $items__OR__index__script = _._script("__tests__/template.marko_0_items_index", ($scope, {
  items,
  index
}) => _._on($scope["#button/2"], "click", function () {
  const newItems = items.slice(1);
  $items($scope, items = newItems);
  $index($scope, index = (index + 1) % newItems.length);
}));
const $items__OR__index = /* @__PURE__ */_._or(6, $scope => {
  let {
    items,
    index
  } = $scope;
  _._text($scope["#text/1"], items[index]);
  $items__OR__index__script($scope);
});
const $items = /* @__PURE__ */_._let("items/3", ($scope, items) => {
  $items_($scope, items?.[0]);
  $items__OR__index($scope);
});
const $items_ = /* @__PURE__ */_._const("items_0", ($scope, items_0) => _._text($scope["#text/0"], items_0));
const $index = /* @__PURE__ */_._let("index/5", $items__OR__index);
export function $setup($scope) {
  $items($scope, ["a", "b", "c"]);
  $index($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);