export const $template = "<!><!><button>More</button>";
export const $walks = /* over(1), replace, over(1), get, over(1) */"b%b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__if = /* @__PURE__ */_._if("#text/0", "<div>b</div>", /* over(1) */"b");
const $for_content__items_length = /* @__PURE__ */_._for_closure("#text/0", $scope => $for_content__if($scope, ($scope._.items_length > 1) ? 0 : 1));
const $for_content__setup = $for_content__items_length;
const $itemId__OR__items__script = _._script("__tests__/template.marko_0_itemId_items", $scope => _._on($scope["#button/1"], "click", function () {
  $items($scope, [...$scope.items, $itemId($scope, $scope.itemId + 1)]);
}));
const $itemId__OR__items = /* @__PURE__ */_._or(4, $itemId__OR__items__script);
const $itemId = /* @__PURE__ */_._let("itemId/2", $itemId__OR__items);
const $for = /* @__PURE__ */_._for_of("#text/0", "<div>a</div><!><!>", /* over(1), replace, over(2) */"b%c", $for_content__setup);
const $items = /* @__PURE__ */_._let("items/3", $scope => {
  $items_length($scope, $scope.items?.length);
  $for($scope, [$scope.items]);
  $itemId__OR__items($scope);
});
export function $setup($scope) {
  $itemId($scope, 0);
  $items($scope, [0]);
}
const $items_length = /* @__PURE__ */_._const("items_length", $for_content__items_length);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);