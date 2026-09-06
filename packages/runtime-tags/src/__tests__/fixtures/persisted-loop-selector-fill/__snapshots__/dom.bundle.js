// template.marko
const $for_content__if = /*@__PURE__*/ _if(1, "<span>*</span>");
const $for_content__input_selected__OR__item_id = /*@__PURE__*/ _fill_join_for("a0", 4, /*@__PURE__*/ _or(5, ($scope) => $for_content__if($scope, $scope._.e === $scope.e ? 0 : 1)), 0);
const $for_content__input_selected = /*@__PURE__*/ _for_closure(0, $for_content__input_selected__OR__item_id);
const $for_content__setup = $for_content__input_selected;
const $for_content__item_id = /*@__PURE__*/ _const(4, ($scope) => {
	_text($scope.a, $scope.e);
	$for_content__input_selected__OR__item_id($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item_id($scope, $params2[0]?.id);
const $for = /*@__PURE__*/ _for_of(0, "<li><!><!></li>", "D%b%", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let(5, ($scope) => $for($scope, [$scope.f, "id"]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.f, { id: $scope.f?.length + 1 }]);
}));
