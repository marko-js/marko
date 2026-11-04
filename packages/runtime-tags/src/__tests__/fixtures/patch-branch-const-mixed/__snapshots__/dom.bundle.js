// template.marko
const $if_content__input_title__OR__count = /*@__PURE__*/ _or_patch("a0", 1, ($scope) => _text($scope.a, $scope._.f + "@" + $scope._.g));
const $if_content__count = /*@__PURE__*/ _if_closure_patch("a5", 0, 0, $if_content__input_title__OR__count);
const $count = _let(6, $if_content__count);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
