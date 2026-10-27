// tags/doubler/index.marko
const $double$1 = /*@__PURE__*/ _const(3, ($scope) => _return($scope, $scope.d));
const $input_value = ($scope, input_value) => $double$1($scope, input_value * 2);

// template.marko
const $count = /*@__PURE__*/ _let(4, ($scope) => $input_value($scope.a, $scope.e));
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.e + 1);
}));
const $double = _var_resume("a0", ($scope, double) => _text($scope.c, double));
