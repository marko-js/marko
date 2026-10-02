// tags/child.marko
const $input_a = ($scope, input_a) => _text($scope.a, input_a);
const $input_b = ($scope, input_b) => _text($scope.b, input_b);

// template.marko
const $o = /*@__PURE__*/ _let(2, ($scope) => {
	$o_a($scope, $scope.c?.a);
	$o_b($scope, $scope.c?.b);
});
const $o_a = /*@__PURE__*/ _const(3, ($scope) => $input_a($scope.a, $scope.d));
const $o_b = /*@__PURE__*/ _const(4, ($scope) => $input_b($scope.a, $scope.e));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$o($scope, {
		a: 3,
		b: 4
	});
}));
