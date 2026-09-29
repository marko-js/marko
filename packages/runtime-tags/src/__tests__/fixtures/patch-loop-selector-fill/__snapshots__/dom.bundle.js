// template.marko
const $for_content__if = /*@__PURE__*/ _if(1, "<span>*</span>");
const $for_content__input_selected = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__if($scope, $scope._.e === $scope.M ? 0 : 1)));
const $for_content__setup = ($scope) => {
	$for_content__input_selected._($scope);
	_text($scope.a, $scope.M);
};
const $for = /*@__PURE__*/ _for_of(0, "<li><!><!></li>", "D%b%", $for_content__setup);
const $items = /*@__PURE__*/ _let(5, ($scope) => $for($scope, [$scope.f, "id"]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.f, { id: $scope.f?.length + 1 }]);
}));
