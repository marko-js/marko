// template.marko
const $if_content__count__OR__label = /*@__PURE__*/ _fill_join("a1", 1, /*@__PURE__*/ _or(2, ($scope) => _text($scope.a, $scope.b + " #" + $scope._.g)));
const $if_content__label = /*@__PURE__*/ _fill_const("a1", 1, $if_content__count__OR__label);
const $if_content__input_title = /*@__PURE__*/ _fill_join("a4", 5, _shell_if_closure("a2", 0, 0, ($scope) => $if_content__label($scope, "[" + $scope._.f + "]")));
const $if_content__count = _shell_if_closure("a7", 0, 0, $if_content__count__OR__label);
const $count = /*@__PURE__*/ _fill_let("a5", 6, $if_content__count);
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
