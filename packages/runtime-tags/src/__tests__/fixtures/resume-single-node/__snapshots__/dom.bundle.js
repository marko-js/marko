// template.marko
const $for_content__if = /* @__PURE__ */ _if(0, "<div>b</div>", "b");
const $for_content__items_length = /* @__PURE__ */ _for_closure(0, ($scope) => $for_content__if($scope, $scope._.e > 1 ? 0 : 1));
const $for_content__setup = $for_content__items_length;
const $itemId = /* @__PURE__ */ _let(2);
const $for = /* @__PURE__ */ _for_of(0, "<div>a</div><!><!>", "b%c", $for_content__setup);
const $items = /* @__PURE__ */ _let(3, ($scope) => {
	$items_length($scope, $scope.d?.length);
	$for($scope, [$scope.d]);
});
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.d, $itemId($scope, $scope.c + 1)]);
}));
const $items_length = /* @__PURE__ */ _const(4, $for_content__items_length);
