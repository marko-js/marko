// template.marko
const $input_label__OR__n = /*@__PURE__*/ _fill("a2", 5, /*@__PURE__*/ _or(9, ($scope) => _text($scope.b, $scope.i + $scope.f)));
const $n = _let(8, $input_label__OR__n);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.i + 1);
}));
const $input_label__OR__input_other__script = _script("a0", ($scope) => $scope.c.textContent = "script:" + $scope.f + $scope.g);
