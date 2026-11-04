// template.marko
const $for_content__input_title__OR__count = /*@__PURE__*/ _or_patch("a0", 1, ($scope) => _text($scope.a, $scope._.f + " " + $scope.M + " #" + $scope._.g));
const $for_content__count = /*@__PURE__*/ _for_closure_patch("a5", 0, $for_content__input_title__OR__count, 8);
const $count = _let(6, $for_content__count);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
