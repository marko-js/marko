// template.marko
const $if_content__count__OR__alias = /*@__PURE__*/ _fill_join("a0", 1, /*@__PURE__*/ _or(2, ($scope) => _text($scope.a, $scope.b + $scope._.f)));
const $if_content__count = /*@__PURE__*/ _init_if_closure("a3", 0, 0, $if_content__count__OR__alias);
const $count = /*@__PURE__*/ _let(5, $if_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
