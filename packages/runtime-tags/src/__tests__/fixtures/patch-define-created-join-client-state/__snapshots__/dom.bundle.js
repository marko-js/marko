// template.marko
const $PlainChild_content__input_a__OR__input_b = /*@__PURE__*/ _or_patch("a1", 5, ($scope) => _text($scope.a, $scope.d + $scope.e));
const $PlainChild_content__input_a = /*@__PURE__*/ _const(3, $PlainChild_content__input_a__OR__input_b);
const $if_content__tab = /*@__PURE__*/ _if_closure_patch("a6", 1, 0, ($scope) => $PlainChild_content__input_a($scope.a, $scope._.g));
const $tab = _let(6, $if_content__tab);
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$tab($scope, +$scope.g + 1);
}));
