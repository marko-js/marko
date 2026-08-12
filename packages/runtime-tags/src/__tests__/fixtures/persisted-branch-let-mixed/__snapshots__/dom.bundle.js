// template.marko
const $if_content__n = /*@__PURE__*/ _fill_let("a1", 2, ($scope) => _text($scope.a, $scope.c));
const $if_content__setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$if_content__n($scope, +$scope.c + 1);
}));
const $input_title__OR__count = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _or(8, ($scope) => _text($scope.a, $scope.f + " #" + $scope.h)));
const $count = /*@__PURE__*/ _let(7, $input_title__OR__count);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
