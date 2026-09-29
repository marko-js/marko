// template.marko
const $for_content__input_title__OR__count = /*@__PURE__*/ _fill_join_for("a0", 5, /*@__PURE__*/ _init_join("a3", /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.f + " " + $scope.M + " #" + $scope._.g))), 0, 0);
const $for_content__count = /*@__PURE__*/ _init_for_closure("a4", 0, $for_content__input_title__OR__count);
const $count = /*@__PURE__*/ _let(6, $for_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
