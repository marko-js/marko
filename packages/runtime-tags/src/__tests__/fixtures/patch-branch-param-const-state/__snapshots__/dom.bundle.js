// template.marko
const $if_content__count__OR__label = /*@__PURE__*/ _fill("a0", 1, /*@__PURE__*/ _or(2, ($scope) => _text($scope.a, $scope.b + " #" + $scope._.g)));
const $if_content__count = /*@__PURE__*/ _init_resume("a6", /*@__PURE__*/ _if_closure(0, 0, $if_content__count__OR__label));
const $count = _let(6, $if_content__count);
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
