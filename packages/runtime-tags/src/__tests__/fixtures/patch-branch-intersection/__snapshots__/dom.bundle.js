// template.marko
const $if_content__input_title__OR__count = _fill_join_if("a2", 5, /*@__PURE__*/ _shell_join("a5", /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._.f + " #" + $scope._.g))), 0, 0, 0);
const $if_content__count = _shell_if_closure("a6", 0, 0, $if_content__input_title__OR__count);
const $count = /*@__PURE__*/ _fill_let("a3", 6, $if_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
