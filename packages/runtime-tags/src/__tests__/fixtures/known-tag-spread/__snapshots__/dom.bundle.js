// tags/child-a/index.marko
const $input_a = ($scope, input_a) => _text($scope.a, input_a);
const $input_b = ($scope, input_b) => _text($scope.b, input_b);
const $input_c = ($scope, input_c) => _text($scope.c, input_c);

// template.marko
const $extras__OR__n = /* @__PURE__ */ _or(10, ($scope) => {
	const $childa_input_spread = {
		a: $scope.j,
		...$scope.i
	};
	$input_a($scope.c, $childa_input_spread.a);
	$input_b($scope.c, $childa_input_spread.b);
	$input_c($scope.c, $childa_input_spread.c);
});
const $n = /* @__PURE__ */ _let(9, ($scope) => {
	_text($scope.b, $scope.j);
	$input_a($scope.d, $scope.j);
	$extras__OR__n($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.j + 1);
}));
