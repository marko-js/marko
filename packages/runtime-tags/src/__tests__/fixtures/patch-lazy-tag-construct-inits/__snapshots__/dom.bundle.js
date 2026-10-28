// template.marko
const $n = /*@__PURE__*/ _let(8, ($scope) => _text($scope.b, $scope.i));
const $setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.i + 1);
}));

// child.marko
const $for_content__count__OR__i = /*@__PURE__*/ _or_resume("a5", 4, ($scope) => _text($scope.b, $scope._.f + $scope.d));
const $for_content__count = /*@__PURE__*/ _for_closure(1, $for_content__count__OR__i);
const $count = /*@__PURE__*/ _fill_let("a3", 5, $for_content__count);
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.f + 1);
}));
