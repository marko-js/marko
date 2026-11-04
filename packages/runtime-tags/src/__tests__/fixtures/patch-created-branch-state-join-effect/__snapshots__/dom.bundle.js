// template.marko
const $if_content__count__OR__n__script = _script("a0", ($scope) => console.log(`effect ${$scope.c + $scope._.f}`));
const $if_content__count__OR__n = /*@__PURE__*/ _or(3, $if_content__count__OR__n__script);
const $if_content__count = /*@__PURE__*/ _if_closure_patch("a5", 0, 0, ($scope) => {
	_text($scope.b, $scope._.f);
	$if_content__count__OR__n($scope);
});
const $if_content__n = _fill_let("a1", 2, ($scope) => {
	_text($scope.a, $scope.c);
	$if_content__count__OR__n($scope);
});
const $count = _let(5, $if_content__count);
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
