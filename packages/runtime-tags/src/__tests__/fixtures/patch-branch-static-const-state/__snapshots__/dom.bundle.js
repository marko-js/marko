// template.marko
const $if_content__count__OR__alias = /*@__PURE__*/ _or_resume("a3", 2, ($scope) => _text($scope.a, $scope.b + $scope._.f));
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, $if_content__count__OR__alias);
const $count = _let(5, $if_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
