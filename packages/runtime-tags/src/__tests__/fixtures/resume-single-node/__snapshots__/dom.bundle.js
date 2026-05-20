// total: 7407 (min) 3407 (brotli)
// template.marko: 272 (min) 195 (brotli)
const $for_content__if = /* @__PURE__ */ _if(0, "<div>b</div>", "b");
const $for_content__items_length = /* @__PURE__ */ _for_closure(0, ($scope) => $for_content__if($scope, $scope._.f > 1 ? 0 : 1));
const $for_content__setup = $for_content__items_length;
const $itemId__OR__items = /* @__PURE__ */ _or(4, _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.d, $itemId($scope, $scope.c + 1)]);
})));
const $itemId = /* @__PURE__ */ _let(2, $itemId__OR__items);
const $for = /* @__PURE__ */ _for_of(0, "<div>a</div><!><!>", "b%c", $for_content__setup);
const $items = /* @__PURE__ */ _let(3, ($scope) => {
	$items_length($scope, $scope.d?.length);
	$for($scope, [$scope.d]);
	$itemId__OR__items($scope);
});
const $items_length = /* @__PURE__ */ _const(5, $for_content__items_length);
