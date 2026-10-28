// tags/rows.marko
const $input_a__OR__input_b__OR__input_c = /*@__PURE__*/ _or_resume("b0", 7, ($scope) => _text($scope.a, $scope.e + $scope.f + $scope.g), 2);
const $input_b = /*@__PURE__*/ _const(5, $input_a__OR__input_b__OR__input_c);

// template.marko
const $b = _let(7, ($scope) => $input_b($scope.b, $scope.h));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$b($scope, $scope.h + "!");
}));
