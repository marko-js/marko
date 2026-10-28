// template.marko
const $if_content__input_title__OR__n = /*@__PURE__*/ _fill_signal("6 a4", /*@__PURE__*/ _or_resume("a6", 3, ($scope) => _text($scope.a, $scope._.g + "@" + $scope.c)), _if_closure, 0, 0);
const $if_content__n = /*@__PURE__*/ _fill_let("a1", 2, $if_content__input_title__OR__n);
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$if_content__n($scope, +$scope.c + 1);
}));
const $count = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("a3", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.h + 1);
}));
