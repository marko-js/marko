// template.marko
const $template = "<!><!><button>More</button>";
const $walks = "b%b b";
const $for_content__if = /*@__PURE__*/ _if("#text/0", "<div>b</div>", "b");
const $for_content__items_length = /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__if($scope, $scope._.items_length > 1 ? 0 : 1));
const $for_content__setup = $for_content__items_length;
const $itemId__OR__items__script = _script("__tests__/template.marko_0_itemId_items", ($scope) => _on($scope["#button/1"], "click", function() {
	$items($scope, [...$scope.items, $itemId($scope, $scope.itemId + 1)]);
}));
const $itemId__OR__items = /*@__PURE__*/ _or(4, $itemId__OR__items__script);
const $itemId = /*@__PURE__*/ _let("itemId/2", $itemId__OR__items);
const $for = /*@__PURE__*/ _for_of("#text/0", "<div>a</div><!><!>", "b%c", $for_content__setup);
const $items = /*@__PURE__*/ _let("items/3", ($scope) => {
	$items_length($scope, $scope.items?.length);
	$for($scope, [$scope.items]);
	$itemId__OR__items($scope);
});
function $setup($scope) {
	$itemId($scope, 0);
	$items($scope, [0]);
}
const $items_length = /*@__PURE__*/ _const("items_length", $for_content__items_length);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
