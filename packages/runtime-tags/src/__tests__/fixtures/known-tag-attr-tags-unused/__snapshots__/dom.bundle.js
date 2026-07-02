// tags/child/index.marko
const $input_a = ($scope, input_a) => _text($scope.a, input_a);

// template.marko
const $n = /* @__PURE__ */ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$input_a($scope.c, $scope.d);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.d + 1);
}));
