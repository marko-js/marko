// tags/child.marko
const $input_a__OR__input_b = /*@__PURE__*/ _fill_join("b2", 5, /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _or_resume("b3", 6, ($scope) => _text($scope.a, $scope.e + $scope.f))));
const $input_a__script = _script("b0", ($scope) => $scope.b.textContent = "s:" + $scope.e);
const $input_b = /*@__PURE__*/ _const(5, $input_a__OR__input_b);

// template.marko
const $n = _let(5, ($scope) => $input_b($scope.a, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.f + 1);
}));
