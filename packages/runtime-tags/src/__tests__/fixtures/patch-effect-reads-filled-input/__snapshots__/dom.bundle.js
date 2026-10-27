// template.marko
const $input_label__OR__n = /*@__PURE__*/ _or(7, ($scope) => _text($scope.b, $scope.g + $scope.f));
const $n = /*@__PURE__*/ _let(6, $input_label__OR__n);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
const $input_label__script = _script("a0", ($scope) => $scope.c.textContent = "script:" + $scope.f);
const $input_label = fill("a2", /*@__PURE__*/ _const(5, ($scope) => {
	$input_label__OR__n($scope);
	$input_label__script($scope);
}));
