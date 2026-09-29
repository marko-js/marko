// tags/greet/index.marko
const $double = /*@__PURE__*/ _const(5, ($scope) => _return($scope, $scope.f));
const $input_n = ($scope, input_n) => $double($scope, input_n * 2);

// template.marko
const $count = /*@__PURE__*/ _let(4, ($scope) => $input_n($scope.a, $scope.e));
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.e + 1);
}));
const $d = _var_resume("a0", ($scope, d) => _text($scope.c, d));
