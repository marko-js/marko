// template.marko
const $if_content__seen = /*@__PURE__*/ _let(1, ($scope) => _text($scope.a, $scope.b));
const $if_content__count = /*@__PURE__*/ _init_if_closure("a3", 0, 0, ($scope) => $if_content__seen($scope, $scope._.f + 1));
const $count = /*@__PURE__*/ _let(5, $if_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
