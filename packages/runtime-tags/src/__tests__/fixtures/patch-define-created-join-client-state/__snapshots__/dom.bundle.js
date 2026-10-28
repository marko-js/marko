// template.marko
const $PlainChild_content__input_a__OR__input_b = /*@__PURE__*/ _fill_signal("3 a1,4 a2", /*@__PURE__*/ _or_resume("a3", 5, ($scope) => _text($scope.a, $scope.d + $scope.e)));
const $PlainChild_content__input_a = /*@__PURE__*/ _const(3, $PlainChild_content__input_a__OR__input_b);
const $if_content__tab = /*@__PURE__*/ _init_resume("a9", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $PlainChild_content__input_a($scope.a, $scope._.g)));
const $tab = /*@__PURE__*/ _let(6, $if_content__tab);
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$tab($scope, +$scope.g + 1);
}));
