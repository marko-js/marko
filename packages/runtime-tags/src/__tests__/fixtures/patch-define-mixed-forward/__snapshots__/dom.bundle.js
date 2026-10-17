// template.marko
const $Kid_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join("a2", 4, /*@__PURE__*/ _fill_join("a1", 3, /*@__PURE__*/ _shell_or("a3", 5, ($scope) => _text($scope.a, $scope.d + $scope.e))));
const $Kid_content__input_a = /*@__PURE__*/ _const(3, $Kid_content__input_a__OR__input_b);
const $s = /*@__PURE__*/ _fill_let("a5", 5, ($scope) => $Kid_content__input_a($scope.a, $scope.f));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$s($scope, +$scope.f + 1);
}));
