// template.marko
const $input_title__OR__count = /*@__PURE__*/ _fillable("a0", 5, /*@__PURE__*/ _or(7, ($scope) => _text($scope.a, $scope.f + " #" + $scope.g)));
const $count = /*@__PURE__*/ _let(6, $input_title__OR__count);
const $input_title__OR__other = /*@__PURE__*/ _fillable("a0", 5, /*@__PURE__*/ _or(9, ($scope) => _text($scope.b, $scope.f + " / " + $scope.i)));
const $other = /*@__PURE__*/ _let(8, $input_title__OR__other);
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.g + 1);
	$other($scope, $scope.i - 1);
}));
