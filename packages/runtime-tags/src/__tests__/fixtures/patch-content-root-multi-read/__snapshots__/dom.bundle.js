// template.marko
const $input_content__OR__count = /*@__PURE__*/ _fill("a1", 5, /*@__PURE__*/ _or(7, ($scope) => _text($scope.b, $scope.f + ":" + $scope.g)));
const $count = _let(6, $input_content__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.g + 1);
}));
