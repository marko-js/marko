// template.marko
const $if_content__seen = _fill_let("a1", 1, ($scope) => _text($scope.a, $scope.b));
const $if_content__count = _resumed.a5 = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__seen($scope, $scope._.f + 1));
const $count = /*@__PURE__*/ _fill_let("a3", 5, $if_content__count);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
